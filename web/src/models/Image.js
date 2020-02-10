import Content from "./Content.js"

export default class Image extends Content {

    constructor (metadata) {
        super(new fabric.Image(metadata.source, metadata));
    }

}