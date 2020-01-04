function run() {
    
  window.onresize = function(){ location.reload(); }

  let canvas = new fabric.Canvas('myCanvas');

  let rect = new fabric.Rect({
    left: 10,
    top: 10,
    fill: 'red',
    width: 20,
    height: 20
  });

  window.addEventListener('resize', resizeCanvas, false);

  var element = document.getElementById("canvas_container");

  console.log(element);
  
  function resizeCanvas() {
    canvas.setHeight(element.offsetHeight);
    canvas.setWidth(element.offsetWidth);
    canvas.renderAll();
  }

  // resize on init
  resizeCanvas();

  canvas.add(rect);
}

run();