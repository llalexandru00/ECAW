import Modal from "./Modal.js"

export default class TextModal extends Modal {

    constructor (onOk)
    {
        super();
        this.onOk = onOk;
        
        if (TextModal.html == undefined)
        {
            let path = "./parts/text_modal.html";
            super.fetchHTML(path, (html) => {
                TextModal.html = html;
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
        body.insertAdjacentHTML("beforeend", TextModal.html);

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
                "text" : content.text.value,
                "fontFamily": content.font_family.value,
                "fontSize": content.font_size.value,
                "fontStyle": content.font_style.value,
                "fill": content.fill.value,
                "underline": content.underline.checked
            });
            dismissFunction();
        });
    }

}