import Shape from "../models/Shape.js"

export default class Rect extends Shape {
    constructor ()
    {
        super(new fabric.Rect({
            left: 10,
            top: 10,
            fill: 'red',
            width: 20,
            height: 20
        }));
    }
}