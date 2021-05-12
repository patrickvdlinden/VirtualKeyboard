import { VirtualKeyboardComponent } from './virtual-keyboard-component';
import { VirtualKeyboardControlKeys } from './virtual-keyboard-control-keys';

export class VirtualKeyboardKeys extends VirtualKeyboardComponent
{
    private _currentKeyDown?: HTMLElement;
    private _longPressTimer?: number;
    private _showSpecialCharacters = false;

    protected onInit(): void
    {
        this.components.add(new VirtualKeyboardControlKeys());
    }

    protected onSetup(): HTMLElement | null | undefined
    {
        const containerElement = document.createElement('div');
        containerElement.classList.add(`${this.virtualKeyboard.cssClassName}__keys`);

        for (const row of this.virtualKeyboard.keys)
        {
            const rowElement = document.createElement('div');
            rowElement.classList.add(`${this.virtualKeyboard.cssClassName}__keys-row`);

            for (const key of row)
            {
                const keyElement = document.createElement('button');
                keyElement.type = 'button';
                keyElement.classList.add(`${this.virtualKeyboard.cssClassName}__key`);
                keyElement.addEventListener('mousedown', (e) => this.onKeyDown(e));
                keyElement.addEventListener('mouseup', (e) => this.onKeyUp(e));
                keyElement.addEventListener('click', (e) => this.onKeyPress(e));
                keyElement.addEventListener('longpress', (e) => this.onKeyLongPress(e as MouseEvent));
                keyElement.dataset.lowercase = key.lowercase;
                keyElement.dataset.uppercase = key.uppercase ?? key.lowercase.toUpperCase();
                keyElement.dataset.specialCharacters = key.specialCharacters?.join('') ?? '';
                rowElement.appendChild(keyElement);
            }

            containerElement.appendChild(rowElement);
        }

        return containerElement;
    }

    protected onKeyDown(evt: MouseEvent): void
    {
        this._currentKeyDown = evt.target as HTMLElement;

        if (this._longPressTimer)
        {
            window.clearTimeout(this._longPressTimer);
        }

        this._longPressTimer = window.setTimeout(() =>
        {
            this._currentKeyDown?.dispatchEvent(new CustomEvent('longpress', evt));
        }, this.virtualKeyboard.options.longPressThreshold);
    }

    protected onKeyUp(evt: MouseEvent): void
    {
        this._currentKeyDown = undefined;

        if (this._longPressTimer)
        {
            window.clearTimeout(this._longPressTimer);
        }
    }

    protected onKeyPress(evt: MouseEvent): void
    {
        if (this._showSpecialCharacters)
        {
            this._showSpecialCharacters = false;
            return;
        }

        if (!this.virtualKeyboard.focusedElement)
        {
            return;
        }

        const keyElement = evt.target as HTMLButtonElement;
        const lowercaseValue = keyElement.dataset.lowercase;
        const uppercaseValue = keyElement.dataset.uppercase;
        const value = this.virtualKeyboard.capsActive ? uppercaseValue : lowercaseValue;

        const targetElement = this.virtualKeyboard.focusedElement;
        if (targetElement instanceof HTMLInputElement || targetElement instanceof HTMLTextAreaElement)
        {
            targetElement.value += value;
        }
        else
        {
            targetElement.innerText += value;
        }

        if (this.virtualKeyboard.capsActive && !this.virtualKeyboard.capsLocked)
        {
            this.virtualKeyboard.capsActive = false;
        }
    }

    protected onKeyLongPress(evt: MouseEvent): void
    {
        if (!this.virtualKeyboard.options.allowSpecialCharacters)
        {
            return;
        }

        // TODO: Show special characters if available.
        this._showSpecialCharacters = true;
    }
}
