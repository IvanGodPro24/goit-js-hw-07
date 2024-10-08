const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

function displayName(event) {
  if (nameInput.value.trim() === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = event.currentTarget.value.trim();
  }
}

nameInput.addEventListener("input", displayName);
