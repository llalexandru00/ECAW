export default class Modal {

    constructor (){

    }

    fetchHTML (path, callback)
    {
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

    dismiss()
    {
        let modal = document.getElementById("modal");
        modal.remove();
    }

}