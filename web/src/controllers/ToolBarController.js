
import TextModal from "./modals/TextModal.js"

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

}
