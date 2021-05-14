import { VirtualKeyboardComponent } from './virtual-keyboard-component';
import { VirtualKeyboardKey } from '../virtual-keyboard-key';
import { VirtualKeyboardKeys } from '@/components/virtual-keyboard-keys';

export class VirtualKeyboardKeyComponent extends VirtualKeyboardComponent
{
    private _dblclickTimer?: number;
    private _withinDblclickThreshold = false;
    private _longPressTimer?: number;
    private _showSpecialCharacters = false;

    protected readonly handleDblclickEvent: boolean = false;

    public constructor(public readonly key?: VirtualKeyboardKey)
    {
        super();
    }

    public get parent(): VirtualKeyboardKeys | undefined
    {
        return super.parent as VirtualKeyboardKeys | undefined;
    }

    protected onInit(): void
    {
        // No implementation.
    }

    protected onSetup(): HTMLElement | null | undefined
    {
        const keyElement = document.createElement('button');
        keyElement.type = 'button';
        keyElement.classList.add(`${this.virtualKeyboard.cssClassName}__key`);

        keyElement.addEventListener('mousedown', (e) => this.onKeyDown(e));
        keyElement.addEventListener('mouseup', (e) => this.onKeyUp(e));
        keyElement.addEventListener('click', (e) => this.onKeyPress(e));
        keyElement.addEventListener('longpress', (e) => this.onKeyLongPress(e as MouseEvent));

        if (!!this.key)
        {
            keyElement.dataset.value = this.key.value;

            // TODO: to locale uppercase
            keyElement.dataset.valueUppercase = this.key.uppercaseValue ?? this.key.value.toUpperCase();

            if (!!this.key.specialCharacters && this.key.specialCharacters.length > 0)
            {
                keyElement.dataset.specialCharacters = this.key.specialCharacters.join('');
            }
        }

        return keyElement;
    }

    protected appendValue(targetElement: HTMLElement, value: string): void
    {
        if (targetElement instanceof HTMLInputElement || targetElement instanceof HTMLTextAreaElement)
        {
            targetElement.value += value;
        }
        else
        {
            targetElement.textContent += value;
        }
    }

    protected onKeyDown(evt: MouseEvent): boolean
    {
        if (this._longPressTimer)
        {
            window.clearTimeout(this._longPressTimer);
        }

        this._longPressTimer = window.setTimeout(() =>
        {
            this.element?.dispatchEvent(new CustomEvent('longpress', evt));
        }, this.virtualKeyboard.options.longPressThreshold);

        return !evt.cancelBubble;
    }

    protected onKeyUp(evt: MouseEvent): boolean
    {
        if (this._longPressTimer)
        {
            window.clearTimeout(this._longPressTimer);
        }

        this._showSpecialCharacters = false;
        return !evt.cancelBubble;
    }

    protected onKeyPress(evt: MouseEvent): boolean
    {
        const keyElement = evt.target as HTMLElement;
        if (this._showSpecialCharacters && !!keyElement.dataset.specialCharacters)
        {
            this._showSpecialCharacters = false;
            return false;
        }

        if (!this.virtualKeyboard.focusedElement)
        {
            return false;
        }

        if (this.handleDblclickEvent)
        {
            if (this._dblclickTimer)
            {
                window.clearTimeout(this._dblclickTimer);
            }

            if (this._withinDblclickThreshold)
            {
                this._withinDblclickThreshold = false;
                if (!this.onKeyDoublePress(evt))
                {
                    return false;
                }
            }

            this._withinDblclickThreshold = true;
            this._dblclickTimer = window.setTimeout(() =>
            {
                this._withinDblclickThreshold = false;
            }, this.virtualKeyboard.options.dblclickThreshold);
        }

        if (!!keyElement.dataset.value)
        {
            const uppercaseValue = keyElement.dataset.valueUppercase;
            const value = !!uppercaseValue && this.virtualKeyboard.capsActive
                ? uppercaseValue
                : keyElement.dataset.value;

            const targetElement = this.virtualKeyboard.focusedElement;
            this.appendValue(targetElement, value);

            if (this.virtualKeyboard.capsActive && !this.virtualKeyboard.capsLocked)
            {
                this.virtualKeyboard.capsActive = false;
            }
        }

        return !evt.cancelBubble;
    }

    protected onKeyDoublePress(evt: MouseEvent): boolean
    {
        return !evt.cancelBubble;
    }

    protected onKeyLongPress(evt: MouseEvent): boolean
    {
        const keyElement = evt.target as HTMLElement;
        if (!!keyElement.dataset.specialCharacters)
        {
            if (!this.virtualKeyboard.options.allowSpecialCharacters)
            {
                return false;
            }

            // TODO: Show special characters if available.
            this._showSpecialCharacters = true;
        }

        return !evt.cancelBubble;
    }
}
