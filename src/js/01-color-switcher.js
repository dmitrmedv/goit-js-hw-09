const startBtnRef = document.querySelector('button[data-start]');
const stopBtnRef = document.querySelector('button[data-stop]');
const bodyRef = document.querySelector('body');

startBtnRef.addEventListener('click', changeColor);
stopBtnRef.addEventListener('click', stopChangeColor);

let idInterval = null;

function changeColor() {
  startBtnRef.disabled = true;
  idInterval = setInterval(() => {
    console.log(getRandomHexColor());
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopChangeColor() {
  startBtnRef.disabled = false;
  clearInterval(idInterval);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
