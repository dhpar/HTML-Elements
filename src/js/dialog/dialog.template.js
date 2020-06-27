export default function dialogTemplate(options) {
    return `
    <div class="js-dialog [ dialog ]">
        <article class="[ dialog__modal ]" role="dialog" aria-modal="true" aria-label="${options.title}">
            <header class="[ dialog__header ]">
                <h2>${options.title}</h2>
                <button class="js-close-dialog [ btn btn__close ]" title="Close button">&times;</button>
            </header>
            <div class="dialog__main">
                <p>${options.text}</p>
            </div>
            <footer class="dialog__footer">
                <button class="js-close-dialog [ btn btn__secondary ]">Cancel</button>
                <button class="js-submit-dialog [ btn btn__primary ]">Ok</button>
            </footer>
        </article>
        <div class="js-dialog-overlay [ dialog__overlay ]"></div>
    </div>`;
};

