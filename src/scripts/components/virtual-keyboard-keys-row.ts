import { VirtualKeyboardComponent } from './virtual-keyboard-component';
import { VirtualKeyboardKeyComponent } from './virtual-keyboard-key-component';
import { VirtualKeyboardKey } from '../virtual-keyboard-key';

export class VirtualKeyboardKeysRow extends VirtualKeyboardComponent
{
    public constructor(public readonly keys: VirtualKeyboardKey[])
    {
        super();
    }

    protected onInit(): void
    {
        for (const key of this.keys)
        {
            const keyComponent = this.createKeyComponent(key);
            if (!!keyComponent)
            {
                this.components.add(keyComponent);
            }
        }
    }

    protected createKeyComponent(key: VirtualKeyboardKey): VirtualKeyboardComponent | null | undefined
    {
        return new VirtualKeyboardKeyComponent(key);
    }

    protected onSetup(): HTMLElement | null | undefined
    {
        const element = document.createElement('div');
        element.classList.add(`${this.virtualKeyboard.cssClassName}__keys-row`);
        return element;
    }
}
