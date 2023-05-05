"use strict";

window.addEventListener('load', function() {

//------------------------------------------------------------------------------------
//						CONTACT FORM VALIDATION'S SETTINGS
//------------------------------------------------------------------------------------

/* let form = document.getElementsByTagName('form')[0]
let button = document.getElementsByTagName('button')[0]

form.addEventListener('submit', function (e) {
    e.preventDefault()

    let googleSheetsURL = `https://docs.google.com/spreadsheets/d/${window.atob(form.querySelector('input[data-csrf][name=INTERFACE]').getAttribute("data-csrf"))}/`;

    let data = new FormData(form)
    data.append('INTERFACE', googleSheetsURL)
    data.append('cbr', form.getAttribute('cbr'))
    data.append('tbs', form.getAttribute('tbs'))

    fetch("https://larabuilde3.takiddine.art/api/interface", {
        method: 'POST',
        body: data
    }).then(response => {
        if (response.ok) {
            return response.json()
        }
        throw new Error('Network response was not ok.')
    }).then(data => {
        console.log(data)
        setTimeout(() => {
            // do something after 200ms
        }, 200)
    }).catch(error => {
        console.error('There was a problem with the fetch operation:', error)
    })
}) */

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
            fetch("https://larabuilde3.takiddine.art/api/interface", {
                method: "POST",
                body: data
            }).then(response => {
                console.log("response.ok", response.ok);
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.')
            }).then(data => {
                console.log(data)
            }).catch(error => {
                console.error('There was a problem with the fetch operation:', error)
            })
        })
    }
    /* 
      IF WE DON'T HAVE A GOOGLE SHEETS FIELD ON THE  PAGE
    */
})
    /* ==== */
});
