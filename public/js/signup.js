const fullName = document.querySelector('.full-name');
const emailAddress = document.querySelector('.email-address');
const passwordSignUp = document.querySelector('.password-signup');
const confirmPasswordSignUp = document.querySelector('.confirmPassword');
const buttonSignUp = document.querySelector('.button-signup');

buttonSignUp.addEventListener('click', function () {
    let fullNameRegExp = new RegExp(/^([\w]{3,})+\s+([\w\s]{3,})+$/i);
    if (fullName.value.match(fullNameRegExp)) {
        alert('true');
        return true;
    } else {
        alert('false');
        return false;
    }
});

buttonSignUp.addEventListener('click', function () {
    let emailAddressRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (emailAddress.value.match(emailAddressRegExp)) {
        return true;
    } else {
        return false;
    }
});

// buttonSignUp.addEventListener('click', function () {
//     let passwordSignUpRegExp = new RegExp(/^[A-Za-z]\w{7,14}$/);
//     let confirmPasswordRegExp = new RegExp(/^[A-Za-z]\w{7,14}$/);
//     if (passwordSignUp.value.match(passwordSignUpRegExp)) {
//         return true;
//     } else if (confirmPasswordSignUp.value.match(confirmPasswordRegExp)) {
//         return true;
//     } else if (passwordSignUp.value == '') {
//         alert('Please enter Password!');
//     } else if (confirmPasswordSignUp.value == '') {
//         alert('Please enter Password!');
//     } else if (passwordSignUp != confirmPasswordSignUp) {
//         alert('\nPassword did not match: Please try again...');
//         return false;
//     } else {
//         alert('Password Match: Welcome!');
//         return true;
//     }
// });

function checkPassword () {
    let password1 = passwordSignUp.value;
    let password2 = confirmPasswordSignUp.value;

    if (password1 == '') {
        alert('Please enter Password')
    } else if (password2 == '') {
        alert('Please enter Password')
    } else if (password1 != password2) {
        alert('\nPassword did not match: Please try again...')
        return false;
    } else {
        alert('Password Match: Welcome!')
        return true;
    }
}

buttonSignUp.addEventListener('click', checkPassword);
