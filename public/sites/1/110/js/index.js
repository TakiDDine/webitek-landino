"use strict";

window.addEventListener('load', function() {

//------------------------------------------------------------------------------------
//						CONTACT FORM VALIDATION'S SETTINGS
//------------------------------------------------------------------------------------
/* $('#contact-center-form-form').validate({
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
}); */

//------------------------------------------------------------------------------------
//								CONTACT FORM SCRIPT
//------------------------------------------------------------------------------------


/* let form = document.getElementsByTagName('form')[0]
let button = document.getElementsByTagName('button')[0]

form.addEventListener('submit', function (e) {
    e.preventDefault()

    let googleSheetsURL = `https://docs.google.com/spreadsheets/d/${window.atob(form.querySelector('input[data-csrf][name=INTERFACE]').getAttribute("data-csrf"))}/`;

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
    data.append('INTERFACE', googleSheetsURL)

    data.append('cbr', form.getAttribute('cbr'))
    data.append('tbs', form.getAttribute('tbs'))

    xhttp.open("POST", "https://larabuilde3.takiddine.art/api/interface", true);
    xhttp.send(data);
}) */


/* ==== */
const form = document.querySelector("form");
let submit = form.querySelector("button[type=submit]");
/* 
  IF WE HAVE A GOOGLE SHEETS FIELD ON PAGE
*/
if (form.querySelector(".form-group.interface-field-group input[data-csrf][name=INTERFACE]")) {
    console.log("HE HAS GOOGLE SHEETS INPUT")

    let googleSheetsURL = `${window.atob(form.querySelector('input[data-csrf][name=INTERFACE]').getAttribute("data-csrf"))}`;

    // ONSUBMIT FORM EVENT
    submit.addEventListener("submit", (e) => {
        // PREVENT FROM SUBMIT
        e.preventDefault();

        let data = new FormData(form);
        // data.append('INTERFACE', googleSheetsURL)

        fetch("https://larabuilde3.takiddine.art/api/interface", {
            method: "POST",
            body: data,
        }).then(response => {
            console.log(response)
        })
    })
}
/* 
  IF WE DON'T HAVE A GOOGLE SHEETS FIELD ON THE  PAGE
*/
/* else {
    console.log("NO GOOGLE SHEETS INPUT FOUND")
    // OTHER CODE REQUEST NEDDED
} */
/* ==== */
});
