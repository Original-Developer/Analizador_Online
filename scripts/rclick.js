var i = document.getElementById("menu").style;
if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
        if (
            e.target == document.getElementsByClassName("modal_window")[0] ||
            e.target == document.getElementsByClassName("modal_content")[0]
        ) return;
        var posX = e.clientX;
        var posY = e.clientY;
        menu(posX, posY);
        e.preventDefault();
    }, false);
    document.addEventListener('click', function(e) {
        i.opacity = "0";
        setTimeout(function() {
            i.visibility = "hidden";
        }, 501);
    }, false);
} else {
    document.attachEvent('oncontextmenu', function(e) {
        if (
            e.target == document.getElementsByClassName("modal_window")[0] ||
            e.target == document.getElementsByClassName("modal_content")[0]
        ) return;
        var posX = e.clientX;
        var posY = e.clientY;
        menu(posX, posY);
        e.preventDefault();
    });
    document.attachEvent('onclick', function(e) {
        i.opacity = "0";
        setTimeout(function() {
            i.visibility = "hidden";
        }, 501);
    });
}

function menu(x, y) {
    i.top = y + "px";
    i.left = x + "px";
    i.visibility = "visible";
    i.opacity = "1";
}