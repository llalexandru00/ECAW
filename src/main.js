import CanvasController from "./controllers/CanvasController.js"

window.onresize = function(){ location.reload(); }

let cc = new CanvasController();

cc.spawnText();
cc.spawnCircle();
cc.spawnRect();
cc.spawnImg("https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg");