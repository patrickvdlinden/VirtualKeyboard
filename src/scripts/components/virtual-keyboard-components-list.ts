import { VirtualKeyboardComponent } from './virtual-keyboard-component';
import { VirtualKeyboard } from '../virtual-keyboard';

export class VirtualKeyboardComponentsList
{
    private readonly _components: Array<VirtualKeyboardComponent> = [];
    private _containerElement?: HTMLElement;

    public constructor(private virtualKeyboard?: VirtualKeyboard)
    {
    }

    public get length(): number
    {
        return this._components.length;
    }

    public get containerElement(): HTMLElement | undefined
    {
        return this._containerElement ?? this.virtualKeyboard?.containerElement;
    }

    public init(virtualKeyboard: VirtualKeyboard): void
    {
        this.virtualKeyboard = virtualKeyboard;

        for (const component of this._components)
        {
            component.init(this.virtualKeyboard);
        }
    }

    public setup(containerElement: HTMLElement): void
    {
        for (const component of this._components)
        {
            component.setup(containerElement);
        }
    }

    public onVirtualKeyboardOpen(targetElement: HTMLElement): void
    {
        for (const component of this._components)
        {
            component.onVirtualKeyboardOpen(targetElement);
        }
    }

    public onVirtualKeyboardOpened(targetElement: HTMLElement): void
    {
        for (const component of this._components)
        {
            component.onVirtualKeyboardOpened(targetElement);
        }
    }

    public onVirtualKeyboardClose(targetElement?: HTMLElement): void
    {
        for (const component of this._components)
        {
            component.onVirtualKeyboardClose(targetElement);
        }
    }

    public onVirtualKeyboardClosed(targetElement?: HTMLElement): void
    {
        for (const component of this._components)
        {
            component.onVirtualKeyboardClosed(targetElement);
        }
    }

    public add(...components: VirtualKeyboardComponent[]): number
    {
        const total = this._components.push(...components);

        for (const component of components)
        {
            if (!!this.virtualKeyboard && (!component.isInitialized || component.virtualKeyboard !== this.virtualKeyboard))
            {
                component.init(this.virtualKeyboard);
            }
        }

        return total;
    }

    public remove(component: VirtualKeyboardComponent): void
    {
        let index = -1;
        for (const component2 of this._components)
        {
            index++;
            if (component === component2)
            {
                break;
            }
        }

        if (index >= 0)
        {
            this.removeAt(index, 1);
        }
    }

    public removeAt(start: number, deleteCount?: number): void
    {
        this._components.splice(start, deleteCount);
    }

    public toArray(): VirtualKeyboardComponent[]
    {
        return this._components.slice();
    }
}
