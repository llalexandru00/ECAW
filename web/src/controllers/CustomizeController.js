export default class CustomizeController {

    constructor(cc)
    {
        this.canvas = cc.canvas;

        this.canvas.on({ 'selection:updated': this.update, 'selection:created': this.update, 'selection:cleared': this.clear })
    }

    update(e)
    { 
        let fetchHTML = (path, callback) =>
        {
            window.event.preventDefault();
            
            fetch(path)
            .then((response) => response.text())
            .then((html) => {
                callback(html);
            })
            .catch((error) => {
                console.warn(error);
            });
        }

        let updateText = (obj) => {
            let path = "./parts/text_cust.html";

            window.event.preventDefault();
            fetchHTML(path, (html) =>{
                let panel = document.getElementById("cust_panel");
                if (panel)
                    panel.remove();
    
                wrap.insertAdjacentHTML("beforeend", html);

                let text = document.getElementById("text");
                text.value = obj.text;
                text.onkeyup = (e) => {
                    obj.set({"text": text.value});
                    obj.canvas.renderAll();
                }

                let fontFamily = document.getElementById("font_family");
                if (obj.fontFamily)
                    fontFamily.value = obj.fontFamily;
                else
                    fontFamily.value = "Times New Roman";

                fontFamily.onchange = (e) => {
                    obj.set({"fontFamily": fontFamily.value});
                    obj.canvas.renderAll();
                }

                let fontSize = document.getElementById("font_size");
                fontSize.value = obj.fontSize;

                fontSize.onchange = (e) => {
                    obj.set({"fontSize": fontSize.value});
                    obj.canvas.renderAll();
                }

                let fontStyle = document.getElementById("font_style");
                if (obj.fontStyle)
                    fontStyle.value = obj.fontStyle.charAt(0).toUpperCase() + obj.fontStyle.slice(1);
                else
                    fontStyle.value = "Normal";

                fontStyle.onchange = (e) => {
                    obj.set({"fontStyle": fontStyle.value});
                    obj.canvas.renderAll();
                }

                let fill = document.getElementById("fill");
                if (obj.fill)
                    fill.value = obj.fill;
                else
                    fill.value = "#000000";

                fill.onchange = (e) => {
                    obj.set({"fill": fill.value});
                    obj.canvas.renderAll();
                }

                let underline = document.getElementById("underline");
                if (obj.underline)
                    underline.checked = obj.underline;
                else
                    underline.checked = false;

                underline.onchange = (e) => {
                    obj.set({"underline": underline.checked});
                    obj.canvas.renderAll();
                }
            });
        };

        let updateRect = (obj) => {
            let path = "./parts/rect_cust.html";

            window.event.preventDefault();
            fetchHTML(path, (html) =>{
                let panel = document.getElementById("cust_panel");
                if (panel)
                    panel.remove();
    
                wrap.insertAdjacentHTML("beforeend", html);

                let width = document.getElementById("width");
                width.value = obj.width;
                width.onchange = (e) => {
                    obj.set({"width": parseInt(width.value)});
                    obj.canvas.renderAll();
                }

                let height = document.getElementById("height");
                height.value = obj.height;
                height.onchange = (e) => {
                    obj.set({"height": parseInt(height.value)});
                    obj.canvas.renderAll();
                }

                let fill = document.getElementById("fill");
                if (obj.fill)
                    fill.value = obj.fill;
                else
                    fill.value = "#000000";
                console.log(fill.value);
                fill.onchange = (e) => {
                    obj.set({"fill": fill.value});
                    obj.canvas.renderAll();
                }
            });
        };

        let updateCircle = (obj) => {
            let path = "./parts/circle_cust.html";

            window.event.preventDefault();
            fetchHTML(path, (html) =>{
                let panel = document.getElementById("cust_panel");
                if (panel)
                    panel.remove();
    
                wrap.insertAdjacentHTML("beforeend", html);

                let radius = document.getElementById("radius");
                radius.value = obj.radius;
                radius.onchange = (e) => {
                    obj.set({"radius": radius.value});
                    obj.canvas.renderAll();
                }

                let fill = document.getElementById("fill");
                if (obj.fill)
                    fill.value = obj.fill;
                else
                    fill.value = "#000000";
                    
                fill.onchange = (e) => {
                    obj.set({"fill": fill.value});
                    obj.canvas.renderAll();
                }
            });
        };

        let updateImage = (obj) => {
            let path = "./parts/img_cust.html";

            window.event.preventDefault();
            fetchHTML(path, (html) =>{
                let panel = document.getElementById("cust_panel");
                if (panel)
                    panel.remove();
    
                wrap.insertAdjacentHTML("beforeend", html);

                let source = document.getElementById("source");
                source.onchange = (e) => {
                    var reader = new FileReader();
                    reader.onload = function (event) {
                        var imgObj = new Image();
                        imgObj.src = event.target.result;
                        imgObj.onload = function () {
                            obj.setElement(imgObj);
                            obj.canvas.renderAll();
                        }
                    }
                    reader.readAsDataURL(e.target.files[0]);
                }
            });
        };

        let wrap = document.getElementById("cust_wrapper");
        if (e.target.type == "textbox")
            updateText(e.target);
        if (e.target.type == "circle")
            updateCircle(e.target);
        if (e.target.type == "rect")
            updateRect(e.target);
        if (e.target.type == "image")
            updateImage(e.target);
    }

    clear(e)
    {
        let panel = document.getElementById("cust_panel");
        if (panel)
            panel.remove();
    }

}