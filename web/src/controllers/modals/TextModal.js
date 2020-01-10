export default class TextModal {

    constructor (onOk)
    {
        this.onOk = onOk;
        
        if (TextModal.html == undefined)
        {
            this.fetchHTML((html) => {
                TextModal.html = html;
                this.show();
            });
        }
        else
        {
            this.show();
        }
    }

    fetchHTML (callback)
    {
        let path = "./parts/text_modal.html";

        window.event.preventDefault();
        
        fetch(path)
        .then((response) => response.text())
        .then((html) => {
            callback(html);
        })
        .catch((error) => {
            console.warn(error);
        });
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
        console.log(form);
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            console.log(e);
            let content = e.srcElement;
            console.log(content.font_family.value);
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

    dismiss()
    {
        let modal = document.getElementById("modal");
        modal.remove();
    }

}