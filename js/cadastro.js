// BOTÃO DE RETORNO PARA LOGIN
let btnLoginPage = document.querySelector('main div button')
btnLoginPage.addEventListener('click', (e)=>{
    e.preventDefault()
    window.location.href = 'login.html'
})

// EMAIL INPUT
let emailInput = document.getElementById('email-input')
let emailHelper = document.getElementById('email-helper')

// Function Email Input
let emailValid = false

emailInput.addEventListener('change', function(e){
    let valor = e.target.value
    if (valor.includes("@") && valor.includes(".com")){
        emailInput.classList.add('correct')
        emailInput.classList.remove('error')
        emailHelper.classList.remove('visible')
        emailValid = true
    } else {
        emailInput.classList.add('error')
        emailInput.classList.remove('correct')
        emailHelper.classList.add('visible')
        emailHelper.innerText = "Email inválido, por favor digite um email válido."
        emailValid = false
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
let senhaValid = false

function funcConfirmaSenha(e){
    valor = e.target.value
    if(valor.length < 5){
        confirmaSenhaInput.classList.add('error')
        confirmaSenhaInput.classList.remove('correct')
        confirmaSenhaHelper.classList.add('visible')
        confirmaSenhaHelper.innerText = 'Senha muito curta, tente mais caracteres'
        senhaValid = false
    } else if(valor == senhaInput.value){
        confirmaSenhaInput.classList.add('correct')
        confirmaSenhaInput.classList.remove('error')
        confirmaSenhaHelper.classList.remove('visible')
        senhaValid = true
    } else {
        confirmaSenhaInput.classList.add('error')
        confirmaSenhaInput.classList.remove('correct')
        confirmaSenhaHelper.classList.add('visible')
        confirmaSenhaHelper.innerText = 'As senhas não coincidem.'
        senhaValid = false
    }
}

confirmaSenhaInput.addEventListener('focus', funcConfirmaSenha)
confirmaSenhaInput.addEventListener('blur', funcConfirmaSenha)

// NOME INPUT
let nameInput = document.getElementById('name-input')
let nameHelper = document.getElementById('name-helper')

// Function Nome Input
let nameValid = false

nameInput.addEventListener('change', (e)=>{
    let valor = e.target.value
    if(valor.length > 3){
        nameInput.classList.remove('error')
        nameInput.classList.add('correct')
        nameHelper.classList.remove('visible')
        nameValid = true
    } else {
        nameInput.classList.add('error')
        nameInput.classList.remove('correct')
        nameHelper.classList.add('visible')
        nameHelper.innerText = "Nome deve ter mais do que 3 caracteres."
        nameValid = false
    }
})

// SOBRENOME INPUT
let sobrenomeInput = document.getElementById('sobrenome-input')
let sobrenomeHelper = document.getElementById('sobrenome-helper')

// Function Sobrenome Input
let sobrenomeValid = false

sobrenomeInput.addEventListener('change', (e)=>{
    let valor = e.target.value
    if(valor.length > 4){
        sobrenomeInput.classList.remove('error')
        sobrenomeInput.classList.add('correct')
        sobrenomeHelper.classList.remove('visible')
        sobrenomeValid = true
    } else {
        sobrenomeInput.classList.add('error')
        sobrenomeInput.classList.remove('correct')
        sobrenomeHelper.classList.add('visible')
        sobrenomeHelper.innerText = "Sobrenome deve ter mais do que 4 caracteres."
        sobrenomeValid = false
    }
})

// CPF INPUT
let cpfInput = document.getElementById('cpf-input')
let cpfHelper = document.getElementById('cpf-helper')

// Function CPF Input
let cpfValid = false

cpfInput.addEventListener('change', (e)=>{
    let valor = e.target.value
    if(valor.length == 11){
        cpfInput.classList.add('correct')
        cpfInput.classList.remove('error')
        cpfHelper.classList.remove('visible')
        cpfValid = true
    } else {
        cpfInput.classList.remove('correct')
        cpfInput.classList.add('error')
        cpfHelper.classList.add('visible')
        cpfHelper.innerText = "CPF inválido, por favor preencha corretamente."
        cpfValid = false
    }
})

// ENDEREÇO INPUT
let enderecoInput = document.getElementById('endereco-input')
let enderecoHelper = document.getElementById('endereco-helper')

// Function Endereço Input
let enderecoValid = false

enderecoInput.addEventListener('change', (e)=>{
    let valor = e.target.value
    if(valor.length < 5){
        enderecoInput.classList.add('error')
        enderecoInput.classList.remove('correct')
        enderecoHelper.classList.add('visible')
        enderecoHelper.innerText = "Endereço inválido, por favor preencha corretamente."
        enderecoValid = false
    } else {
        enderecoInput.classList.add('correct')
        enderecoInput.classList.remove('error')
        enderecoHelper.classList.remove('visible')
        enderecoValid = true
    }
})

// CIDADE INPUT
let cidadeInput = document.getElementById('cidade-input')
let cidadeHelper = document.getElementById('cidade-helper')

// Function Cidade Input
let cidadeValid = false

cidadeInput.addEventListener('change', (e)=>{
    let valor = e.target.value
    if(valor.length < 5){
        cidadeInput.classList.add('error')
        cidadeInput.classList.remove('correct')
        cidadeHelper.classList.add('visible')
        cidadeHelper.innerText = "Cidade incorreta, por favor preencha corretamente."
        cidadeValid = false
    } else {
        cidadeInput.classList.add('correct')
        cidadeInput.classList.remove('error')
        cidadeHelper.classList.remove('visible')
        cidadeValid = true
    }
})

// CEP INPUT
let cepInput = document.getElementById('cep-input')
let cepHelper = document.getElementById('cep-helper')

// Function CEP Input
let cepValid = false

cepInput.addEventListener('change', (e)=>{
    let valor = e.target.value
    if(valor.length == 8){
        cepInput.classList.add('correct')
        cepInput.classList.remove('error')
        cepHelper.classList.remove('visible')
        cepValid = true
    } else if(valor.includes('-') || valor.includes('.')){
        cepInput.classList.add('error')
        cepInput.classList.remove('correct')
        cepHelper.classList.add('visible')
        cepHelper.innerText = "Por favor, insira o CEP sem traços ou pontos."
        cepValid = false
    } else {
        cepInput.classList.add('error')
        cepInput.classList.remove('correct')
        cepHelper.classList.add('visible')
        cepHelper.innerText = "CEP inválido, preencha os dados corretamente."
        cepValid = false
    }
})

// CELULAR INPUT
let celularInput = document.getElementById('celular-input')
let celularHelper = document.getElementById('celular-helper')

// Function Celular Input
let celularValid = false

celularInput.addEventListener('change', (e)=>{
    let valor = e.target.value
    if(valor.length == 14 && valor.includes('+')){
        celularInput.classList.add('correct')
        celularInput.classList.remove('error')
        celularHelper.classList.remove('visible')
        celularValid = true
    }else if(valor.includes(' ')){
        celularInput.classList.add('error')
        celularInput.classList.remove('correct')
        celularHelper.classList.add('visible')
        celularHelper.innerText = "Por favor, preencha os dados sem espaçamentos."
        celularValid = false
    } else if(!valor.includes('+')){
        celularInput.classList.add('error')
        celularInput.classList.remove('correct')
        celularHelper.classList.add('visible')
        celularHelper.innerText = "Por favor, informe seu DDI."
        celularValid = false
    } else if(valor.length == 11){
        celularInput.classList.add('error')
        celularInput.classList.remove('correct')
        celularHelper.classList.add('visible')
        celularHelper.innerText = "Por favor, informe seu DDD, sem parenteses."
        celularValid = false
    } else {
        celularInput.classList.add('error')
        celularInput.classList.remove('correct')
        celularHelper.classList.add('visible')
        celularHelper.innerText = "Dados incorretos, por favor insira um numero válido."
        celularValid = false
    }
})

// BOTÃO SUBMIT
let submit = document.getElementById('btn-criar-conta')
submit.addEventListener('click', (e)=>{
    e.preventDefault()
    if(emailValid == true && senhaValid === true && nameValid == true  
        && sobrenomeValid == true && cpfValid == true 
        && enderecoValid == true && cidadeValid == true 
        && cepValid == true && celularValid == true)
    {
        alert("Seus dados foram cadastrados com sucesso!!")
        window.location.href = 'login.html'
    } else {
        alert("Não foi possível concluir o cadastro 😰 verifique seus dados e tente novamente.")
    }
})