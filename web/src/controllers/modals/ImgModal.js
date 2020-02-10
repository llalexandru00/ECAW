import Modal from "./Modal.js"

export default class ImgModal extends Modal {

    constructor (onOk)
    {
        super();
        this.onOk = onOk;
        
        if (ImgModal.html == undefined)
        {
            let path = "./parts/img_modal.html";
            super.fetchHTML(path, (html) => {
                ImgModal.html = html;
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
        body.insertAdjacentHTML("beforeend", ImgModal.html);

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


            var reader = new FileReader();
            reader.onload = function (event) { 
                var imgObj = new Image();
                imgObj.src = event.target.result;
                imgObj.onload = function () {
                    onOk({
                        "source": imgObj,
                    });
                    dismissFunction();
                }
            }

            if (e.target[0].files.length > 0)
                reader.readAsDataURL(e.target[0].files[0]);
            else
                dismissFunction();
        });
    }

}