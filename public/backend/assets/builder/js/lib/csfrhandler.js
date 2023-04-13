 
const forms = document.querySelectorAll("form");
forms.forEach((form, i) => {
    
  if (form.querySelector(".form-group.interface-field-group input[data-csrf]")) {
    console.log("HE HAS GOOGLE SHEETS INPUT")
  } else {
    console.log("NO GOOGLE SHEETS INPUT FOUND new new")
  }
})




