function createMenu () {
    let menu = document.createElement("div");
        menu.id = "menu";
        menu.innerHTML = '\
            <a onclick="createGroup()"> \
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

// MENU FUNCTIONS - START

function createGroup () {

    // let allSelectedItems = document.getElementsByClassName("selected_item"),
    //     positionsX = elementWidth = [];
    // for (const item of allSelectedItems) {
    //     positionsX.push(parseInt(item.getBoundingClientRect().x));
    //     elementWidth.push(item.getBoundingClientRect().width);
    // }
    // let target = document.getElementById("groups");
    // for (let i = 0; i < positionsX.length; i++) {
    //     let tempLineDiv = document.createElement("div");
    //         tempLineDiv.classList = "line-div";
    //     target.appendChild(tempLineDiv);
    // }
}

// MENU FUNCTIONS - END

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
    tempArr.pop();
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
        item.style.borderRadius = "9999px";
    }
    else {
        item.style.borderRadius = "0px";
        item.classList.add("selected_item");
        
    }
    updateSelectedItems();
}
function updateSelectedItems () {
    let tempAllItems = document.getElementsByClassName("selected_item");
    for (let i = 0; i < tempAllItems.length; i++) {
        if (!tempAllItems[i - 1]) tempAllItems[i].classList.add("start");
        else tempAllItems[i].classList.remove("start");
        if (!tempAllItems[i + 1]) tempAllItems[i].classList.add("end");
        else tempAllItems[i].classList.remove("end");
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
    let create = document.createElement("div");
        create.id = "createGroup";
    let container = document.createElement("div");
        container.id = "sentence_container";
    workspace.appendChild(container);
    workspace.appendChild(create);
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
