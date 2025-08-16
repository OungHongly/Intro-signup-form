"use strict";

// select elements
const form = document.querySelector(".signup-form");

// Function invalid show error
const invalid = function (userInput, errorIcon, errorMessage) {
  //show error input field
  userInput.style.border = "1px solid var(--primary-red)";
  userInput.classList.add("error");

  // show error icon
  errorIcon.classList.remove("invisible");

  // show message error
  errorMessage.classList.remove("hidden");
};
// Function valid remove error
const valid = function (userInput, errorIcon, errorMessage) {
  // reset input style
  userInput.style.border = "1px solid rgba(0, 0, 0, 0.15)";
  userInput.classList.remove("error");

  errorIcon.classList.add("invisible");
  errorMessage.classList.add("hidden");
};
// Function input validation
const validateInput = function (id, message) {
  const userInput = document.getElementById(id);

  //get error message element
  const errorIcon = userInput.nextElementSibling;
  const errorMessage = userInput.nextElementSibling.nextElementSibling;

  // When input is empty
  if (userInput.value.trim() === "") {
    // Show error
    invalid(userInput, errorIcon, errorMessage);
    errorMessage.textContent = message;
    return false;
  } else {
    // Remove error
    valid(userInput, errorIcon, errorMessage);
    return true;
  }
};
//Function email validation
const validateEmail = function (id, message) {
  const userInput = document.getElementById(id);
  const errorIcon = userInput.nextElementSibling;
  const errorMessage = userInput.nextElementSibling.nextElementSibling;

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (userInput.value.trim() === "") {
    // Show error
    invalid(userInput, errorIcon, errorMessage);
    errorMessage.textContent = "Email address cannot be empty";
    return false;
  } else if (!regex.test(userInput.value.trim())) {
    // Show error
    invalid(userInput, errorIcon, errorMessage);
    errorMessage.textContent = message;
    return false;
  } else {
    // Remove error
    valid(userInput, errorIcon, errorMessage);
    return true;
  }
};
//Function password validation
const validatePassword = function (id, message) {
  const pwInput = document.getElementById(id);
  const errorIcon = pwInput.nextElementSibling;
  const errorMessage = pwInput.nextElementSibling.nextElementSibling;
  //console.log(pwInput.value.length);

  if (pwInput.value.trim() === "") {
    //show error
    invalid(pwInput, errorIcon, errorMessage);
    errorMessage.textContent = message;
    return false;
  } else if (pwInput.value.length < 8) {
    //show error
    invalid(pwInput, errorIcon, errorMessage);
    errorMessage.textContent = "Password at least 8 characters";
    return false;
  } else {
    // Remove error
    valid(pwInput, errorIcon, errorMessage);
    return true;
  }
};

// Form submit event handler
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstName = validateInput("firstName", "First Name cannot be empty");
  const lastName = validateInput("lastName", "Last Name cannot be empty");
  const email = validateEmail("email", "Looks like this is not an email");
  const password = validatePassword("password", "Password cannot be empty");

  //when all fields is valid.
  if (firstName && lastName && email && password) {
    form.submit();
  }
});
