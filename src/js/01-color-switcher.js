const bodyRef = document.querySelector("body");
const startBtnRef = document.querySelector("button[data-start]");
const stopBtnRef = document.querySelector("button[data-stop]");
let timerId = null;

startBtnRef.addEventListener("click", onStartBtnRefClick);
stopBtnRef.addEventListener("click", onStopBtnRefClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStartBtnRefClick() {
  startBtnRef.disabled = true;
  timerId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopBtnRefClick() {
  clearTimeout(timerId);
  startBtnRef.disabled = false;
}
