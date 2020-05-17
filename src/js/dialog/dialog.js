

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
    const bodyElement = document.querySelector('body');
    const dialogElement = document.querySelector(CLASSNAME.dialogTrigger);
    const dialogTemplate = `
        <div class="js-dialog dialog is-invisible">
            <h2>${options.title}</h2>
            <p>${options.text}</p>
            <form method="dialog">
                <button class="btn">Cancel</button>
                <button class="btn">Ok</button>
            </form>
        </div>
        <div id="modalOverlay" tabindex="-1"></div>`;
    const insertDialog = () => { 
        bodyElement.insertAdjacentHTML('beforeend', dialogTemplate);
        return document.querySelector('.js-dialog');
    };
    
    
    const openDialogHandler = (event) => {
        const dialog = document.querySelector('.js-dialog') || insertDialog();
        
        dialog.classList.contains(CLASSNAME.isInvisible)?
            dialog.classList.remove(CLASSNAME.isInvisible) : dialog.classList.add(CLASSNAME.isInvisible);
    }
    
    dialogElement.addEventListener('click', event => openDialogHandler(event));
};
