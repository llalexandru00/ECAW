import Shape from "../models/Shape.js"

export default class Circle extends Shape {

    constructor ()
    {
        super(new fabric.Circle({ 
            radius: 30, 
            fill: '#f55',
            top: 100, 
            left: 100 
        }));
    }

}