import { VirtualKeyboardComponent } from './virtual-keyboard-component';

export class VirtualKeyboardControlKeys extends VirtualKeyboardComponent
{
    private _capsTimer?: number;
    private _withinCapsDblClickThreshold = false;

    protected onInit(): void
    {
        // No implementation.
    }

    protected onSetup(): HTMLElement | null | undefined
    {
        const element = document.createElement('div');
        element.classList.add(`${this.virtualKeyboard.cssClassName}__keys-row`);
        element.classList.add(`${this.virtualKeyboard.cssClassName}__keys-row--control-keys`);

        const keys = [
            this.virtualKeyboard.options.capsEnabled ? this.createCapsKey() : null,
            this.virtualKeyboard.options.spaceBarEnabled ? this.createSpaceBarKey() : null,
            this.virtualKeyboard.options.backspaceEnabled ? this.createBackspaceKey() : null
        ];
        for (const key of keys)
        {
            if (!!key)
            {
                element.appendChild(key);
            }
        }

        return element;
    }

    protected createCapsKey(): HTMLElement | null
    {
        return this.createControlKey('caps',
            this.virtualKeyboard.options.capsLabel ?? '',
            this.virtualKeyboard.options.capsIcon ?? '<svg></svg>',
            (e) => this.onCapsKeyPressed(e));
    }

    protected createSpaceBarKey(): HTMLElement | null
    {
        const spaceBarKey = this.createControlKey('space-bar',
            this.virtualKeyboard.options.spaceBarLabel ?? ' ',
            this.virtualKeyboard.options.spaceBarIcon ?? '',
            (e) => this.onSpaceBarKeyPressed(e));
        spaceBarKey.dataset.lowercase = ' ';
        spaceBarKey.dataset.uppercase = ' ';
        return spaceBarKey;
    }

    protected createBackspaceKey(): HTMLElement | null
    {
        return this.createControlKey('backspace',
            this.virtualKeyboard.options.backspaceLabel ?? '',
            this.virtualKeyboard.options.backspaceIcon ?? '<svg></svg>',
            (e) => this.onBackspaceKeyPressed(e));
    }

    protected createControlKey(name: string, label: string, icon: string, clickHandler: (e: MouseEvent) => void): HTMLElement
    {
        const controlKey = document.createElement('button');
        controlKey.type = 'button';
        controlKey.classList.add(`${this.virtualKeyboard.cssClassName}__key`);
        controlKey.classList.add(`${this.virtualKeyboard.cssClassName}__key--control-key`);
        controlKey.classList.add(`${this.virtualKeyboard.cssClassName}__key--${name}`);
        controlKey.addEventListener('click', clickHandler);
        controlKey.innerHTML = icon + label;
        return controlKey;
    }

    protected onCapsKeyPressed(evt: MouseEvent): void
    {
        if (!(evt.target instanceof HTMLButtonElement))
        {
            return;
        }

        if (this._capsTimer)
        {
            window.clearTimeout(this._capsTimer);
        }

        if (this._withinCapsDblClickThreshold)
        {
            this._withinCapsDblClickThreshold = false;
            this.onCapsKeyDoublePressed(evt);
            return;
        }

        this._withinCapsDblClickThreshold = true;
        this._capsTimer = window.setTimeout(() =>
        {
            this._withinCapsDblClickThreshold = false;
        }, this.virtualKeyboard.options.dblclickThreshold);

        this.virtualKeyboard.capsActive = !this.virtualKeyboard.capsActive;
        this.virtualKeyboard.capsLocked = false;

        const capsClassName = `${this.virtualKeyboard.cssClassName}--caps`;
        if (this.virtualKeyboard.capsActive)
        {
            if (!this.virtualKeyboard.containerElement.classList.contains(capsClassName))
            {
                this.virtualKeyboard.containerElement.classList.add(capsClassName);
            }
        }
        else
        {
            this.virtualKeyboard.containerElement.classList.remove(capsClassName);
        }
    }

    protected onCapsKeyDoublePressed(evt: MouseEvent): void
    {
        console.log('onCapsKeyDoublePressed');

        if (!(evt.target instanceof HTMLButtonElement))
        {
            return;
        }

        this.virtualKeyboard.capsLocked = true;
    }

    protected onSpaceBarKeyPressed(evt: MouseEvent): void
    {
        if (!(evt.target instanceof HTMLButtonElement))
        {
            return;
        }

        const targetElement = this.virtualKeyboard.focusedElement;
        if (!targetElement)
        {
            return;
        }

        if (targetElement instanceof HTMLInputElement || targetElement instanceof HTMLTextAreaElement)
        {
            targetElement.value += ' ';
        }
        else
        {
            targetElement.innerText += '&nbsp;';
        }
    }

    protected onBackspaceKeyPressed(evt: MouseEvent): void
    {
        if (!(evt.target instanceof HTMLButtonElement))
        {
            return;
        }

        const targetElement = this.virtualKeyboard.focusedElement;
        if (!targetElement)
        {
            return;
        }

        if (targetElement instanceof HTMLInputElement || targetElement instanceof HTMLTextAreaElement)
        {
            targetElement.value = targetElement.value.length > 0
                ? targetElement.value.substring(0, targetElement.value.length - 1)
                : '';
        }
        else
        {
            targetElement.innerText = targetElement.innerText.length > 0
                ? targetElement.innerText.substring(0, targetElement.innerText.length - 1)
                : '';
        }
    }
}
