import { VirtualKeyboard } from '../virtual-keyboard';
import { VirtualKeyboardComponentsList } from './virtual-keyboard-components-list';

export abstract class VirtualKeyboardComponent
{
    private _containerElement?: HTMLElement;

    public enabled = true;
    public virtualKeyboard!: VirtualKeyboard;
    public isInitialized = false;

    // A list of child components.
    public readonly components: VirtualKeyboardComponentsList = new VirtualKeyboardComponentsList();

    constructor(enabled?: boolean)
    {
        if (enabled === undefined || enabled === null)
        {
            this.enabled = true;
        }
        else
        {
            this.enabled = enabled;
        }
    }

    public get containerElement(): HTMLElement
    {
        return this._containerElement ?? this.virtualKeyboard.containerElement;
    }

    public init(virtualKeyboard: VirtualKeyboard): void
    {
        if (!this.enabled)
        {
            return;
        }

        this.virtualKeyboard = virtualKeyboard;

        if (this.isInitialized)
        {
            // Make sure the child components are initialized as well,
            // even if this component was already initialized before.
            this.components.init(virtualKeyboard);
            return;
        }

        this.onInit();
        this.components.init(virtualKeyboard);
        this.onInitDone();

        this.isInitialized = true;
    }

    public setup(containerElement: HTMLElement): void
    {
        this._containerElement = containerElement;

        if (!this.enabled)
        {
            return;
        }

        if (!this.virtualKeyboard.containerElement)
        {
            throw new Error('The VirtualKeyboard\'s containerElement is missing.');
        }

        const element = this.onSetup();
        if (element)
        {
            containerElement.appendChild(element);
        }

        this.components.setup(element ?? this.containerElement);
        this.onSetupDone();
    }

    protected abstract onInit(): void;
    protected abstract onSetup(): HTMLElement | null | undefined;

    protected onInitDone(): void
    {
        // No base implementation.
    }

    protected onSetupDone(): void
    {
        // No base implementation.
    }

    public onVirtualKeyboardOpen(targetElement: HTMLElement): void
    {
        // No base implementation.
    }

    public onVirtualKeyboardOpened(targetElement: HTMLElement): void
    {
        // No base implementation.
    }

    public onVirtualKeyboardClose(targetElement?: HTMLElement): void
    {
        // No base implementation.
    }

    public onVirtualKeyboardClosed(targetElement?: HTMLElement): void
    {
        // No base implementation.
    }
}
