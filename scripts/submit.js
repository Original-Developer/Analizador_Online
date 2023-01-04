let warningExists = false;
function submitForm () {
    const info = {
        nombre: document.getElementById("n_analisis").value, 
        oracion: document.getElementById("f_oracion").value, 
        terminos: document.getElementById("check").checked
    };
    info.nombre = info.nombre ? info.nombre : "Mi primer análisis online.";
    if (info.terminos) {
        if (info.oracion == "" || info.oracion == ".") {
            if (warningExists) return;
            createWarningNotification(`La oración no es una oración válida.`);
        } else {
            let temp = document.createElement("div");
                temp.id = "spinner";
            document.body.appendChild(temp);
            let intro = document.getElementById("intro"),
                load = document.getElementById("spinner");
            intro.style.animation = "fade-out 0.6s";
            load.style.animation = "rotation 1s linear infinite, fade-in 0.9s";
            window.setTimeout(function () {
                document.body.removeChild(intro);
                window.setTimeout(function () {
                    load.style.display = "block";
                    load.style.opacity = "1";
                    window.setTimeout(function () {
                        load.style.animation = "rotation 1s linear infinite, fade-out 0.9s";
                        window.setTimeout(function () {
                            load.style.display = "none";
                            load.style.opacity = "0";
                            document.body.removeChild(load);
                            window.setTimeout(() => createWorkSpace(info), 499);
                        }, 749);
                    }, 6499);
                }, 749);
            }, 599);
        }
    } else {
        if (warningExists) return;
        createWarningNotification("Los términos deben ser aceptados para usar la aplicación.");
    }
}
function createWarningNotification (text) {
    let warn_ntf = document.createElement("div");
        warn_ntf.classList = "warning-ntf";
    let close = document.createElement("span");
        close.classList = "warning-btn fa fa-times";
        close.setAttribute("onclick", "removeWarningNotification(this)")
    warn_ntf.appendChild(close);
    warn_ntf.innerHTML += text;
    document.getElementById("warns").appendChild(warn_ntf);
    warningExists = true;
}
const removeWarningNotification = (obj) => {
    obj.parentElement.style.animation = "fade-out 0.5s";
    window.setTimeout(function () {
        obj.parentElement.style.display = "none";
        warningExists = false;
        document.body.removeChild(obj.parentElement);
    }, 499);
};