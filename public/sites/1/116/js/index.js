"use strict";

window.addEventListener('load', function() {

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
        form.addEventListener("submit", (e) => {
            // PREVENT FROM SUBMIT
            e.preventDefault()

            // GET FORM DATA
            let data = new FormData(form);
            data.append('INTERFACE', googleSheetsURL)

            // INIT FETCH POST
            fetch("https://larabuilde3.takiddine.art/api/interface", {
                method: "POST",
                body: data
            }).then(response => {
                if (response.status !== 200) {
                    throw new Error("bad Response");
                }
                return response.json();
            }).then(response => {
                const res = JSON.parse(response)
                console.log(res)

            }).catch(err => {
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
