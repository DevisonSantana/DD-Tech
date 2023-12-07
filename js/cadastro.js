// BOTÃO DE RETORNO PARA LOGIN
let btnLogin = document.querySelector('main div button')
btnLogin.addEventListener('click', ()=>{
    window.location.href = 'login.html'
})

// EMAIL INPUT
let emailInput = document.getElementById('email-input')
let emailHelper = document.getElementById('email-helper')

// Function Email Input
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
        emailHelper.innerHTML = "Email inválido, por favor digite um email válido."
    }
})

// SENHA INPUT
let senhaInput = document.getElementById('senha-input')
let senhaHelper = document.getElementById('senha-helper')

// Function Senha Input
function funcSenha(e){
    let valor = e.target.value
    if(valor.length > 4){
        senhaInput.classList.add('correct')
        senhaInput.classList.remove('error')
        senhaHelper.classList.remove('visible')
    } else {
        senhaInput.classList.add('error')
        senhaInput.classList.remove('correct')
        senhaHelper.classList.add('visible')
        senhaHelper.innerText = 'Senha deve ter o minimo de 5 caracters.'
    }
}

senhaInput.addEventListener('focus', funcSenha)
senhaInput.addEventListener('blur', funcSenha)

// CONFIRMA SENHA INPUT
let confirmaSenhaInput = document.getElementById('confirma-senha-input')
let confirmaSenhaHelper = document.getElementById('confirma-senha-helper')

// Function Confirma Senha Input
function funcConfirmaSenha(e){
    valor = e.target.value
    if(valor.length < 5){
        confirmaSenhaInput.classList.add('error')
        confirmaSenhaInput.classList.remove('correct')
        confirmaSenhaHelper.classList.add('visible')
        confirmaSenhaHelper.innerText = 'Senha muito curta, tente mais caracteres'
    } else if(valor == senhaInput.value){
        confirmaSenhaInput.classList.add('correct')
        confirmaSenhaInput.classList.remove('error')
        confirmaSenhaHelper.classList.remove('visible')
    } else {
        confirmaSenhaInput.classList.add('error')
        confirmaSenhaInput.classList.remove('correct')
        confirmaSenhaHelper.classList.add('visible')
        confirmaSenhaHelper.innerText = 'As senhas não coincidem.'
    }
}

confirmaSenhaInput.addEventListener('focus', funcConfirmaSenha)
confirmaSenhaInput.addEventListener('blur', funcConfirmaSenha)

// NOME INPUT
let nameInput = document.getElementById('name-input')
let nameHelper = document.getElementById('name-helper')

// Function Nome Input
nameInput.addEventListener('change', (e)=>{
    let valor = e.target.value
    if(valor.length > 3){
        nameInput.classList.remove('error')
        nameInput.classList.add('correct')
        nameHelper.classList.remove('visible')
    } else {
        nameInput.classList.add('error')
        nameInput.classList.remove('correct')
        nameHelper.classList.add('visible')
        nameHelper.innerHTML = "Nome deve ter mais do que 3 caracteres."
    }
})

// SOBRENOME INPUT
let sobrenomeInput = document.getElementById('sobrenome-input')
let sobrenomeHelper = document.getElementById('sobrenome-helper')

// Function Sobrenome Input
sobrenomeInput.addEventListener('change', (e)=>{
    let valor = e.target.value
    if(valor.length > 4){
        sobrenomeInput.classList.remove('error')
        sobrenomeInput.classList.add('correct')
        sobrenomeHelper.classList.remove('visible')
    } else {
        sobrenomeInput.classList.add('error')
        sobrenomeInput.classList.remove('correct')
        sobrenomeHelper.classList.add('visible')
        sobrenomeHelper.innerHTML = "Sobrenome deve ter mais do que 4 caracteres."
    }
})

// CPF INPUT
let cpfInput = document.getElementById('cpf-input')
let cpfHelper = document.getElementById('cpf-helper')

// ENDEREÇO INPUT
let enderecoInput = document.getElementById('endereco-input')
let enderecoHelper = document.getElementById('endereco-helper')

// CIDADE INPUT
let cidadeInput = document.getElementById('cidade-input')
let cidadeHelper = document.getElementById('cidade-helper')
