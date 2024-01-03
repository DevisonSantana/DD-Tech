// mudar a secçao ao clicar no menu lateral

var menuLateral = [...document.getElementsByClassName("menuLateral")]

var section = [...document.getElementsByTagName("section")]

var indiceMenu;

let btnCart = document.querySelector('.btnCart')


//mostrar dados do cartao
btnCart.addEventListener('click', ()=>{
    let btndados = document.querySelector('.cartoesCadastrados .divColum')
    console.log(btndados)

    btndados.style.display = 'flex'
    btnCart.style.display = 'none'
})


//funcao para ocultar todos os sections

menuLateral.map((element) => {
    element.addEventListener("click", (event) => {
        indiceMenu = event.target.value
        ocultarSection()
        ativarDisplay(indiceMenu)
        

    })
})

function ocultarSection() {
    section.forEach(element => {
        
        let apaImg = document.getElementById('imgRigth');

        element.style.display = 'none'

        apaImg.style.display = 'flex'

    });
}

function ativarDisplay(indice) {
    section[indice].style.display = 'flex'
}



//Modal
const listAtributs = document.getElementById("atributs");
var buttonProducts = [...document.getElementsByClassName("button")]

var currentListAtributs = 1
var arrayListAtributs = [
    "none",
    "flex"
]
buttonProducts.map((e) => {
    e.addEventListener("click", (evt) => {
        var numAtribut = evt.target.value
        console.log(numAtribut)
        passarAtributs(numAtribut)
        MudarDisplayAtributs()
    })
});

function MudarDisplayAtributs() {
    if (currentListAtributs == arrayListAtributs.length) {
        currentListAtributs = 0
    }
    listAtributs.style.display = arrayListAtributs[currentListAtributs]
    currentListAtributs++

}

listAtributs.addEventListener("click", (e) => {

    if (e.target.nodeName == 'DIV' || e.target.nodeName == 'H2' || e.target.nodeName == "TEXTAREA" || e.target.nodeName == "IMG" || e.target.nodeName == "BUTTON"){}
    else MudarDisplayAtributs()
    

})

function passarAtributs(numAtributo) {
    if(numAtributo == 0) var atributos = avaliar();
    else if(numAtributo == 1) var atributos = acompanhar()
    else if(numAtributo == 2) var atributos = trocaDevolucao()
    listAtributs.innerHTML = atributos
    
}

function avaliar() {
    const div = `
   <section id="listAtributs" class="atributos" >
   <div id="avaliarModal">
   <h2>Avaliar</h2>
   <textarea name="comenarioAdd" id="comenarioAdd" cols="70" rows="4" placeholder="Comentário"></textarea>
   <div>
   <img class="estrelasAvaliacao" src="img/estrelaVazia.png" alt="">
   <img class="estrelasAvaliacao" src="img/estrelaVazia.png" alt="">
   <img class="estrelasAvaliacao" src="img/estrelaVazia.png" alt="">
   <img class="estrelasAvaliacao" src="img/estrelaVazia.png" alt="">
   <img class="estrelasAvaliacao" src="img/estrelaVazia.png" alt="">
   </div>
   <button type="button">Enviar</button>
   </div>
    </section>  `

    return div
}

function acompanhar() {
    const div = `
   <section id="listAtributs" class="atributos" >
   <div id="avaliarModal">
   <h2>Acompanhar</h2>
   <textarea name="comenarioAdd" id="comenarioAdd" cols="70" rows="4" placeholder="Comentário"></textarea>
   <div>
   <img class="estrelasAvaliacao" src="img/estrelaVazia.png" alt="">
   <img class="estrelasAvaliacao" src="img/estrelaVazia.png" alt="">
   <img class="estrelasAvaliacao" src="img/estrelaVazia.png" alt="">
   <img class="estrelasAvaliacao" src="img/estrelaVazia.png" alt="">
   <img class="estrelasAvaliacao" src="img/estrelaVazia.png" alt="">
   </div>
   <button type="button">Enviar</button>
   </div>
    </section>  `

    return div
}
function trocaDevolucao() {
    const div = `
   <section id="listAtributs" class="atributos" >
   <div id="avaliarModal">
   <h2>Troca ou Devolução</h2>
   <textarea name="comenarioAdd" id="comenarioAdd" cols="70" rows="4" placeholder="Comentário"></textarea>
   <div>
   <img class="estrelasAvaliacao" src="img/estrelaVazia.png" alt="">
   <img class="estrelasAvaliacao" src="img/estrelaVazia.png" alt="">
   <img class="estrelasAvaliacao" src="img/estrelaVazia.png" alt="">
   <img class="estrelasAvaliacao" src="img/estrelaVazia.png" alt="">
   <img class="estrelasAvaliacao" src="img/estrelaVazia.png" alt="">
   </div>
   <button type="button">Enviar</button>
   </div>
    </section>  `

    return div
}

// recebe os dados do usuario que vem do banco de dados e inseri na pagina
let vendas = [];

let nomeUser = document.getElementById('nomeUser')
let cardProdutos = document.getElementById('cardProdutos')

function carregarUsuario(usuario, produtoRecuperado){
    nomeUser.innerText = usuario.nomeSocial
    for(let i= 0; i< produtoRecuperado.length; i++){
        cardProdutos.innerHTML += `
        <table class="ultimosPedidos">
        <tr>
            <td class="descricaoPedidos">
            ${produtoRecuperado[i].nome}
            </td>
            <td>
            <img src="${produtoRecuperado[i].imagem[1]}" alt="${produtoRecuperado[i].nome}">
            </td>
            <td class="descricaoPedidos">
            ${vendas[i].data}
            </td>
            <td class="precoAtual">${parseFloat(vendas[i].precoVenda).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </td>
            <td class="botoes">
            <button type="button" class="button" name="0" value="0">Avaliar</button>
            <button type="button" class="button" name="0" value="1">Acompanhar</button>
            <button type="button" class="button" name="0" value="2">Troca ou devolução</button>
            </td>
        </tr>
        </table>
    `      
}
}
// recebe cadastros do banco
async function fetchProfileDataCadastro() {
    const url = 'https://raw.githubusercontent.com/DevisonSantana/DD-Tech/main/data/cadastro.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
//recebe vendas do banco
async function fetchProfileDataVendas() {
    const url = 'https://raw.githubusercontent.com/DevisonSantana/DD-Tech/main/data/vendas.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
// Recuperar o arquivo Json com os produtos
async function fetchProfileDataProdutos() {
    const url = 'https://raw.githubusercontent.com/DevisonSantana/DD-Tech/main/data/produtos.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
(async () => {
    const profileDataCadastro = await fetchProfileDataCadastro()
    const profileDataVendas = await fetchProfileDataVendas()
    const profileDataProdutos = await fetchProfileDataProdutos()
    let produtoRecuperado = [];
    profileDataVendas.vendas.map((res) => {
        if(res.cliente == profileDataCadastro.cadastro[4].id){
            vendas.push(res)
            profileDataProdutos.produtos.map((prod) =>{
                if(prod.id == res.produto)
                produtoRecuperado.push(prod)
            })  
        }
    })
    carregarUsuario(profileDataCadastro.cadastro[2], produtoRecuperado)
})()