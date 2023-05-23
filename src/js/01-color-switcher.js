
const refs = {
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]'),
}
let timerId = null;
let disabled = false;

refs.start.addEventListener('click', onStart);
refs.stop.addEventListener('click', () => {
  clearInterval(timerId);
  disabled = false;
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

function onStart() {

if (disabled) {
  return;
}

const bcg = document.querySelector('body');
timerId = setInterval(() => {
  bcg.style.backgroundColor = getRandomHexColor();
}, 1000);
disabled = true;
};