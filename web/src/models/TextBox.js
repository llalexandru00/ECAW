import Content from "./Content.js"

export default class TextBox extends Content 
{

    constructor (metadata) 
    {
        console.log(metadata);
        super(new fabric.Textbox(metadata.text, metadata));
    }

}