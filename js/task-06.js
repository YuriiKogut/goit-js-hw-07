function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const takeInput = document.getElementsByTagName('input');
const input = takeInput[0];
const elementId = input.setAttribute('id', 'inp');
const elementCountInput = document.getElementById('inp');

const boxesContainer = document.getElementById('boxes');

function createBoxes(amount) {
    boxesContainer.innerHTML = '';

    if (amount >= 1 && amount <= 100) {
        for (let i = 0; i < amount; i++) {
            const newElement = document.createElement('div');
            newElement.className = 'box';
            newElement.style.backgroundColor = getRandomHexColor();
            boxesContainer.appendChild(newElement);

            newElement.style.width = `${30 + i * 10}px`;
            newElement.style.height = `${30 + i * 10}px`;
        }

        elementCountInput.value = '';
    } else {
        alert('Please enter a number between 1 and 100.');
    }
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}

const btnCreate = document.querySelector('[data-create]');

btnCreate.addEventListener('click', function () {
    let inputAmount = parseInt(elementCountInput.value);
    createBoxes(inputAmount)
});

const btnDelete = document.querySelector('[data-destroy]');

btnDelete.addEventListener('click', destroyBoxes);