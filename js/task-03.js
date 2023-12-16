const textInput = document.getElementById("name-input");
const output = document.getElementById("name-output");

textInput.addEventListener("input", (event) => {
    const SpaceIgnorBetweenWords = event.currentTarget.value.trim();
    if (SpaceIgnorBetweenWords === '' || !SpaceIgnorBetweenWords) {
        output.textContent = "Anonymous";
    } else output.textContent = event.currentTarget.value;
});