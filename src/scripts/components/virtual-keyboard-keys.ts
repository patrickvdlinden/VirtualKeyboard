import { VirtualKeyboardComponent } from './virtual-keyboard-component';
import { VirtualKeyboardKey } from '../virtual-keyboard-key';
import { VirtualKeyboardKeysRow } from './virtual-keyboard-keys-row';

export class VirtualKeyboardKeys extends VirtualKeyboardComponent
{
    protected onInit(): void
    {
        for (const row of this.virtualKeyboard.keys)
        {
            const rowComponent = this.createKeysRowComponent(row);
            if (!!rowComponent)
            {
                this.components.add(rowComponent);
            }
        }
    }

    protected createKeysRowComponent(row: VirtualKeyboardKey[]): VirtualKeyboardComponent | null | undefined
    {
        return new VirtualKeyboardKeysRow(row);
    }

    protected onSetup(): HTMLElement | null | undefined
    {
        const element = document.createElement('div');
        element.classList.add(`${this.virtualKeyboard.cssClassName}__keys`);
        return element;
    }
}
