function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const changeBtn = document.querySelector(".change-color");
const span = document.querySelector(".color");

function changeColor() {
  const color = getRandomHexColor();
  span.textContent = color;
  span.style.color = color;
  body.style.backgroundColor = color;
}

changeBtn.addEventListener("click", changeColor);
