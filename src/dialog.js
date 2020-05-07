export default function dialog () {
    const CLASSNAME = {
        dialog: '.js-open-dialog'
    };
    const bodyElement = document.querySelector('body');
    const dialogElement = document.querySelector(CLASSNAME.dialog);
    const options = {
        'dialogDOM': document.querySelector(CLASSNAME.dialog),
        'isOpen': 'open',
        'title': 'Dialog title',
        'text': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit ac risus consectetur condimentum.
        Vivamus in fringilla nibh. Etiam dictum semper augue ut tincidunt. Aliquam tempus nisl non tellus molestie condimentum. 
        Mauris lacinia quam et purus rutrum interdum. Sed ut sodales felis. Vestibulum consectetur laoreet tellus sit amet consectetur.
        Vestibulum eget elit eget leo blandit dignissim. Pellentesque pellentesque rutrum laoreet. Donec vitae lobortis turpis. Suspendisse 
        quis maximus tortor. Maecenas bibendum turpis sit amet dolor vestibulum vestibulum.`
    };
    const dialogInerHTML = `
        <dialog ${options.isOpen} class="js-dialog-element dialog">
            <h2>${options.title}</h2>
            <p>${options.text}</p>
            <form method="dialog">
                <button>Cancel</button>
                <button>Ok</button>
            </form>
        </dialog>
    `;

    dialogElement.addEventListener('click', ()=> {
        bodyElement.insertAdjacentElement('beforeend', dialogInerHTML);
    });

    const dialogOnDOM = () => document.querySelector('.js-dialog-element');
    const showDialog = () => dialogOnDOM.classList.add('is-open');
};