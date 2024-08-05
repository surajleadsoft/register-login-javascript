var container = document.querySelector('#container')
var title = document.querySelector('#title')

var fnField = document.querySelector('#fullNameField')
var cpField = document.querySelector('#confirmPasswordField')

var btnLogin = document.querySelector('#btnLogin')
var btnRegister = document.querySelector('#btnRegister')

btnRegister.addEventListener('click',(e)=>{
    e.preventDefault()
    btnLogin.classList.remove('active')
    btnLogin.classList.add('btn')

    btnRegister.classList.remove('btn')
    btnRegister.classList.add('active')

    fnField.style.maxHeight='80px'
    cpField.style.maxHeight='80px'

    title.innerHTML='Register'

    title.classList.remove('info')
    void title.offsetWidth;//re-trigger the animation
    title.classList.add('info')

})

btnLogin.addEventListener('click',(e)=>{
    e.preventDefault()
    btnRegister.classList.remove('active')
    btnRegister.classList.add('btn')

    btnLogin.classList.remove('btn')
    btnLogin.classList.add('active')

    fnField.style.maxHeight='0px'
    cpField.style.maxHeight='0px'

    title.innerHTML='Login'

    title.classList.remove('info')
    void title.offsetWidth;//re-trigger the animation
    title.classList.add('info')

})