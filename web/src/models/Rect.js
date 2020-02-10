import Shape from "../models/Shape.js"

export default class Rect extends Shape {
    constructor (metadata)
    {
        console.log(metadata);
        super(new fabric.Rect(metadata));
    }
}