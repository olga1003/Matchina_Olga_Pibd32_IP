function register() {
    const form = document.forms[0];

    form.addEventListener("submit", function(event) {

        event.preventDefault();
        var data = new FormData(form);
        var str = 'Статья отправлена на обработку';
        var doRedirect = true;
        var icon = "success";

     
        if (data.get('name') == '') {
           
            str ='Заполните название статьи';
            icon = "error";
            doRedirect = false;
        } 
        else if (data.get('nameАuthor') == '') {
           
            str ='Заполните имя автора';
            icon = "error";
            doRedirect = false;
        } 
        else if (data.get('text') == '') {
           
            str ='Заполните текст статьи';
            icon = "error";
            doRedirect = false;
        }
        else if (data.get('annotation') == '') {
           
            str ='Заполните текст аннотации';
            icon = "error";
            doRedirect = false;
        }


        showMessage(icon, str);

        if (doRedirect) {
            setTimeout(function () {
                
                window.location.href = "articles.html";
            }, 1800); 
        }

    });

    function showMessage(type, text) {
        Swal.fire({
            text: text,
            icon: type,
            showConfirmButton: false
        });
    }

    form.addEventListener("formdata", event => {
        console.log(event.formData);
    });
}