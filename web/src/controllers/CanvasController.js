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

    createListenersKeyboard()
    {
        document.onkeydown = (event) => {
            var key;
            if(window.event)
            {
                key = window.event.keyCode;
            }
            else
            {
                key = event.keyCode;
            }
            
            switch(key){
                case 46:
                    this.deleteSelected();
                    break;
                case 67:
                    if(event.ctrlKey)
                    {
                        event.preventDefault();
                        this.copy();
                    }
                    break;
                case 71:
                    this.group();
                    break;    
                case 85:
                    this.ungroup();
                    break;
                case 86:
                    if(event.ctrlKey)
                    {
                        event.preventDefault();
                        this.paste();
                    }
                    break;    

                default:
                    break;
            }

        };
    }

    group()
    {
        if (!this.canvas.getActiveObject()) 
        {
            return;
        }
        if (this.canvas.getActiveObject().type !== 'activeSelection') 
        {
            return;
        }
        this.canvas.getActiveObject().toGroup();
        this.canvas.requestRenderAll();
    }

    ungroup()
    {
        if (!this.canvas.getActiveObject()) 
        {
            return;
        }

        if (this.canvas.getActiveObject().type !== 'group') {
            return;
        }

        this.canvas.getActiveObject().toActiveSelection();
        this.canvas.requestRenderAll();
    }

    copy()
    {
        var self = this;

        this.copiedObjects = new Array();
        if(this.canvas.getActiveObjects()){
            this.canvas.getActiveObjects().forEach(function(o)
            {
                var object = fabric.util.object.clone(o);
                object.id = "ghij";
                self.copiedObjects.push(object);
            });             
        }
        else if(this.canvas.getActiveObject())
        {
            var object = fabric.util.object.clone(this.canvas.getActiveObject());
            object.id = "ghij";
            this.copiedObject = object;
            this.copiedObjects = new Array();
        }
    }

    paste()
    {
        if(this.copiedObjects.length > 0)
        {
            for(var i in this.copiedObjects)
            {
                this.copiedObjects[i] = fabric.util.object.clone(this.copiedObjects[i]);
                
                this.copiedObjects[i].set("top", this.copiedObjects[i].top+100);
                this.copiedObjects[i].set("left", this.copiedObjects[i].left+100);
                
                this.canvas.add(this.copiedObjects[i]);
                this.canvas.item(this.canvas.size() - 1).hasControls = true;
            }                
        }
        else if(copiedObject)
        {
            this.copiedObject= fabric.util.object.clone(this.copiedObject);
            this.copiedObject.set("top", 150);
            this.copiedObject.set("left", 150);
            this.canvas.add(this.copiedObject);
            this.canvas.item(this.canvas.size() - 1).hasControls = true;
        }
        this.canvas.renderAll();  
    }

    deleteSelected()
    {
        let self = this;
        var selection = this.canvas.getActiveObject();
        if (selection.type === 'activeSelection') {
            selection.forEachObject(function(element) {
                self.canvas.remove(element);
            });
        }
        else{
            this.canvas.remove(selection);
        }
        this.canvas.discardActiveObject();
        this.canvas.requestRenderAll();
    }

    spawnText(metadata) 
    {
        var content = new TextBox(metadata);
        this.spawn(content);
    }

    spawnCircle(metadata)
    {
        var content = new Circle(metadata);
        this.spawn(content);
    }

    spawnRect(metadata)
    {
        var content = new Rect(metadata);
        this.spawn(content);
    }

    spawnImg(metadata)
    {
        var content = new Image(metadata);
        this.spawn(content);
    }

    spawn(content)
    {
        var obj = content.getObj();
        this.canvas.add(obj);
        this.canvas.requestRenderAll();
    }

}