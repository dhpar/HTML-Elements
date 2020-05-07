export default function dialog (options = {
    'isOpen': 'open',
    'title': 'Dialog title',
    'text': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit ac risus consectetur condimentum.
    Vivamus in fringilla nibh. Etiam dictum semper augue ut tincidunt. Aliquam tempus nisl non tellus molestie condimentum. 
    Mauris lacinia quam et purus rutrum interdum. Sed ut sodales felis. Vestibulum consectetur laoreet tellus sit amet consectetur.
    Vestibulum eget elit eget leo blandit dignissim. Pellentesque pellentesque rutrum laoreet. Donec vitae lobortis turpis. Suspendisse 
    quis maximus tortor. Maecenas bibendum turpis sit amet dolor vestibulum vestibulum.`
}) {
    const CLASSNAME = {
        dialog: '.js-open-dialog'
    };
    const bodyElement = document.querySelector('body');
    const dialogElement = document.querySelector(CLASSNAME.dialog);
    const dialogTemplate = `
        <dialog ${options.isOpen} class="js-dialog-element dialog">
            <h2>${options.title}</h2>
            <p>${options.text}</p>
            <form method="dialog">
                <button>Cancel</button>
                <button>Ok</button>
            </form>
        </dialog>`;
    const insertDialog = () => bodyElement.insertAdjacentHTML('beforeend', dialogTemplate);
    
    dialogElement.addEventListener('click', () => insertDialog());

};