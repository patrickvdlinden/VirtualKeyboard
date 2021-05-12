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

    // Specifies if the default VirtualKeyboard components should be added.
    // Default: true.
    addDefaultComponents?: boolean;

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
    // - once: Every key pressed after the caps key, resets the caps to lower case.
    // - lock: When caps is activated, it is locked to uppercase until the caps key is pressed again.
    // - both: The caps key defaults to 'once'. Double click/tap locks it. This is usually how mobile keyboards work.
    capsMode?: 'once' | 'lock' | 'both';

    // The CSS class name for the container element.
    // Default: 'virtual-keyboard'.
    cssClassName?: string;

    // Specifies the dblclick event threshold. This is the max time between 2 consecutive clicks before the dblclick event is invoked.
    // Default: 350.
    dblclickThreshold?: number;

    // HTML id for the VirtualKeyboard container element.
    // Default: undefined.
    id?: string;

    // Default: 'en'.
    language?: string;

    // Specifies the long-press event threshold. This is the time required to click and hold before the event is invoked.
    // Default: 350.
    longPressThreshold?: number;

    // Specifies if the VirtualKeyboard should be opened whenever the target element(s) are focused.
    // Default: true.
    openKeyboardOnFocus?: boolean;

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
        addDefaultComponents: true,
        allowedElements: ['input', 'textarea'],
        allowSpecialCharacters: true,
        backspaceEnabled: true,
        capsEnabled: true,
        capsLabel: '',
        capsMode: 'both',
        cssClassName: 'virtual-keyboard',
        dblclickThreshold: 350,
        language: 'en',
        longPressThreshold: 350,
        openKeyboardOnFocus: true,
        spaceBarEnabled: true,
        spaceBarIcon: '',
        spaceBarLabel: ' ',
        theme: 'default'
    };
