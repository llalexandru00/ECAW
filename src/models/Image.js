import Content from "./Content.js"

export default class Image extends Content {

    constructor (source) {
        super(undefined);
    }

    load(source, callback) {
        let img = this;
        fabric.Image.fromURL(source, function(obj) {
            obj.scale(0.2);
            obj.top = 100;
            obj.left = 200;
            img.setObj(obj);
            callback(img);
        });
    }

}