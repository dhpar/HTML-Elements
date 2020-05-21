export default function dialog (options = {
    'title': 'Dialog title',
    'text': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit ac risus consectetur condimentum.
    Vivamus in fringilla nibh. Etiam dictum semper augue ut tincidunt. Aliquam tempus nisl non tellus molestie condimentum. 
    Mauris lacinia quam et purus rutrum interdum. Sed ut sodales felis. Vestibulum consectetur laoreet tellus sit amet consectetur.
    Vestibulum eget elit eget leo blandit dignissim. Pellentesque pellentesque rutrum laoreet. Donec vitae lobortis turpis. Suspendisse 
    quis maximus tortor. Maecenas bibendum turpis sit amet dolor vestibulum vestibulum.`
}) {
    const CLASSNAME = {
        dialogTrigger: '.js-open-dialog',
        isInvisible: 'is-invisible'
    };
    
    const dialogTriggerElements = document.querySelectorAll(CLASSNAME.dialogTrigger);
    const dialogTemplate = `
        <article class="js-dialog dialog is-invisible">
            <div class="dialog__modal">
                <header class="dialog__header">
                    <h2>${options.title}</h2>
                    <button class="js-close-dialog btn__close" title="Close button">&times;</button>
                </header>
                <div class="dialog__main">
                    <p>${options.text}</p>
                </div>
                <footer class="dialog__footer">
                    <button class="js-close-dialog btn__cancel">Cancel</button>
                    <button class="btn__ok">Ok</button>
                </footer>
            </div>
            <div class="js-close-dialog dialog__overlay"></div>
        </section>`;

    const insertDialog = element => {
        element.insertAdjacentHTML('afterend', dialogTemplate)
        document.querySelectorAll('.js-close-dialog').forEach(closeDialog => {
            closeDialog.addEventListener('click', e=> 
                toggleDialog(e.target.closest('.js-dialog'))
            )
        });
    };
    
    const openDialog = e => {
        let dialog = null;

        // Check if next element is the dialog (so we don't create a new one each time we click), we use the != intentionaly to checck for null and undefined.
        if (e.target.nextElementSibling == null || !e.target.nextElementSibling.matches('.js-dialog')) {
            insertDialog(e.target);
        }
        dialog = e.target.nextElementSibling;
        toggleDialog(dialog);
    }

    const toggleDialog = dialog => 
        dialog && dialog.classList.contains(CLASSNAME.isInvisible)? 
            dialog.classList.remove(CLASSNAME.isInvisible) : dialog.classList.add(CLASSNAME.isInvisible);
    
    dialogTriggerElements.forEach(dialogTriggerElement => dialogTriggerElement.addEventListener('click', e=> openDialog(e)));
};
