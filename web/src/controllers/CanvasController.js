import TextBox from "../models/TextBox.js"
import Circle from "../models/Circle.js"
import Rect from "../models/Rect.js"
import Image from "../models/Image.js"

export default class CanvasController {

    constructor(element)
    {
        let canvas = new fabric.Canvas('fabric_canvas');
        
        function resizeCanvas() {
          canvas.setHeight(element.offsetHeight);
          canvas.setWidth(element.offsetWidth);
          canvas.renderAll();
        }

        window.addEventListener('resize', resizeCanvas, false);

        // resize on init
        resizeCanvas();        

        this.canvas = canvas;
    }

    spawnText(metadata) 
    {
        var content = new TextBox(metadata);
        this.spawn(content);
    }

    spawnCircle()
    {
        var content = new Circle();
        this.spawn(content);
    }

    spawnRect()
    {
        var content = new Rect();
        this.spawn(content);
    }

    spawnImg(source)
    {
        var content = new Image();
        content.load(source, (img) => this.spawn(img));
    }

    spawn(content)
    {
        var obj = content.getObj();
        this.canvas.add(obj);
        this.canvas.requestRenderAll();
    }

}