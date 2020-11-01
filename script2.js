function greet() {
    let regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    let emailer = document.getElementById('email1');
    let name = document.querySelector('#yourName.form-control').value;
    if (name === '') {
        alert('Please enter your name');
    }
    if (regexEmail.test(emailer.value) === false) {
        alert('Please enter a valid email address');
    }
    if(name != '' && regexEmail.test(emailer.value) === true) {
        alert('Thank you for contacting me, ' + name + '! I will be in touch at ' + emailer.value + '!');
    }
}