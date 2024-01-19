// verificar se existe e recuperar token
const VerificarToken = sessionStorage.getItem('token');

if(!VerificarToken){
 console.log('Acesso negado')
    window.location.href = 'login.html'
}   

 // Voltar a página com JS
 //window.history.back()
 //window.history.go(-1)