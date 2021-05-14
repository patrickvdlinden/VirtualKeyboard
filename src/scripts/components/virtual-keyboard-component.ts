import { VirtualKeyboard } from '../virtual-keyboard';
import { VirtualKeyboardComponentsList } from './virtual-keyboard-components-list';
import { VirtualKeyboardKeyComponent } from '@/components/virtual-keyboard-key-component';

export abstract class VirtualKeyboardComponent
{
    private _containerElement?: HTMLElement;
    private _owner?: VirtualKeyboardComponent | VirtualKeyboard;
    private _isInitialized = false;
    private _element?: HTMLElement | null;

    // A list of child components.
    public readonly components: VirtualKeyboardComponentsList = new VirtualKeyboardComponentsList(this);

    public get isInitialized(): boolean
    {
        return this._isInitialized;
    }

    public get containerElement(): HTMLElement
    {
        return this._containerElement as HTMLElement;
    }

    public get element(): HTMLElement | null | undefined
    {
        return this._element;
    }

    public get owner(): VirtualKeyboardComponent | VirtualKeyboard
    {
        if (!this._owner)
        {
            throw new Error('The owner has not been defined (yet).');
        }

        return this._owner;
    }

    public get parent(): VirtualKeyboardComponent | undefined
    {
        return this._owner instanceof VirtualKeyboardComponent
            ? this._owner
            : undefined;
    }

    public get virtualKeyboard(): VirtualKeyboard
    {
        return this._owner instanceof VirtualKeyboard
            ? this._owner
            : this._owner?.virtualKeyboard as VirtualKeyboard;
    }

    public init(owner: VirtualKeyboardComponent | VirtualKeyboard): void
    {
        this._owner = owner;

        if (this.isInitialized)
        {
            return;
        }

        this.onInit();
        this.components.init();

        this._isInitialized = true;
        this.onInitDone();
    }

    public setup(containerElement: HTMLElement): void
    {
        this._containerElement = containerElement;

        if (!this.containerElement)
        {
            throw new Error('The containerElement is missing.');
        }

        this._element = this.onSetup();
        if (!!this.element)
        {
            containerElement.appendChild(this.element);
        }

        this.components.setup(this.element ?? containerElement);
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

    protected onDisabled(): void
    {
        // No base implementation.
    }

    protected onEnabled(): void
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
