import Modal from "./Modal.js"

export default class RectModal extends Modal {

    constructor (onOk)
    {
        super();
        this.onOk = onOk;
        
        if (RectModal.html == undefined)
        {
            let path = "./parts/rect_modal.html";
            super.fetchHTML(path, (html) => {
                RectModal.html = html;
                this.show();
            });
        }
        else
        {
            this.show();
        }
    }
    
    show()
    { 
        let body = document.getElementsByTagName("body")[0];
        let dismissFunction = this.dismiss;
        body.insertAdjacentHTML("beforeend", RectModal.html);

        let closeBtn = document.getElementById("closeBtn");
        closeBtn.onclick = dismissFunction;

        window.onclick = function(event) {
            let modal = document.getElementById("modal");
            if (event.target == modal)
                dismissFunction();
        }

        let form = document.getElementById("modal_form");
        let onOk = this.onOk;

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let content = e.srcElement;
            onOk({
                "width": parseInt(content.width.value),
                "height": parseInt(content.height.value),
                "fill" : content.fill.value
            });
            dismissFunction();
        });
    }

}