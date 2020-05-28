export default function dialogTemplate(options) {
    return `
    <article class="js-dialog dialog">
        <div class="dialog__modal">
            <header class="dialog__header">
                <h2>${options.title}</h2>
                <button class="js-close-dialog btn btn__close" title="Close button">&times;</button>
            </header>
            <div class="dialog__main">
                <p>${options.text}</p>
            </div>
            <footer class="dialog__footer">
                <button class="js-close-dialog btn btn__secondary">Cancel</button>
                <button class="js-submit-dialog btn btn__primary">Ok</button>
            </footer>
        </div>
        <div class="js-close-dialog dialog__overlay"></div>
    </article>`;
};
