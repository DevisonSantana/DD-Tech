// VALIDAR EMAIL
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

// VALIDAR SENHA
let senhaInput = document.getElementById('senha-input')
let senhaHelper = document.getElementById('senha-helper')

function senha(e){
        let valor = e.target.value
        if (valor.length < 5){
            senhaInput.classList.add('error')
            senhaInput.classList.remove('correct')
            senhaHelper.classList.add('visible')
            senhaHelper.innerText = "Senha deve conter mais do que 4 caracteres."

        } else {
            senhaInput.classList.add('correct')
            senhaInput.classList.remove('error')
            senhaHelper.classList.remove('visible')
            
        }
    }

senhaInput.addEventListener('focus', senha)

senhaInput.addEventListener('blur', senha)

let cadastro = document.querySelector('#btn-criar-conta')

cadastro.addEventListener('click', (e)=>{
    
    e.preventDefault()
    window.location.href = 'cadastro.html'

})

// recebe cadastros do banco
async function fetchProfileDataCadastro() {
    const url = 'https://raw.githubusercontent.com/DevisonSantana/DD-Tech/main/data/cadastro.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
(async()=>{
    let usuario = await fetchProfileDataCadastro()
    let submit = document.querySelector('#btn-submit')

    submit.addEventListener('click', function(e){
        e.preventDefault()
        for (let i = 0; i < usuario.cadastro.length; i++){
            let valid = false
            if (usuario.cadastro[i].email == emailInput.value && usuario.cadastro[i].senha == senhaInput.value){
                
                valid = true
                const secretKey = "your_secret_key";
                const header = { alg: "HS256", typ: "JWT" };
                const payload = { sub: usuario.cadastro[i].email, username: usuario.cadastro[i].nome }; //trocar o user.id 
                
                const token = KJUR.jws.JWS.sign("HS256", JSON.stringify(header), JSON.stringify(payload), secretKey);
                sessionStorage.setItem('token', token)

                emailInput.classList.add('correct')
                emailInput.classList.remove('error')
                emailHelper.classList.remove('visible')
                senhaInput.classList.add('correct')
                senhaInput.classList.remove('error')
                senhaHelper.classList.remove('visible')
                // Voltar a página com JS
                window.history.back()
                //window.history.go(-1)
                break
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
    // MOSTRANDO RECUPERAÇÃO DE SENHA
    let esqueciSenha = document.querySelector('.forgot-pwd')
    let blocoEsqueciSenha = document.getElementById('menu-esqueci-senha')
    esqueciSenha.addEventListener('click', ()=>{
        blocoEsqueciSenha.classList.toggle('not-visible')
        
    })

    // ESQUECI MINHA SENHA
    let showUsers = document.getElementsByClassName('spn-blue')
    let listaUsers = document.getElementById('lista-users')


    for(let i = 0; i < usuario.cadastro.length; i++){
        let li = document.createElement('li')
        li.innerHTML = usuario.cadastro[i].nomeSocial
        listaUsers.appendChild(li)
    }

    showUsers[1].addEventListener('click', ()=>{
        listaUsers.classList.toggle('not-visible')
        listaUsers.classList.toggle('visible')
    })


    // RECUPERAÇÃO DE SENHA
    let forgotSenhaInput = document.getElementById('forgot-pass-input')
    let forgotSenhaHelper = document.getElementById('forgot-pass-helper')
    let btnForgotPass = document.getElementById('btn-forgot-pass')

    btnForgotPass.addEventListener('click', (e)=>{
        e.preventDefault()
        for(i = 0; i < usuario.cadastro.length; i++){
            let valid = false

            if (usuario.cadastro[i].nomeSocial == forgotSenhaInput.value){
                valid = true
                forgotSenhaHelper.innerText = 
                `Email: ${usuario.cadastro[i].email}
                Senha: ${usuario.cadastro[i].senha}`
                forgotSenhaHelper.classList.add('forgot-pass-style')
                forgotSenhaHelper.classList.remove('helper-text')
                forgotSenhaHelper.classList.remove('visible')
                break
            }

            if(valid == false){
                forgotSenhaHelper.classList.add('helper-text')
                forgotSenhaHelper.classList.remove('forgot-pass-style')
                forgotSenhaHelper.classList.add('visible')
                forgotSenhaHelper.innerText = "Usuario não encontrado, tente novamente."
            }

        }
    })
})()