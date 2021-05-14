import { VirtualKeyboardKeyComponent } from './virtual-keyboard-key-component';
import { VirtualKeyboardKey } from '@/virtual-keyboard-key';

export abstract class VirtualKeyboardControlKey extends VirtualKeyboardKeyComponent
{
    public abstract readonly name: string;

    protected constructor(key?: VirtualKeyboardKey)
    {
        super(key);
    }

    protected abstract get icon(): string;
    protected abstract get label(): string;

    protected onSetup(): HTMLElement | null | undefined
    {
        const keyElement = super.onSetup();
        if (!keyElement)
        {
            return keyElement;
        }

        keyElement.classList.add(`${this.virtualKeyboard.cssClassName}__key--control-key`);
        keyElement.classList.add(`${this.virtualKeyboard.cssClassName}__key--${this.name}`);
        keyElement.innerHTML = this.icon + this.label;
        return keyElement;
    }
}
