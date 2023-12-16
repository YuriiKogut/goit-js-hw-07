const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', handleSubmit);

const registerInfo = {
    email: '',
    password: '',
}

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    if (email === '' || password === '') {
        alert('All form fields must be filled in');
    } else {
        registerInfo.email = email;
        registerInfo.password = password;
        console.log(registerInfo);
    }
    form.reset()
}

const inputs = document.getElementsByTagName('input');

function focusPlaceEmail () {
    inputs.email.setAttribute("placeholder", "Type area")
};
function blurPlaceEmail () {
    inputs.email.removeAttribute("placeholder")
}
function focusPlacePass () {
    inputs.password.setAttribute("placeholder", "Type area")
};
function blurPlacePass () {
    inputs.password.removeAttribute("placeholder")
}

inputs.email.addEventListener('focus', focusPlaceEmail);
inputs.email.addEventListener('blur', blurPlaceEmail);

inputs.password.addEventListener('focus', focusPlacePass);
inputs.password.addEventListener('blur', blurPlacePass);

const secondLabelClass = document.getElementsByTagName('label')
secondLabelClass[1].classList.add('secondLabel')