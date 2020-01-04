import Content from "./Content.js"

export default class TextBox extends Content {

    constructor () {
        super(new fabric.Textbox('TextBox', {
            left: 20,
            top: 50,
            fill: '#880E4F',
            strokeWidth: 2,
            stroke: "#D81B60",
        }));
    }

}