
import TextModal from "./modals/TextModal.js"
import RectModal from "./modals/RectModal.js"
import CircleModal from "./modals/CircleModal.js"
import ImgModal from "./modals/ImgModal.js"


export default class ToolBarController {

    constructor(cc)
    {
        this.cc = cc;
    }

    addTextBtn(widget)
    {
        let canvasController = this.cc;

        widget.addEventListener('click', function() {
            new TextModal(function (textMeta) {
                canvasController.spawnText(textMeta);
            });
        });
    }

    addRectBtn(widget)
    {
        let canvasController = this.cc;

        widget.addEventListener('click', function() {
            new RectModal(function (rectMeta) {
                canvasController.spawnRect(rectMeta);
            });
        });
    }

    addCircleBtn(widget)
    {
        let canvasController = this.cc;

        widget.addEventListener('click', function() {
            new CircleModal(function (circleMeta) {
                canvasController.spawnCircle(circleMeta);
            });
        });
    }

    addImgBtn(widget)
    {
        let canvasController = this.cc;

        widget.addEventListener('click', function() {
            new ImgModal(function (imgMeta) {
                canvasController.spawnImg(imgMeta);
            });
        });
    }

}
