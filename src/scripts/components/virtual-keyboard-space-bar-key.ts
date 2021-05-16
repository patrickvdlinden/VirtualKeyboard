import { VirtualKeyboardControlKey } from './virtual-keyboard-control-key';

export class VirtualKeyboardSpaceBarKey extends VirtualKeyboardControlKey
{
    public readonly name: string = 'space-bar';

    public constructor()
    {
        super({
            value: ' '
        });
    }

    protected get icon(): string
    {
        return this.virtualKeyboard.options.spaceBarIcon ?? '';
    }

    protected get label(): string
    {
        return this.virtualKeyboard.options.spaceBarLabel ?? '';
    }

    protected appendValue(targetElement: HTMLElement, value: string): void
    {
        if (value.length === 0)
        {
            return;
        }

        if (targetElement instanceof HTMLInputElement || targetElement instanceof HTMLTextAreaElement)
        {
            targetElement.value += value;
        }
        else
        {
            if (targetElement.innerHTML.substr(-value.length, value.length) === value)
            {
                targetElement.innerHTML += '&nbsp;';
            }
            else
            {
                targetElement.innerHTML += value;
            }
        }
    }
}
