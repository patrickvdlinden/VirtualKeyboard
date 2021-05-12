import { VirtualKeyboard } from '../src/scripts/virtual-keyboard';

window.onload = () =>
{
    console.log('onload ts');
    VirtualKeyboard.init({
        theme: 'flat',
        capsLabel: 'CAPS'
    });

    new VirtualKeyboard('#test-1');
    new VirtualKeyboard('#test-2');
    new VirtualKeyboard('#test-3', { allowedElements: ['div'] });
};
