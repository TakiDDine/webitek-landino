"use strict";

window.addEventListener('load', function() {

// Select Form In Page
const form = document.querySelector("form");
/* 
		Form Validation.
*/


/* 
		Fetch Script For Forms POST Req.
		We Have 2 Paths :
		---1--- Has GOOGLE SHEETS FIELD: 'yes'
		---2--- Has GOOGLE SHEETS FIELD: 'no'
*/
// Declare The GOOGLE SHEETS Input
let gsInput = form.querySelector(".form-group.interface-field-group input[data-csrf][name=interface]");
// GOOGLE SHEETS ID
if (gsInput) {
	console.log("===HAS GOOGLE SHEETS===")

	// google sheets link
	let gsUrl = `${window.atob(gsInput.getAttribute("data-csrf"))}`;

	// GET SUBMIT BUTTON
	let submit = form.querySelector("button[type=submit]");

	// ONSUBMIT FORM EVENT
	form.addEventListener("submit", (e) => {
		// PREVENT FROM SUBMIT
		e.preventDefault()

		const formValidation = () => {
			let isValid = true;

			let email = form.querySelector(".email-field-group input[type='email']")
			let textarea = form.querySelector(".textarea-group textarea")

			if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3}(\s)*)+$/g.test(email.value)) {
				let span = document.createElement("span")
				span.innerHTML = "please enter a valid email address";
				if (!form.querySelector(".email-field-group span")) {
					form.querySelector(".email-field-group").appendChild(span)
				}
				isValid = false;
			}
			if (!/^\S.*(?:\r?\n\s.*)*$/gmu.test(textarea.value)) {
				let span = document.createElement("span")
				span.innerHTML = "please describe your message in more than 50";
				if (!form.querySelector(".textarea-group span")) {
					form.querySelector(".textarea-group").appendChild(span)
				}
				isValid = false;
			}

			return isValid;
		};

		const valide = formValidation();

		if (valide) {
			// GET FORM DATA
			let data = new FormData(form);
			// Send Google Sheets Form
			data.append('INTERFACE', gsUrl)
			// Security
			data.append('cbr', form.getAttribute('cbr'))
			data.append('tbs', form.getAttribute('tbs'))

			// Fetch "POST" Request
			fetch("https://larabuilde3.takiddine.art/api/interface", {
				method: "POST",
				body: data
			}).then(response => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				return response.text();
			}).then(response => {
				const res = response;
				console.log(res)
				submit.innerHTML = 'Success Request 🍎';
			}).catch(error => {
				console.error(error)
			})

		} else {
			return false;
		}


	})
} else {
	form.addEventListener("submit", (e) => {
		// OTHER CODE REQUEST NEDDED
		console.log("===HASN'T GOOGLE SHEETS===")
	})
}
});
