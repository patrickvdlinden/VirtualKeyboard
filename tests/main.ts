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
    const vk2 = new VirtualKeyboard('#test-2');
    const vk3 = new VirtualKeyboard('#test-3', { allowedElements: ['div'] });

    vk1.test = 'vk1';
    vk2.test = 'vk2';
    vk3.test = 'vk3';
    console.log(vk1.test, vk2.test, vk3.test);
};
