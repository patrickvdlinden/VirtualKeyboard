import { VirtualKeyboardKeys } from './components/virtual-keyboard-keys';
import { VirtualKeyboardComponent } from './components/virtual-keyboard-component';
import { VirtualKeyboardControlKeys } from './components/virtual-keyboard-control-keys';
import { VirtualKeyboardCloseButton } from './components/virtual-keyboard-close-button';

export interface VirtualKeyboardOptions
{
    // Specifies the key layout to render on the VirtualKeyboard.
    // Default: US International layout (QWERTY).
    //
    // Array usage: [ ['q', 'w', ['e', 'ëéè'], ... '[{', ']}'], ['a', 's', 'd', 'f', ...] ...]
    // The first character represents the lowercase (default) for the key. If a second character is given (within the same string), it us then used for the uppercase key.
    // If only one character is given, the character will be automatically transformed to its uppercase variant.
    // If yet another array is given (i.e. ['e', 'ëéè']), the second argument is then used for special characters when long pressing the key.
    //
    // When a string is given, it is assumed to be a path to a file (i.e. 'keyboard.json').
    // When a language is specified to the options, this language value will be added to the path (i.e. 'keyboard.en.json' or 'keyboard.english.json').
    layout?: Array<Array<string | Array<string>>> | string;

    // Specifies the allowed elements VirtualKeyboard can be bound to.
    // Default: ['input', 'textarea'].
    allowedElements?: Array<string>;

    // Specifies if special characters are allowed. If false, special characters will not be shown after a long press.
    // Default: true.
    allowSpecialCharacters?: boolean;

    // Specifies if the backspace key should be enabled.
    // Default: true.
    backspaceEnabled?: boolean;

    // Specifies the custom icon for the backspace key.
    // Default is a bundled <svg>.
    backspaceIcon?: string;

    // Specifies the custom label for the backspace key.
    // Default: ''.
    backspaceLabel?: string;

    // Specifies if the caps key should be enabled.
    // Default: true.
    capsEnabled?: boolean;

    // Specifies a custom icon path for the caps key.
    // Default is a bundled <svg>.
    capsIcon?: string;

    // Specifies a custom label for the caps key.
    // Default: ''.
    capsLabel?: string;

    // Specifies how the caps key should behave.
    // Default: 'both'.
    //
    // Available values:
    // - once: When caps is activated, it will reset to lowercase after every key press.
    // - lock: When caps is activated, it is locked to uppercase until the caps key is pressed again.
    // - both: The caps key defaults to 'once'. Double press locks it. This is usually how mobile keyboards work.
    capsMode?: 'once' | 'lock' | 'both';

    // Specifies if caps should be activated when opening VirtualKeyboard.
    // Default: 'enabled'.
    //
    // Available values:
    // - once: Caps will be activated once VirtualKeyboard opens. Resets to lowercase after a key is pressed.
    // - lock: Caps will be activated when VirtualKeyboard opens and stays locked to uppercase until the caps key is pressed.
    // - off: Caps will not be activated when VirtualKeyboard opens.
    capsStartMode?: 'once' | 'lock' | 'off';

    // The CSS class name for the container element.
    // Default: 'virtual-keyboard'.
    cssClassName?: string;

    // Specifies the 'dblclick' event threshold in ms. This is the max time between 2 consecutive clicks before the 'dblclick' event is fired.
    // Default: 350.
    dblclickThreshold?: number;

    // Specifies which components should always be added to the VirtualKeyboard.
    // Default: () => [new VirtualKeyboardKeys(), new VirtualKeyboardControlKeys(), new VirtualKeyboardCloseButton()].
    components?: () => VirtualKeyboardComponent[];

    // HTML id for the VirtualKeyboard container element.
    // Default: undefined.
    id?: string;

    // Default: 'en'.
    language?: string;

    // Specifies the 'longpress' event threshold in ms. This is the time required to click and hold before the 'longpress' event is fired.
    // Default: 250.
    longPressThreshold?: number;

    // Specifies if the VirtualKeyboard should be opened whenever the target element(s) are focused.
    // Default: true.
    openKeyboardOnFocus?: boolean;

    // TODO: Name and description.
    // Default: 50.
    pressAndHoldThreshold?: number;

    // Specifies if the space bar key is enabled.
    // Default: true.
    spaceBarEnabled?: boolean;

    // Specifies a custom icon path for the space bar key.
    // Default: ''.
    spaceBarIcon?: string;

    // Specifies the label to be shown on the space bar. Default: ' '.
    spaceBarLabel?: string;

    // The theme name for the VirtualKeyboard.
    // Default: 'default'.
    theme?: string;
}

export const VirtualKeyboardDefaultLayout: Array<Array<string | Array<string>>>
    = [
        ['q', 'w', ['e', 'ęēėêéèë'], 'r', 't', ['y', 'ÿĳý'], ['u', 'ūüúûù'], ['i', 'ĳìįïíîī'], ['o', 'õōœøòöóô'], 'p'],
        [['a', 'æãåāàáâä'], ['s', 'šßś'], 'd', 'f', 'g', 'h', ['j', 'ĵ'], 'k', 'l'],
        ['z', 'x', ['c', 'ç'], 'v', 'b', ['n', 'ñ'], 'm']
    ];

export const VirtualKeyboardDefaultLayoutNumeric: Array<Array<string | Array<string>>>
    = [['1!', ['2@', '²'], '3#', '4$', ['5%', '€'], '6^', '7&', '8*', '9(', '0)']].concat(VirtualKeyboardDefaultLayout);

export const VirtualKeyboardOptionsDefaults: VirtualKeyboardOptions
    = {
        layout: VirtualKeyboardDefaultLayoutNumeric,
        allowedElements: ['input', 'textarea'],
        allowSpecialCharacters: true,
        backspaceEnabled: true,
        capsEnabled: true,
        capsLabel: '',
        capsMode: 'both',
        capsStartMode: 'once',
        cssClassName: 'virtual-keyboard',
        dblclickThreshold: 350,
        components: () => [new VirtualKeyboardKeys(), new VirtualKeyboardControlKeys(), new VirtualKeyboardCloseButton()],
        language: 'en',
        longPressThreshold: 250,
        openKeyboardOnFocus: true,
        pressAndHoldThreshold: 50,
        spaceBarEnabled: true,
        spaceBarIcon: '',
        spaceBarLabel: ' ',
        theme: 'default'
    };
