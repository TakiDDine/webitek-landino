"use strict";

window.addEventListener('load', function() {

/* 
    Fetch Script For Forms POST Req.
    We Have 2 Paths :
    ---1--- Has GOOGLE SHEETS FIELD: 'yes'
    ---2--- Has GOOGLE SHEETS FIELD: 'no'
*/
// Select All Forms In Page
const forms = document.querySelectorAll("form");
// Loop Into Forms Array
forms.forEach((form) => {
    // Declare The GOOGLE SHEETS Input
    let gsInput = form.querySelector(".form-group.interface-field-group input[data-csrf][name=INTERFACE]");
    // GOOGLE SHEETS ID
    let gsUrl = `${window.atob(gsInput.getAttribute("data-csrf"))}`;

    if (gsInput) {
        console.log("===HAS GOOGLE SHEETS===")

        // GET SUBMIT BUTTON
        let submit = form.querySelector("button[type=submit]");

        // ONSUBMIT FORM EVENT
        form.addEventListener("submit", (e) => {
            // PREVENT FROM SUBMIT
            e.preventDefault()

            // GET FORM DATA
            let data = new FormData(form);
            // Send Google Sheets Form
            data.append('INTERFACE', gsUrl)

            // Fetch "POST" Request
            fetch("https://larabuilde3.takiddine.art/api/interface", {
                method: "POST",
                body: data
            }).then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            }).then(response => {
                const res = JSON.parse(response)
                console.log(res)
                submit.innerHTML = 'Success Request 🍎';
            }).catch(error => {
                console.error(error)
            })
        })
    }

    else {
        console.log("===HASN'T GOOGLE SHEETS===")
        // OTHER CODE REQUEST NEDDED
    }

})

});
