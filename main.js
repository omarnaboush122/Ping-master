let form = document.forms[0];
let email = document.querySelector(".control input");
let small = document.querySelector(".control small");
form.addEventListener("submit", (e) => {
  const emailValue = email.value;
  e.preventDefault();
  if (emailValue === "") {
    addErrorTo(email, "Please Enter Your Email Address");
  } else if (!isValid(emailValue)) {
    addErrorTo(email, "Please Provide A Valid Email Address");
  } else {
    removeErrorFrom(email);
  }
});

function addErrorTo(field, message) {
  const parent = field.parentElement;
  parent.classList.add("error");
  small.innerHTML = message;
}

function removeErrorFrom(field) {
  const parent = field.parentElement;
  parent.classList.remove("error");
}

function isValid(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
