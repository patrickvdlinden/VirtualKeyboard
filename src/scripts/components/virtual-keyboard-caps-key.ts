import { VirtualKeyboardControlKey } from './virtual-keyboard-control-key';

export class VirtualKeyboardCapsKey extends VirtualKeyboardControlKey
{
    public readonly name: string = 'caps';

    protected readonly handleDblclickEvent = true;

    public constructor()
    {
        super();
    }

    public get icon(): string
    {
        return this.virtualKeyboard.options.capsIcon ?? '';
    }

    public get label(): string
    {
        return this.virtualKeyboard.options.capsLabel ?? '';
    }

    protected onKeyPress(evt: MouseEvent): boolean
    {
        if (!super.onKeyPress(evt))
        {
            return false;
        }

        this.virtualKeyboard.capsActive = !this.virtualKeyboard.capsActive;

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

        this.virtualKeyboard.capsLocked = false;

        const capsLockedClassName = `${this.virtualKeyboard.cssClassName}--caps-locked`;
        this.virtualKeyboard.containerElement.classList.remove(capsLockedClassName);

        return true;
    }

    protected onKeyDoublePress(evt: MouseEvent): boolean
    {
        if (this.virtualKeyboard.options.capsMode === 'once')
        {
            return false;
        }

        this.virtualKeyboard.capsLocked = true;

        const capsLockedClassName = `${this.virtualKeyboard.cssClassName}--caps-locked`;
        if (!this.virtualKeyboard.containerElement.classList.contains(capsLockedClassName))
        {
            this.virtualKeyboard.containerElement.classList.add(capsLockedClassName);
        }

        return false;
    }
}
