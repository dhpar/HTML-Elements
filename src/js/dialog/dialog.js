import defaults from "./Dialog.defaults";
import template from "./Dialog.template";
import focusableString from "../utils/focussableElements";
import keynumber from "../utils/keyNumbers.js";

const dialog = () => {

    


    const CLASSNAME = {
        dialogTrigger: '.js-open-dialog',
        dialogOverlay: '.js-dialog-overlay',
        isInvisible: 'is-invisible'
    };
    let focusableElements = null;

    const allFocusableElements = element => element.querySelectorAll(focusableString);

    const dialogTriggers = document.querySelectorAll(CLASSNAME.dialogTrigger);
    
    dialogTriggers.forEach(dialogTrigger => dialogTrigger.addEventListener('click', e => onClick(e)));
    dialogTriggers.forEach(dialogTrigger => dialogTrigger.addEventListener('keydown', e => onKeyPressed(e)));
    dialogTriggers.forEach(dialogTrigger => dialogTrigger.addEventListener('close', e => onClose(e)));
    
    const open = triggerElement => {
        if (triggerElement.nextElementSibling == null || !triggerElement.nextElementSibling.matches('.js-dialog')) {
            triggerElement.insertAdjacentHTML('afterend', template(defaults));
            const dialogElement = triggerElement.nextElementSibling;
            focusableElements = allFocusableElements(dialogElement);
            focusableElements[0].focus();
            dialogElement.querySelector('.js-dialog-overlay').addEventListener('click', e => toggleDialog(dialogElement));
            dialogElement.addEventListener('keydown', e => onKeyPressed(e, dialogElement));
        } else {
            toggleDialog(triggerElement.nextElementSibling);
        }
    };
    
    const toggleDialog = dialog => {
        dialog.classList.toggle(CLASSNAME.isInvisible);
        document.body.classList.toggle('no-overflow');
    };

    const onClick = e => open(e.target);

    const onKeyPressed = e => {
        const firstFocusElement = focusableElements[0];
        const lastFocusElement = focusableElements[focusableElements.length - 1];
        switch (e.which) {
            case keynumber.esc:
                toggleDialog(e.target.closest('.js-dialog'));
                // .classList.toggle(CLASSNAME.isInvisible);
                break;
                
            case keynumber.tab:
                if(document.activeElement === lastFocusElement){
                    e.preventDefault();
                    firstFocusElement.focus();
                }
                break;
            case e.shiftKey && keynumber.tab:
                if(document.activeElement === firstFocusElement){
                    e.preventDefault();
                    lastFocusElement.focus();
                }
                break;
            case keynumber.space:
            case keynumber.enter:
                open(e);
                break;
        }
    }
    const onClose = e => {
        toggleDialog()
    }
};

export default dialog;