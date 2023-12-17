function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeButton = document.querySelector('.change-color');
const body = document.getElementsByTagName('body');
const span = document.querySelector('.color')

changeButton.addEventListener('click', () => {
  body[0].style.backgroundColor = getRandomHexColor();
  span.textContent = body[0].style.backgroundColor;
})


