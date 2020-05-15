export default function dialog (options = {
    'title': 'Dialog title',
    'text': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit ac risus consectetur condimentum.
    Vivamus in fringilla nibh. Etiam dictum semper augue ut tincidunt. Aliquam tempus nisl non tellus molestie condimentum. 
    Mauris lacinia quam et purus rutrum interdum. Sed ut sodales felis. Vestibulum consectetur laoreet tellus sit amet consectetur.
    Vestibulum eget elit eget leo blandit dignissim. Pellentesque pellentesque rutrum laoreet. Donec vitae lobortis turpis. Suspendisse 
    quis maximus tortor. Maecenas bibendum turpis sit amet dolor vestibulum vestibulum.`
}) {
    const CLASSNAME = {
        dialogTrigger: '.js-open-dialog'
    };
    const bodyElement = document.querySelector('body');
    const dialogElement = document.querySelector(CLASSNAME.dialogTrigger);
    const dialogTemplate = `
        <article class="js-dialog dialog">
            <div class="dialog__modal">
                <header class="dialog__header">
                    <h2>${options.title}</h2>
                    <button class="btn__close" title="Close button">&times;</button>
                </header>
                <div class="dialog__main">
                    <p>${options.text}</p>
                </div>
                <footer class="dialog__footer">
                    <button class="btn__cancel">Cancel</button>
                    <button class="btn__ok">Ok</button>
                </footer>
            </div>
            <div class="dialog__overlay"></div>
        </section>`;

    const insertDialog = () => { 
        bodyElement.insertAdjacentHTML('beforeend', dialogTemplate);
        return document.querySelector('.js-dialog');
    };
    
    
    const openDialogHandler = () => {
        const dialog = document.querySelector('.js-dialog') || insertDialog();
        
        dialog.classList.contains("is-visible")?
            dialog.classList.remove('is-visible') : dialog.classList.add('is-visible');
    }
    
    dialogElement.addEventListener('click', openDialogHandler());
};
