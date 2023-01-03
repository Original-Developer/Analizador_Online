document.addEventListener('contextmenu', e => e.preventDefault(), false);
window.addEventListener('load', function () {
    let tempElements = document.getElementsByClassName("animate-wrapper");
    var i = 0;
    for (const el of tempElements) {
        el.style.opacity = 1;
        el.style.transitionDelay = `${i + 0.2}s`;
        el.style.transform = "translate(0, -20px)";
        i += 0.2;
    }
});