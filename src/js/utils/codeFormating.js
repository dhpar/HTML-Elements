export default function CodeFormating () {
    document.querySelectorAll('code').forEach(element => element.innerText = element.innerHTML.trim().replace(/\<br\>/g,""));
};