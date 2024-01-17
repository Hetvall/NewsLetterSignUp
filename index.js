const emailField = document.querySelector(".email-input");
const emailError = document.querySelector(".email-error");
const suscribeButton = document.querySelector(".suscribe-button");
const mainSection = document.querySelector(".container");
const confirmationSection = document.querySelector(".confirmation");
const dismissButton = document.querySelector(".dismiss-button");

function validateEmail() {
  if (
    !emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    emailError.innerHTML = "Valid email required";
    emailError.style.color = "hsl(4, 100%, 67%)";
    emailField.style.borderColor = "hsl(4, 100%, 67%)";
    emailField.style.color = "hsl(4, 100%, 67%)";
    emailField.style.backgroundColor = "hsl(4, 90%, 90%)";
    return false;
  } else {
    emailError.innerHTML = "";
    removeErrorStyles();
    return true;
  }
}

function removeErrorStyles() {
  emailField.style.backgroundColor = "";
  emailField.style.color = "";
  emailField.style.borderColor = "";
}

suscribeButton.addEventListener("click", function () {
  const isValidEmail = validateEmail();
  if (isValidEmail) {
    mainSection.classList.add("hide");
    confirmationSection.classList.remove("hide");
  }
});

dismissButton.addEventListener("click", function () {
  mainSection.classList.remove("hide");
  confirmationSection.classList.add("hide");
  emailField.value = "";
});

emailField.addEventListener("input", removeErrorStyles);
