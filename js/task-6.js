function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

const input = document.querySelector("input");

function createBoxes(amount) {
  amount = input.value;

  if (amount >= 1 && amount <= 100) {
    destroyBoxes();

    for (let i = 1; i <= amount; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.width = `${20 + i * 10}px`;
      box.style.height = `${20 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();

      boxes.append(box);
    }

    input.value = "";
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

createBtn.addEventListener("click", createBoxes);

destroyBtn.addEventListener("click", destroyBoxes);
