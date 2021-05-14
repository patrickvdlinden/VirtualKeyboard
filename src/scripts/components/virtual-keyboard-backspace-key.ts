import { VirtualKeyboardControlKey } from './virtual-keyboard-control-key';

export class VirtualKeyboardBackspaceKey extends VirtualKeyboardControlKey
{
    private _holdInterval?: number;
    private _pressAndHold = false;

    public readonly name: string = 'backspace';

    public constructor()
    {
        super();
    }

    protected get icon(): string
    {
        return this.virtualKeyboard.options.backspaceIcon ?? '';
    }

    protected get label(): string
    {
        return this.virtualKeyboard.options.backspaceLabel ?? '';
    }

    protected onKeyUp(evt: MouseEvent): boolean
    {
        if (!super.onKeyUp(evt))
        {
            return false;
        }

        this._pressAndHold = false;
        if (!!this._holdInterval)
        {
            window.clearInterval(this._holdInterval);
        }

        return true;
    }

    protected onKeyPress(evt: MouseEvent): boolean
    {
        if (!super.onKeyPress(evt))
        {
            return false;
        }

        const targetElement = this.virtualKeyboard.focusedElement;
        if (!targetElement)
        {
            return false;
        }

        // TODO: Is this check dynamic enough?
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

        return true;
    }

    protected onKeyLongPress(evt: MouseEvent): boolean
    {
        this._pressAndHold = true;
        this._holdInterval = window.setInterval(() =>
        {
            if (this._pressAndHold && !this.onKeyPress(evt))
            {
                this._pressAndHold = false;
            }
        }, this.virtualKeyboard.options.pressAndHoldThreshold);

        return super.onKeyLongPress(evt);
    }
}
