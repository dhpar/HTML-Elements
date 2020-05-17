export default dialogTemplate = (options) => `
    <div class="js-dialog dialog is-invisible">
        <h2>${options.title}</h2>
        <p>${options.text}</p>
        <form method="dialog">
            <button class="btn">Cancel</button>
            <button class="btn">Ok</button>
        </form>
    </div>
    <div id="modalOverlay" tabindex="-1"></div>`;