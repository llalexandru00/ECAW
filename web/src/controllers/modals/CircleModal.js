import Modal from "./Modal.js"

export default class CircleModal extends Modal {

    constructor (onOk)
    {
        super();
        this.onOk = onOk;
        
        if (CircleModal.html == undefined)
        {
            let path = "./parts/circle_modal.html";
            super.fetchHTML(path, (html) => {
                CircleModal.html = html;
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
        body.insertAdjacentHTML("beforeend", CircleModal.html);

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
                "radius": parseInt(content.radius.value),
                "fill" : content.fill.value
            });
            dismissFunction();
        });
    }

}