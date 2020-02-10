import Shape from "../models/Shape.js"

export default class Circle extends Shape {

    constructor (metadata)
    {
        super(new fabric.Circle(metadata));
    }

}