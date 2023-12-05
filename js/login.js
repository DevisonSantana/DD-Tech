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

// let btn = document.querySelectorAll('.btn-submit')


// console.log(btn)


// btn.forEach(element => {
//     element.addEventListener('mouseover', ()=>{
//         element.style.backgroundColor = "red"
//     })
// })