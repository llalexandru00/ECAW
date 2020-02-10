import CanvasController from "./controllers/CanvasController.js"
import ToolBarController from "./controllers/ToolBarController.js"
import CustomizeController from "./controllers/CustomizeController.js"

// window.onresize = function(){ location.reload(); }


let canvas = document.getElementById("canvas_container");
let textBtn = document.getElementById("text_btn");
let rectBtn = document.getElementById("rect_btn");
let circleBtn = document.getElementById("circle_btn");
let imgBtn = document.getElementById("img_btn");

let cc = new CanvasController(canvas);
let tbc = new ToolBarController(cc);
let cust = new CustomizeController(cc);

tbc.addTextBtn(textBtn);
tbc.addRectBtn(rectBtn);
tbc.addCircleBtn(circleBtn);
tbc.addImgBtn(imgBtn);

cc.createListenersKeyboard();

cc.spawnText({text : "test", left: 20, top: 30});
cc.spawnCircle({radius: 30, fill: '#ff5555',top: 100,  left: 100});
cc.spawnRect({left: 10, top: 10, fill: '#ffffff', width: 20, height: 20});


var clearBtn = document.getElementById("clear_btn");
clearBtn.onclick = (e) => {
    cc.canvas.clear();
}

var exportBtn = document.getElementById("export_btn");
exportBtn.onclick = (e) => {
    window.open(cc.canvas.toDataURL('png'));
}

var saveBtn = document.getElementById("save_btn");
saveBtn.onclick = (e) => { 
    var text = JSON.stringify(cc.canvas);
    var filename = "e";
    var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
    saveAs(blob, filename+".json");
}

var loadBtn = document.getElementById("load_btn");
loadBtn.onclick = (e) => { 
    let path = "./parts/load_modal.html";
    window.event.preventDefault();
        
    fetch(path)
    .then((response) => response.text())
    .then((html) => {
        let dismiss = () => {
            let modal = document.getElementById("modal");
            modal.remove();
        }

        let body = document.getElementsByTagName("body")[0];
        body.insertAdjacentHTML("beforeend", html);

        let closeBtn = document.getElementById("closeBtn");
        closeBtn.onclick = dismiss;

        window.onclick = function(event) {
            let modal = document.getElementById("modal");
            if (event.target == modal)
                dismiss();
        }

        let form = document.getElementById("modal_form");
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            var reader = new FileReader();
            reader.onload = function (event) { 
                let res = event.target.result;
                cc.canvas.loadFromJSON(res, () => {cc.canvas.renderAll();});
                dismiss();
            }

            if (e.target[0].files.length > 0)
                reader.readAsText(e.target[0].files[0]);
            else
                dismissFunction();
        });
    })
    .catch((error) => {
        console.warn(error);
    });
}