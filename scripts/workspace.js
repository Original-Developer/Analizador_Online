function createWorkSpace (info) {
    addMenuScript();
    document.body.style.backgroundColor = "rgb(90, 90, 90)";
    let workspace = document.createElement("div");
        workspace.id = "workspace";
    document.body.appendChild(workspace);
    // let ws = document.getElementById("workspace");
    // var typewriter = new Typewriter(ws, {
    //     loop: false
    // });
    // typewriter.typeString(info.oracion).start();
}
function createMenu () {
    let menu = document.createElement("div");
        menu.id = "menu";
        menu.innerHTML = '\
            <a href="#"> \
                <i class="fa fa-plus-circle"></i> Añadir grupo sintáctico \
            </a> \
            <a href="#"> \
                <i class="fa fa-minus-circle"></i> Eliminar grupo sintáctico \
            </a> \
            <hr /> \
            <a href="#"> \
                <i class="fa fa-rotate-left"></i> Deshacer acción <span>Ctrl + Z</span> \
            </a> \
            <a href="#"> \
                <i class="fa fa-rotate-right"></i> Rehacer acción <span>Ctrl + Y</span> \
            </a> \
            <hr /> \
            <a href="#"> \
                <i class="fa fa-scissors"></i> Cortar <span>Ctrl + X</span> \
            </a> \
            <a href="#"> \
                <i class="fa fa-files-o"></i> Copiar <span>Ctrl + C</span> \
            </a> \
            <a href="#"> \
                <i class="fa fa-clipboard"></i> Pegar <span>Ctrl + V</span> \
            </a> \
            <hr /> \
            <a href="#"> \
                <i class="fa fa-floppy-o"></i> Guardar análisis \
            </a> \
            <a href="#"> \
                <i class="fa fa-floppy-o"></i> Guardar análisis como... \
            </a> \
            <hr /> \
            <a href="#"> \
                <i class="fa fa-adjust"></i> Cambiar tema del analizador \
            </a> \
            <hr /> \
            <a href="#"> \
                <i class="fa fa-info-circle"></i> Acerca del Analizador \
            </a> \
        ';
    document.body.appendChild(menu);
}
function addMenuScript () {
    createMenu();
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src  = "./scripts/rclick.js";
    document.body.appendChild(script);
}