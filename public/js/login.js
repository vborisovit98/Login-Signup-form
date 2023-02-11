const userName = document.querySelector('.username');
const password = document.querySelector('.password');
const registerButton = document.querySelector('.right-arrow');
const errMessage = document.querySelector('.error-message')

registerButton.addEventListener('click', function () {
    let userNameWords = /^[a-zA-Z\-]+$/;
    if (userName.value.match(userNameWords)) {
        return true;
    } else {
        errMessage.style.display = 'block';
        return false;
    }
});

registerButton.addEventListener('click', function () {
    let passwordWords = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if (password.value.match(passwordWords)) {
        return true;
    } else {
        errMessage.style.display = 'block';
        return false;
    }
});