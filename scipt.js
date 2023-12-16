let email = document.getElementById('email');
let textEmail = document.getElementById('textEmail');
let form = document.querySelector('form')
let button = form.querySelector('[type="submit"]')

function validateEmail() {
    if(!email.checkValidity()) {
        textEmail.classList.add('textEmail')
        button.classList.add('margin')
        textEmail.innerHTML = "Please provide a valid email address"
    } else {
        textEmail.remove('textEmail')
        button.classList.remove('margin')
    }
}

function redefinirMsg() {
    var error = document.getElementById('textEmail');
    if(error.innerHTML == 'Please provide a valid email address') {
        error.innerHTML = '';
        button.classList.remove('margin')
    }
}