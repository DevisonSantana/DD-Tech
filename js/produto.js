let produto = sessionStorage.getItem("nomeProduto")
let titulo = document.getElementById('titulo')
let preco = document.getElementById('preco')
let imgPai = document.getElementById('imgPai')
let descricaoProduto = document.querySelector('.descricao-produto p') 


// mudança de imagem ao clicar na miniatura
function addClick(){
    let imgmMini = document.querySelectorAll('.imgmMini')
    imgmMini.forEach(element => {
        element.addEventListener('click', (event)=>{
            let imgBig = document.getElementById('imgBig')
            imgBig.setAttribute('src', `${event.target.src}`)
        })
    });
    }
// favoritar

function favoritar(){
    let favoritar = document.getElementById('favoritar')
    const tokenToDecode = sessionStorage.getItem('token');
    if(tokenToDecode){
        favoritar.innerHTML = '<div id="favoritar" class="favoritado"> &#9829</div>'
    }
    else{
        ModalAdiciobadoCarrinho("Atencão", "Você precisa estar logado para favoritar", "Cadastrar", "Logar")
        MudarDisplayAtr()
        let avaliarModal = document.getElementById('avaliarModal')
        setTimeout(()=> { avaliarModal.style.transform = 'translateY(00px)'}, 10)
       
    }
}

// produto inserido dinamicamente
function produtoDinamico(produtoEspecifico){

    const produtoInfo = document.getElementById('informacoes-do-produto')
    if (produtoEspecifico.informacoes != null) {
        produtoInfo.innerHTML = '<li><h2>Informações</h2></li>'
        for (let i = 0; i < 7; i++) {
            const element = produtoEspecifico.informacoes[i];
            if (element == undefined) {
                break
            } else {
                produtoInfo.innerHTML += `<li>${element}</li>`
            }
        }    
    }

    titulo.innerText = produtoEspecifico.nome.charAt(0).toUpperCase() + produtoEspecifico.nome.slice(1)
    preco.innerHTML = `
    <em>${produtoEspecifico.preco}</em>
    <h2>${ produtoEspecifico.precoAtual}</h2>
    `

    imgPai.innerHTML = `
    <img src="${produtoEspecifico.imagem[0]}" alt="dell inspiron" id="imgBig">
    <div id="imgFilho">
    ${produtoEspecifico.imagem.map((res) => 
         `
    <img src="${res}" alt="${produtoEspecifico.nome}" class="imgmMini">
    `
        ).join("")} 
    </div>
    `
    
    descricaoProduto.innerText = produtoEspecifico.descricao
    // adicionar click para mudar imagem pai
    addClick()
}


//mudar quantidade
 let btnQuantidade = [...document.querySelectorAll('#divQuantidade > button')]
 let inputQuantidade = document.querySelector('#inputQuantidade')
 btnQuantidade.map((res)=>{
     res.addEventListener('click', () =>{
         if(res.innerText == '+'){
           inputQuantidade.value++
         }
         else if(res.innerText == '-'){
            if(inputQuantidade.value >= 2){
                inputQuantidade.value--
            }
         }

        
 })
 })


async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/DevisonSantana/DD-Tech/main/data/produtos.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}


let produtoEspec = new Produto();
(async () => {
    
    const profileData = await fetchProfileData()
    produtoEspec = profileData.produtos

    produtoEspec.map(res=>{
        if(res.nome === produto){
            produtoDinamico(res)
            produtoEspec = res
        }
    })
       
})()

// Inserir no carrinho
let item = []

let itensRecuperados = localStorage.getItem("itemCarrinho")
if (itensRecuperados) {
    item = JSON.parse(itensRecuperados);
} 


let  btncomprar = document.getElementById('btnComprar')
let btnAdicionar = document.getElementById('btnAdicionar')

btncomprar.addEventListener('click', () =>{
    AlterarCarrinho()
    window.location.href = 'carrinho.html'
})
btnAdicionar.addEventListener('click', () => {
    AlterarCarrinho()
    ModalAdiciobadoCarrinho("Obaaa!!!", `O item <strong> ${(item[Number(item.length) - 1].Nome).toUpperCase()}</strong> foi adicionado ao carrinho`, "Continuar comprando", "Ir para o Carrinho")
    MudarDisplayAtr()
    let avaliarModal = document.getElementById('avaliarModal')
    avaliarModal.style.transitionDelay = '2s'
    avaliarModal.style.transform = 'translateY(00vh)'
})

function AlterarCarrinho(){
    const novo1 = {Nome: produtoEspec.nome, QtdadeItem: inputQuantidade.value}
    item.push(novo1) 
    let jsonAux = JSON.stringify(item)
    localStorage.clear("itemCarrinho")
    localStorage.setItem("itemCarrinho", jsonAux)
    let itensRecuper = localStorage.getItem("itemCarrinho")
    let itemProntoParaUso = JSON.parse(itensRecuper)
    let carrinhoQtdade = document.getElementById('carrinhoQtdade')
    let quantidade = 0;
    if(itemProntoParaUso){ 
    item.map((res) => {
        quantidade += parseInt(res.QtdadeItem)
    })}
    carrinhoQtdade.innerText = quantidade
    carrinhoQtdade.style.display = 'block'
}
//Modal
let ModalAtribut = document.getElementById("ModalGeral");
let currentListAtribut = 1
let arrayListAtribut = [
    "none",
    "flex"
]

function MudarDisplayAtr() {
    if (currentListAtribut == arrayListAtribut.length) {
        currentListAtribut = 0
    }
    ModalAtribut.style.display = arrayListAtribut[currentListAtribut]
    currentListAtribut++
    console.log(currentListAtribut)

}
ModalAtribut.addEventListener("click", (e) => {

    if (e.target.nodeName == 'DIV' || e.target.nodeName == 'H2' || e.target.nodeName == "P" ){}
    else MudarDisplayAtr()
    

})


function ModalAdiciobadoCarrinho(titulo, mensagem, botaoConfirmar, botaoSecond) {
    if(botaoSecond == ''){
        ModalAtribut.innerHTML = `
   
   <div id="avaliarModal">
   <div class="fecharModalSup"><button>X</button></div>
   <h2>${titulo}</h2>
   <p>${mensagem}</p>
   <div class="btnModal">
   <a href="index.html"><button type="button"> ${botaoConfirmar}</button></a>
   </div>
   </div>
      `
      
    }
    else if(botaoSecond == 'Logar'){
        ModalAtribut.innerHTML = `
   
   <div id="avaliarModal">
   <div class="fecharModalSup"><button>X</button></div>
   <h2>${titulo}</h2>
   <p>${mensagem}</p>
   <div class="btnModal">
   <a href="cadastro.html"><button type="button"> ${botaoConfirmar}</button></a>
   <a href="login.html"><button type="button"> ${botaoConfirmar}</button></a>
   </div>
   </div>
      `
    }

    else{

        ModalAtribut.innerHTML = `
        
        <div id="avaliarModal">
        <div class="fecharModalSup"><button>X</button></div>
        <h2>${titulo}</h2>
        <p>${mensagem}</p>
        <div class="btnModal">
        <a href="carrinho.html"><button type="button">${botaoSecond}</button></a>
        <a href="index.html"><button type="button"> ${botaoConfirmar}</button></a>
        </div>
        </div>
        `
        
    }
   
}