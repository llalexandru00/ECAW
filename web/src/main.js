import CanvasController from "./controllers/CanvasController.js"
import ToolBarController from "./controllers/ToolBarController.js"

// window.onresize = function(){ location.reload(); }


var canvas = document.getElementById("canvas_container");
var textBtn = document.getElementById("text_btn");

let cc = new CanvasController(canvas);
let tbc = new ToolBarController(cc);
tbc.addTextBtn(textBtn);

cc.spawnText({text : "test", left: 20, top: 30});
cc.spawnCircle();
cc.spawnRect();
cc.spawnImg("https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg");