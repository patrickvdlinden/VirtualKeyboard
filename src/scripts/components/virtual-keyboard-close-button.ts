import { VirtualKeyboardComponent } from './virtual-keyboard-component';

export class VirtualKeyboardCloseButton extends VirtualKeyboardComponent
{
    protected onInit(): void
    {
        // No implementation.
    }

    protected onSetup(): HTMLElement | null | undefined
    {
        const buttonElement = document.createElement('button');
        buttonElement.type = 'button';
        buttonElement.classList.add(`${this.virtualKeyboard.cssClassName}__button`);
        buttonElement.classList.add(`${this.virtualKeyboard.cssClassName}__close`);
        buttonElement.addEventListener('click', () =>
        {
            this.virtualKeyboard.close();
        });

        return buttonElement;
    }
}
