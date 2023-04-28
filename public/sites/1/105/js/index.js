"use strict";

window.addEventListener('load', function() {

//------------------------------------------------------------------------------------
//						CONTACT FORM VALIDATION'S SETTINGS
//------------------------------------------------------------------------------------
/* $('#contact-center-form-form').validate({
    onfocusout: false,
    onkeyup: false,
    rules: {
		EMAIL: "required",
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


// let form = document.getElementsByTagName('form')[0]
// let button = document.getElementsByTagName('button')[0]

// form.addEventListener('submit', function (e) {
//     e.preventDefault()

//     let googleSheetsURL = `https://docs.google.com/spreadsheets/d/${window.atob(form.querySelector('input[data-csrf][name=INTERFACE]').getAttribute("data-csrf"))}/`;

//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             const response = JSON.parse(this.responseText)
//             console.log(response)
//             setTimeout(() => {
//             }, 200)
//         }
//     };

//     let data = new FormData(form)
//     data.append('INTERFACE', googleSheetsURL)

//     console.log(this.getResponseHeader("Last-Modified"));

//     /*     data.append('cbr', form.getAttribute('cbr'))
//         data.append('tbs', form.getAttribute('tbs')) //
//      */    /* 
//    document
//      .getElementById("csrf_field")
//      .querySelector("input").value;
//       */
//     xhttp.open("POST", "https://larabuilde3.takiddine.art/interface", true);
//     xhttp.send(data);

// })


/* ==== */
const forms = document.querySelectorAll("form");
forms.forEach((form, i) => {
    /* 
      IF WE HAVE A GOOGLE SHEETS FIELD ON PAGE
    */
    if (form.querySelector(".form-group.interface-field-group input[data-csrf][name=INTERFACE]")) {
        console.log("HE HAS GOOGLE SHEETS INPUT")

        let googleSheetsURL = `https://docs.google.com/spreadsheets/d/${window.atob(form.querySelector('input[data-csrf][name=INTERFACE]').getAttribute("data-csrf"))}/`;

        // GET SUBMIT BUTTON
        let send = form.querySelector("button[type=submit]");
        // ONSUBMIT FORM EVENT
        send.addEventListener("submit", (e) => {
            // PREVENT FROM SUBMIT
            e.preventDefault()

            // GET FORM DATA
            let data = new FormData(form);
            data.append('INTERFACE', googleSheetsURL)

            // INIT FETCH POST
            fetch("https://larabuilde3.takiddine.art/interface", {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: "follow", // manual, *follow, error
                referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data), // body data type must match "Content-Type" header

            }).then(response => {
                if (response.status !== 200) {
                    throw new Error("bad Response");
                }
                return response.text();
            }).then(response => {
                const res = JSON.parse(this.responseText)
                console.log(res)

            }).catch(e => {
                console.error(err)
            })

            // SENDING SUCCESS ...
            send.innerHTML = 'Success ...';
        })
    }
    /* 
      IF WE DON'T HAVE A GOOGLE SHEETS FIELD ON THE  PAGE
    */
    else {
        console.log("NO GOOGLE SHEETS INPUT FOUND")
        // OTHER CODE REQUEST NEDDED
    }

})
    /* ==== */
});
