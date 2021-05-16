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
        this.virtualKeyboard.capsLocked = false;

        return true;
    }

    protected onKeyDoublePress(evt: MouseEvent): boolean
    {
        if (this.virtualKeyboard.options.capsMode === 'once')
        {
            return false;
        }

        this.virtualKeyboard.capsActive = true;
        this.virtualKeyboard.capsLocked = true;

        return false;
    }
}
