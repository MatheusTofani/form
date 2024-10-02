document.addEventListener('DOMContentLoaded', function () {

    const form = document.querySelector('form');
    const userInput = document.querySelector('.inputUser');
    const userPassword = document.querySelector('.inputPassword');
    const erroUser = document.getElementById('erroUser');
    const erroPassword = document.getElementById('erroPassword');



    form.addEventListener('submit', function (e) {
        e.preventDefault();
        mensagemErroUser();
        mensagemErroPassword();

        function mensagemErroUser() {
            if (userInput.value.includes(' ') || userInput.value.length > 19) {
                userInput.style.borderBottom = 'solid 1px rgb(172, 53, 53)';
                erroUser.innerText = '* Digite um usuario valido.'
            } else {
                userInput.style.borderBottom = 'solid 2px #ccc';
                erroUser.innerText = ''
            }
        }

        function mensagemErroPassword() {
            if (userPassword.value.length < 3) {
                userPassword.style.borderBottom = 'solid 1px rgb(172, 53, 53)';
                erroPassword.innerText = '* Digite uma senha maior.'
            } else {
                userPassword.style.borderBottom = 'solid 2px #ccc';
                erroPassword.innerText = ''
            }
        }
    })
})