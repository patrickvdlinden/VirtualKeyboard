import '../styles/virtual-keyboard.scss';
import { VirtualKeyboardOptions, VirtualKeyboardOptionsDefaults } from './virtual-keyboard-options';
import { VirtualKeyboardKey } from './virtual-keyboard-key';
import { VirtualKeyboardComponentsList } from './components/virtual-keyboard-components-list';

export class VirtualKeyboard
{
    private static _globalOptions?: VirtualKeyboardOptions;
    private static readonly _instances: VirtualKeyboard[] = [];

    private readonly _targetElements: Array<HTMLElement> = [];
    private readonly _keys: Array<Array<VirtualKeyboardKey>> = [];
    private _focusedElement?: HTMLElement;
    private _containerElement?: HTMLElement;
    private _capsActive = false;
    private _capsLocked = false;

    // The options for this VirtualKeyboard instance.
    public readonly options: VirtualKeyboardOptions;

    // An array of VirtualKeyboard components. Allows adding and/or removing of custom components.
    public readonly components: VirtualKeyboardComponentsList = new VirtualKeyboardComponentsList(this);

    public constructor(
        selectorOrElements?: string | NodeListOf<HTMLElement> | HTMLElement,
        options?: VirtualKeyboardOptions)
    {
        VirtualKeyboard._instances.push(this);

        this.options = Object.assign(
            {},
            VirtualKeyboard.defaultOptions,
            VirtualKeyboard.globalOptions,
            options || {});

        this._targetElements = this.parseTargetElements(selectorOrElements);
        this._keys = this.parseKeys(this.options?.layout);
        this.registerDefaultComponents();
        this.registerFocusEventListeners();
    }

    public static get defaultOptions(): VirtualKeyboardOptions
    {
        return VirtualKeyboardOptionsDefaults;
    }

    public static get globalOptions(): VirtualKeyboardOptions
    {
        return this._globalOptions || {};
    }

    public get targetElements(): Array<HTMLElement>
    {
        return this._targetElements;
    }

    public get focusedElement(): HTMLElement | undefined
    {
        return this._focusedElement;
    }

    public get containerElement(): HTMLElement
    {
        return this._containerElement as HTMLElement;
    }

    public get cssClassName(): string
    {
        return this.options.cssClassName || 'virtual-keyboard';
    }

    public get keys(): Array<VirtualKeyboardKey[]>
    {
        return this._keys;
    }

    public get capsActive(): boolean
    {
        return this._capsActive;
    }

    public set capsActive(active: boolean)
    {
        this._capsActive = active;

        if (!this._containerElement)
        {
            return;
        }

        const capsClassName = `${this.cssClassName}--caps`;
        if (active && !this._containerElement.classList.contains(capsClassName))
        {
            this._containerElement.classList.add(capsClassName);
        }
        else if (!active)
        {
            this._containerElement.classList.remove(capsClassName);
        }
    }

    public get capsLocked(): boolean
    {
        return this._capsLocked;
    }

    public set capsLocked(locked: boolean)
    {
        this._capsLocked = locked;

        if (!this.containerElement)
        {
            return;
        }

        const capsLockClassName = `${this.cssClassName}--caps-lock`;
        if (locked && !this.containerElement.classList.contains(capsLockClassName))
        {
            this.containerElement.classList.add(capsLockClassName);
        }
        else if (!locked)
        {
            this.containerElement.classList.remove(capsLockClassName);
        }
    }

    // Initializes global options for VirtualKeyboard.
    public static init(globalOptions: VirtualKeyboardOptions): void
    {
        this._globalOptions = Object.assign({}, this.defaultOptions, globalOptions);
    }

    // Opens the VirtualKeyboard window for the given target element.
    public open(targetElement: HTMLElement): void
    {
        // Close other VirtualKeyboard instances first.
        for (const vk of VirtualKeyboard._instances)
        {
            vk.close();
        }

        if (this.targetElements.indexOf(targetElement) === -1)
        {
            throw new Error('Could not open VirtualKeyboard for the target element.');
        }

        this._focusedElement = targetElement;

        this.capsActive = this.options.capsStartMode !== 'off';
        this.capsLocked = this.options.capsStartMode === 'lock';

        if (!this._containerElement)
        {
            this.setup();
        }

        this.components.onVirtualKeyboardOpen(targetElement);
        this.components.onVirtualKeyboardOpened(targetElement);
    }

