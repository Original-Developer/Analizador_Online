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
function createSentenceItems (str) {
    let tempSplit = str.split(" "),
        tempArr = new Array(),
        i = 0;
    for (const item of tempSplit) {
        let tempSpan = document.createElement("span");
            tempSpan.innerText = item;
            tempSpan.classList = "sentence_item";
            tempSpan.id = `sentence_item-${i}`;
            tempSpan.setAttribute("onclick", "addToGroup(this)");
            i++;
        tempArr.push(tempSpan);
    }
    return tempArr;
}
function addScript (scriptName) {
    let script = document.createElement('script');
    script.type = "text/javascript";
    script.src  = `./scripts/${scriptName}.js`;
    document.body.appendChild(script);
}
function addToGroup (item) {
    if (item.classList.contains("selected_item")) {
        item.classList.remove("selected_item");
    } else {
        item.classList.add("selected_item");
    }
    updateSelectedItems();
}
function updateSelectedItems () {
    let tempAllItems = document.getElementsByClassName("selected_item");
    for (const item of tempAllItems) {
        if (item == tempAllItems[0] && tempAllItems[1]) {
            item.style.borderTopLeftRadius = "4px";
            item.style.borderBottomLeftRadius = "4px";
        } else if (tempAllItems.length == 1) {
            item.style.borderRadius = "4px";
        } else if (item == tempAllItems[tempAllItems.length - 1]) {
            item.style.borderTopRightRadius = "4px";
            item.style.borderBottomRightRadius = "4px";
        } 
    }
}
function resetSentenceItems () {
    let allItems = document.getElementsByClassName("sentence_item");
    for (const item of allItems) item.classList.filter(temp => temp !== "selected_item");
}
function createWorkSpace (info) {
    addScript('rclick');
    createMenu();
    document.body.style.backgroundColor = "rgb(90, 90, 90)";
    let workspace = document.createElement("div");
        workspace.id = "workspace";
    document.body.appendChild(workspace);
    let tempSpans = createSentenceItems(info.oracion);
    workspace = document.getElementById("workspace");
    let container = document.createElement("div");
        container.id = "sentence_container";
    workspace.appendChild(container);
    container = document.getElementById("sentence_container");
    let sentence = document.createElement("div"),
        groups = document.createElement("div");
        sentence.id = "sentence";
        groups.id = "groups";
    container.appendChild(sentence);
    container.appendChild(groups);
    sentence = document.getElementById("sentence");
    for (const word of tempSpans) sentence.appendChild(word);
    addScript('groups');
}
