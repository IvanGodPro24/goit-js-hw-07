const form = document.querySelector(".login-form");

function controlForm(event) {
  event.preventDefault();

  if (
    event.target.elements.email.value === "" ||
    event.target.elements.password.value === ""
  ) {
    alert("All form fields must be filled in");
  } else {
    const infoObject = {
      email: event.target.elements.email.value.trim(),
      password: event.target.elements.password.value.trim(),
    };

    console.log(infoObject);

    form.reset();
  }
}

form.addEventListener("submit", controlForm);