    // Closes the VirtualKeyboard window.
    public close(): void
    {
        if (!this._containerElement)
        {
            return;
        }

        const focusedElement = this._focusedElement;
        this.components.onVirtualKeyboardClose(focusedElement);

        this._containerElement.remove();
        this._containerElement = undefined;
        this._focusedElement = undefined;

        this.components.onVirtualKeyboardClosed(focusedElement);
    }

    protected parseTargetElements(selectorOrElements: string | NodeListOf<HTMLElement> | HTMLElement | undefined): HTMLElement[]
    {
        if (!selectorOrElements)
        {
            return [];
        }

        if (!this.options.allowedElements || !this.options.allowedElements.length)
        {
            throw new Error('No allowed elements specified.');
        }

        if (typeof selectorOrElements === 'string')
        {
            selectorOrElements = document.querySelectorAll(selectorOrElements as string);
        }

        if (selectorOrElements instanceof NodeList || selectorOrElements instanceof HTMLElement)
        {
            const targetElements: HTMLElement[] = [];
            if (selectorOrElements instanceof NodeList)
            {
                for (const el of selectorOrElements)
                {
                    if (this.options.allowedElements.indexOf((el.nodeName || '').toLowerCase()) >= 0)
                    {
                        targetElements.push(el);
                    }
                }
            }
            else if (this.options.allowedElements.indexOf((selectorOrElements.nodeName || '').toLowerCase()) >= 0)
            {
                targetElements.push(selectorOrElements);
            }

            if (!targetElements.length)
            {
                console.warn('No valid target elements found for VirtualKeyboard.');
            }

            return targetElements;
        }
        else
        {
            throw new Error('Invalid type specified for selectorOrElements.');
        }
    }

    protected setup(): void
    {
        this._containerElement = this.createContainerElement();
        this.components.setup(this.containerElement);
    }

    protected registerDefaultComponents(): void
    {
        if (!this.options.components)
        {
            return;
        }

        const defaultComponents = this.options.components();
        for (const component of defaultComponents)
        {
            this.components.add(component);
        }
    }

    protected registerFocusEventListeners(): void
    {
        if (!this.options.openKeyboardOnFocus || this.targetElements.length === 0)
        {
            return;
        }

        for (const element of this.targetElements)
        {
            element.addEventListener('focus', () =>
            {
                if (this.options.openKeyboardOnFocus)
                {
                    this.open(element);
                }
            });
        }
    }

    protected createContainerElement(): HTMLElement
    {
        const containerElement = document.createElement('div');
        containerElement.classList.add(this.cssClassName);
        containerElement.classList.add(`${this.cssClassName}--theme-${(this.options.theme || 'default')}`);

        if (this.capsActive)
        {
            containerElement.classList.add(`${this.cssClassName}--caps`);
        }

        if (this.capsLocked)
        {
            containerElement.classList.add(`${this.cssClassName}--caps-lock`);
        }

        if (!!this.options.id)
        {
            containerElement.id = this.options.id;
        }

        document.body.appendChild(containerElement);

        return containerElement;
    }

    protected parseKeys(layoutOrPath: Array<Array<string | string[]>> | string | undefined): Array<VirtualKeyboardKey[]>
    {
        if (!layoutOrPath)
        {
            throw new Error('Missing keys layout.');
        }

        let layout: Array<Array<string | string[]>> = [];
        if (typeof layoutOrPath === 'string')
        {
            // Layout is a string, assume it's a path to a json file.
            layout = this.downloadKeysJson(layoutOrPath);
        }
        else
        {
            layout = layoutOrPath;
        }

        const keys: Array<VirtualKeyboardKey[]> = [];
        for (const row of layout)
        {
            const keysRow: VirtualKeyboardKey[] = [];
            for (const key of row)
            {
                if (typeof key === 'string')
                {
                    keysRow.push({
                        value: key[0],
                        uppercaseValue: key.length > 1 ? key[1] : undefined
                    });
                }
                else
                {
                    keysRow.push({
                        value: key[0][0],
                        uppercaseValue: key[0].length > 1 ? key[0][1] : undefined,
                        specialCharacters: key.length > 1 ? [...key[1]] : []
                    });
                }
            }

            keys.push(keysRow);
        }

        return keys;
    }

    protected downloadKeysJson(path: string): Array<Array<string | string[]>>
    {
        // TODO: Retrieve json.
        return [];
    }
}
