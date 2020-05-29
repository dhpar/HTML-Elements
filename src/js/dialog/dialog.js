export default function dialog (template) {
    const CLASSNAME = {
        dialogTrigger: '.js-open-dialog',
        isInvisible: 'is-invisible'
    };
    const dialogTriggers = document.querySelectorAll(CLASSNAME.dialogTrigger);
    const keynumber = {
        space: 32,
        enter: 13,
        esc: 27,
        tab: 9
    }

    
    const createDialog = element => {
        element.insertAdjacentHTML('afterend', template);
        
        const dialogElement = element.nextElementSibling.matches('.js-dialog') && element.nextElementSibling;
        // We create an event for each clossing action needed
        dialogElement.querySelectorAll('.js-close-dialog').forEach(closingElement => {
            closingElement.addEventListener('click', e => toggleDialog(dialogElement));
            closingElement.addEventListener('click', e => onKeyPressed(e, dialogElement))
        });
        
        dialogElement.addEventListener('keydown', e => onKeyPressed(e, dialogElement));
    };
    
    const toggleDialog = dialog => dialog.classList.toggle(CLASSNAME.isInvisible);
            
    const trapFocus = (dialogElement, event) => {
        
        const focusableElements = dialogElement.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];
        
        firstFocusable.focus();   
    }
    
    dialogTriggers.forEach(dialogTrigger => dialogTrigger.addEventListener('click', e => onClick(e)));
    dialogTriggers.forEach(dialogTrigger => dialogTrigger.addEventListener('keydown', e => onKeyPressed(e)));
    
    const onClick = e => {
        // Check if next element is the dialog (so we don't create a new one each time we click), we use the != intentionaly to checck for null and undefined.
        const dialogExists = e.target.nextElementSibling != null && e.target.nextElementSibling.matches('.js-dialog');
        
        // Create a dialog only if doesn't previously exists, otherwise toggle visibility css class
        if (!dialogExists){
            createDialog(e.target);
        } else {
            toggleDialog(e.target.nextElementSibling);
        }

        trapFocus(e.target.nextElementSibling);
    }
    
    const onKeyPressed = (e, dialogElement) => {
        // if escape pressed
        if (e.which === keynumber.esc) {
            toggleDialog(dialogElement);    
        }
        if (e.which === keynumber.tab) {
            trapFocus(dialogElement, e);
        }
        if (e.which === keynumber.space || e.which === keynumber.enter) {
            onClick(e);
        }
    }
};
        