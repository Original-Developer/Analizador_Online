function createWorkSpace (info) {
    addMenuScript();
}
function addMenuScript () {
    var body = document.body;
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src  = "./scripts/rclick.js";
    body.appendChild(script);
}