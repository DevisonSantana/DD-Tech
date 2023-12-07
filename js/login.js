let emailInput = document.getElementById('email-input')
let emailHelper = document.getElementById('email-helper')

emailInput.addEventListener('change', function(e){

    let valor = e.target.value;

    if (valor.includes("@") && valor.includes(".com")){
        emailInput.classList.add('correct')
        emailInput.classList.remove('error')
        emailHelper.classList.remove('visible')
    } else {
        emailInput.classList.add('error')
        emailInput.classList.remove('correct')
        emailHelper.classList.add('visible')
        emailHelper.innerHTML = "Email inválido."
    }
})

let senhaInput = document.getElementById('senha-input')
let senhaHelper = document.getElementById('senha-helper')

function senha(e){
        let valor = e.target.value
        if (valor.length < 5){
            senhaInput.classList.add('error')
            senhaInput.classList.remove('correct')
            senhaHelper.classList.add('visible')
            senhaHelper.innerText = "Senha incorreta."
        } else {
            senhaInput.classList.add('correct')
            senhaInput.classList.remove('error')
            senhaHelper.classList.remove('visible')
        }
    }

senhaInput.addEventListener('focus', senha)

senhaInput.addEventListener('blur', senha)

let cadastro = document.querySelector('.btn-criar-conta')

cadastro.addEventListener('click', (e)=>{
    
    e.preventDefault()
    window.location.href = 'cadastro.html'

})

// TENTANDO VALIDAR OS TREM AQUI

let usuario = [
    {
        email: "devison@email.com",
        senha: "admin"
    },
    {
        email: "emerson@email.com",
        senha: "admin"
    },
    {
        email: "deividson@email.com",
        senha: "admin"
    },
    {
        email: "gabriel@email.com",
        senha: "admin"
    }
]

let submit = document.querySelector('.btn-submit')

submit.addEventListener('click', function(e){

    for (let i = 0; i < usuario.length; i++){

        let valid = false

        if (usuario[i].email == emailInput.value && usuario[i].senha == senhaInput.value){
            valid = true
            window.location.href = 'usuario.html'
            emailInput.classList.add('correct')
            emailInput.classList.remove('error')
            emailHelper.classList.remove('visible')
            senhaInput.classList.add('correct')
            senhaInput.classList.remove('error')
            senhaHelper.classList.remove('visible')
            break

        } else {
            e.preventDefault()
            valid = false
            
        }
        if(valid == false){
            emailInput.classList.add('error')
            emailInput.classList.remove('correct')
            emailHelper.classList.add('visible')
            emailHelper.innerHTML = "Email ou senha incorretos, tente novamente."
            senhaInput.classList.add('error')
            senhaInput.classList.remove('correct')

        }
    }
})