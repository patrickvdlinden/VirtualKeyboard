import { VirtualKeyboardComponent } from './virtual-keyboard-component';
import { VirtualKeyboardCapsKey } from './virtual-keyboard-caps-key';
import { VirtualKeyboardSpaceBarKey } from './virtual-keyboard-space-bar-key';
import { VirtualKeyboardBackspaceKey } from './virtual-keyboard-backspace-key';

export class VirtualKeyboardControlKeys extends VirtualKeyboardComponent
{
    protected onInit(): void
    {
        this.components.add(new VirtualKeyboardCapsKey());
        this.components.add(new VirtualKeyboardSpaceBarKey());
        this.components.add(new VirtualKeyboardBackspaceKey());
    }

    protected onSetup(): HTMLElement | null | undefined
    {
        const element = document.createElement('div');
        element.classList.add(`${this.virtualKeyboard.cssClassName}__control-keys`);
        return element;
    }
}
