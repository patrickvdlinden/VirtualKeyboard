import { VirtualKeyboard } from '../src/scripts/virtual-keyboard';

window.onload = () =>
{
    console.log('onload ts');
    VirtualKeyboard.init({
        theme: 'flat',
        capsLabel: 'CAPS',
        backspaceLabel: 'BACK'
    });

    const vk1 = new VirtualKeyboard('#test-1');
    const vk2 = new VirtualKeyboard('#test-2', { capsStartMode: 'lock' });
    const vk3 = new VirtualKeyboard('#test-3', { capsStartMode: 'off', allowedElements: ['div'] });
};
