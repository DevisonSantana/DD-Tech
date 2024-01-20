var menuLateral = [...document.getElementsByClassName("menuLateral")]
var section = [...document.getElementsByTagName("section")]
var indiceMenu;
let btnCart = document.querySelector('.btnCart')
let btndados = document.querySelector('#btndados')
let dadosSensiveisCartao = document.getElementById('dadosSensiveisCartao')
let cartao = document.getElementById('cartao')


//mostrar dados do cartao
function carregarCartao(usuario, cartoes){
btnCart.addEventListener('click', ()=>{
    let btndados = document.querySelector('.cartoesCadastrados .divColum')
    btndados.style.display = 'flex'
    btnCart.style.display = 'none'
})
btndados.addEventListener('click', () => {
    
    let senhacartao = document.getElementById('senhacartao').value
    console.log(senhacartao)
        if(senhacartao ==  usuario.senha){
            console.log()
               cartao.innerHTML = ''
               cartoes.map((res) => {
                cartao.innerHTML += `
                <fieldset class="cartoesCadastrados">
                <legend>Cartao final <span class="spanCartao">${res.numeroCartao.substr(12,15)}</span></legend>
                <div class="divCart" id="dadosSensiveisCartao">
                <label>Número</label>
                <input type="number" placeholder="${res.numeroCartao}" disabled>
                <label>Bandeira</label>
                <input type="text" placeholder="${res.bandeira}" disabled>
            </div>
            <div class="divCart">
                <label>Validade</label>
                <input type="text" placeholder="${res.validade}" disabled >
                <label>Nome</label>
                <input type="text" placeholder="${res.nomeCartao}" disabled >
            </div>
            <div class="divRow"><button class="alterarDadosCartao" id="${res.id}" onclick="alterarDadosCartao()">Alterar Dados</button></div>
            </fieldset>
            `

//<button class="alterarDadosCartao" id="${res.id}" onclick="confirmarAlteração(id)">Confirmar Alteração</button><button class="alterarDadosCartao" id="${res.id}" onclick="cancelarAlteração()">Cancelar</button>
            })
            if(cartoes.toString() == ''){
                cartao.innerHTML = 'Você ainda não possui cartões cadastrados.'
            }
        }
        else{
            cartao.innerHTML += 'senha inválida, Você será redirecionado a pagina inicial'
            setTimeout(pageInicial, 1000) 
        }
    })


}
function pageInicial(){
    sessionStorage.removeItem('token')
    window.location.href = 'index.html'
}

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

function carregarBotoesPedido(){


const listAtributs = document.getElementById("atributs");
let buttonProducts = [...document.getElementsByClassName("button")]

let currentListAtributs = 1
let arrayListAtributs = [
    "none",
    "flex"
]
buttonProducts.map((e) => {
    e.addEventListener("click", (evt) => {
        var numAtribut = evt.target.value
        passarAtributs(numAtribut)
        MudarDisplayAtributs()
        setTimeout(() => {
            efeitoModal();
        }, 10);
    })
});

function efeitoModal(){
    let avaliarModal = document.getElementById('avaliarModal');
           
        avaliarModal.style.transform = 'translateY(-100px)';

}

function MudarDisplayAtributs() {

    if (currentListAtributs == arrayListAtributs.length) {
        currentListAtributs = 0
    }
    listAtributs.style.display = arrayListAtributs[currentListAtributs]
    currentListAtributs++

}

listAtributs.addEventListener("click", (e) => {

    if (e.target.nodeName == 'DIV' || e.target.nodeName == 'H2' || e.target.nodeName == "TEXTAREA" || e.target.nodeName == "IMG" || e.target.nodeName == "LABEL" || e.target.nodeName == "SELECT"){}
    else MudarDisplayAtributs()
    

})
function passarAtributs(numAtributo) {
    if(numAtributo == 0) var atributos = avaliar();
    else if(numAtributo == 1) var atributos = acompanhar()
    else if(numAtributo == 2) var atributos = trocaDevolucao()
listAtributs.innerHTML = atributos
clicarEstrelas()
}
}

// alterar cadastro
let btnAlterarCadastro = document.querySelector('#alterarCadastro button')

btnAlterarCadastro.addEventListener('click', (botao) => {
    botao.preventDefault()
    ModalAdiciobadoCarrinho("Sucesso", "Seua Cadastro foi Alterado", "Voltar", "")
    MudarDisplayAtrib()

})
// alterar cadastro

let inputs = document.querySelectorAll('#formCadastro input')
let span = [...document.getElementsByClassName('span')]
span.map((evt) =>{
    evt.addEventListener('click', (res) => {
        inputs[Number(res.target.id)].disabled = false
        inputs[Number(res.target.id)].value =  inputs[Number(res.target.id)].placeholder

    })
})
let inputsEndereco = document.querySelectorAll('#enderecosCadastrados input')
let AlterarEndereco = document.getElementById('AlterarEndereco')
AlterarEndereco.addEventListener('click', () => {
    for(let i = 0; i < inputsEndereco.length; i++) {
        inputsEndereco[i].disabled = false
        inputsEndereco[i].value = inputsEndereco[i].placeholder

    }
    AlterarEndereco.innerHTML = '<button class="btnAlterar" id="confirmarMudancaEndereco" onclick="mudarEndereco()">confirmar</button>'
})   

function mudarEndereco(){
    console.log("testou")
    ModalAdiciobadoCarrinho("Sucesso", "Seu Endereço foi Alterado", "Voltar", "")
    MudarDisplayAtrib()
}


function avaliar() {
    const div = `
   <section id="listAtributs" class="atributos" >
   <div id="avaliarModal">
   <div class="fecharModalSup"><button>X</button></div>
   <h2>Avaliar</h2>
   <textarea name="comenarioAdd" id="comenarioAdd" cols="70" rows="4" placeholder="Comentário"></textarea>
   <div>
   <img class="estrelasAvaliacao" src="img/estrelaVazia.png" alt="" id="0">
   <img class="estrelasAvaliacao" src="img/estrelaVazia.png" alt="" id="1">
   <img class="estrelasAvaliacao" src="img/estrelaVazia.png" alt="" id="2">
   <img class="estrelasAvaliacao" src="img/estrelaVazia.png" alt="" id="3">
   <img class="estrelasAvaliacao" src="img/estrelaVazia.png" alt="" id="4">
   </div>
   <button type="button">Enviar</button>
   </div>
    </section>  `

    
    return div
}

function acompanhar() {
    const div = `
   <section id="listAtributs" class="atributos tableAcompanhar" >
   <div id="avaliarModal">
   <div class="fecharModalSup"><button>X</button></div>
   <h2>Acompanhar</h2>
   <table class="ultimosPedidos" >
   <thead >
   <tr class="headTable">
       <th  class="descricaoPedidos">
       Produto
       </th >
       <th >
       
       </th >
       <th  class="descricaoPedidos">
       Previsao
       </th >
       <th  class="precoAtual">Codigo de rastreiamento</td>
       
   </tr>
   </thead>
   <tbody>
   <tr>
       <td class="descricaoPedidos">
       Inspiron
       </td>
       <td class="imdTd">
       <img src="img/produtos/dell1.jpg" alt="inspiron">
       </td>
       <td class="descricaoPedidos">
       27/01/2024
       </td>
       <td class="precoAtual">#lkk5678686ff</td>
       
   </tr>
   </tbody>
   </table>
   <button type="button">Fechar</button>
   </div>
    </section>  `

    return div
}
function trocaDevolucao() {
    const div = `
   <section id="listAtributs" class="atributos" >
   <div id="avaliarModal">
   <div class="fecharModalSup"><button>X</button></div>
   <h2>Troca ou Devolução</h2>
   <label>Nos diga o motivo da troca ou devolução do produto</label>
   <textarea name="comenarioAdd" id="comenarioAdd" cols="70" rows="4" placeholder="Comentário"></textarea>
   <div>
   <select name="trocaDevolucao" id="trocaDevolucao">
   <option value="" selected disabled>--selecione--</option>
   <option value="troca">Troca</option>
   <option value="devolucao">Devolucao</option>
</select>
   </div>
   <button type="button">Enviar</button>
   </div>
    </section>  `

    return div
}

// funcao para a avaliacao pelas estrelas
function clicarEstrelas(){
    let estrelaVazia = [...document.getElementsByClassName('estrelasAvaliacao')]
    estrelaVazia.map((evt) => {
        evt.addEventListener('click', (res) =>{
            let id = res.target.id;
            console.log(res.target.classList)
            if(res.target.classList != 'estrelasAvaliacao amarela' )
                alterarCorAmarelo(res.target.id)
            else
            alterarCorBranco(res.target.id)
        })
    })
    
    function alterarCorAmarelo(indice){
        for(let i = indice; i >= 0 ; i--){
            estrelaVazia[i].setAttribute('src', 'img/estrelaAmarela.png' )
            estrelaVazia[i].classList.add('amarela')
            
        }
    }
    function alterarCorBranco(indice){
        for(let i = (Number(indice)+ 1); i <= 4 ; i++){
            estrelaVazia[i].setAttribute('src', 'img/estrelaVazia.png' )
            estrelaVazia[i].classList.remove('amarela')
            
        }
    }
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
            <img src="${produtoRecuperado[i].imagem[0]}" alt="${produtoRecuperado[i].nome}">
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
carregarBotoesPedido()
}

//carregar endereço dinamicamente
function carregarEnderecoCadastrado(dados){
    let emailCadastrado = document.getElementById('emailCadastrado').placeholder = dados.email
    let receberEmails = document.getElementById('receberEmails')
    let senhaCadastrada = document.getElementById('senhaCadastrada')
    let nomeCompleto = document.getElementById('nomeCompleto').placeholder = `${dados.nome} ${dados.sobrenome}`
    let nomeSocial = document.getElementById('nomeSocial').placeholder = dados.nomeSocial
    let generoCadastrado = document.getElementsByName('genero')
    if(dados.genero === 'feminino')
        generoCadastrado[0].checked = true
    else if(dados.genero === 'masculino')
            generoCadastrado[1].checked = true
    else
        generoCadastrado[2].checked = true
    
    let dataNascimentoCadastrada = document.getElementById('dataNascimentoCadastrada').placeholder = dados.dataNascimento
    let cpfCadastrado = document.getElementById('cpfCadastrado').placeholder = dados.cpf.substr(0, 3) + '########'
    let telefoneCadastrado = document.getElementById('telefoneCadastrado').placeholder = dados.telefone
    let logradouroCadastrado = document.getElementById('logradouroCadastrado').placeholder = dados.logradouro
    let numeroCadstrado = document.getElementById('numeroCadstrado').placeholder = dados.numero
    let bairroCadastrado = document.getElementById('bairroCadastrado').placeholder = dados.bairro
    let cidadeCadastrada = document.getElementById('cidadeCadastrada').placeholder = dados.cidade
    let cepCadastrado = document.getElementById('cepCadastrado').placeholder = dados.cep
    let estadoCadastrado = document.getElementById('estadoCadastrado').placeholder = dados.estado
    let paisCadastrado = document.getElementById('paisCadastrado').placeholder = dados.pais

}

//Modal
let ModalAtrib = document.getElementById("ModalGeral");


function MudarDisplayAtrib() {
    ModalAtrib.style.display = 'none'
    if (ModalAtrib.style.display == 'none') {
        ModalAtrib.style.display = 'flex'
    }
   

}
ModalAtrib.addEventListener("click", (e) => {

    if (e.target.nodeName == 'DIV' || e.target.nodeName == 'H2' || e.target.nodeName == "P" ){}
    else MudarDisplayAtrib()
    
})


function ModalAdiciobadoCarrinho(titulo, mensagem, botaoConfirmar, botaoSecond) {
    if(botaoSecond == ''){
        ModalAtrib.innerHTML = `
   
   <div id="avaliarModal">
   <div class="fecharModalSup"><button>X</button></div>
   <h2>${titulo}</h2>
   <p>${mensagem}</p>
   <div class="btnModal">
   <button type="button"> ${botaoConfirmar}</button>
   </div>
   </div>
      `
    }
    else{

        ModalAtrib.innerHTML = `
        
        <div id="avaliarModal">
        <div class="fecharModalSup"><button>X</button></div>
        <h2>${titulo}</h2>
        <p>${mensagem}</p>
        <div class="btnModal">
        <a href="carrinho.html"><button type="button">${botaoSecond}</button></a>
        <button type="button"> ${botaoConfirmar}</button>
        </div>
        </div>
        `
    }
    setTimeout(() => {
        efeitoModal();
    }, 10);
}
function efeitoModal(){
    let avaliarModal = document.getElementById('avaliarModal');
           
        avaliarModal.style.transform = 'translateY(-100px)';

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
    // Token a ser decodificado
    const tokenToDecode = VerificarToken;
    // Decodificação do token
    const decodedToken = KJUR.jws.JWS.parse(tokenToDecode);

    
    
    const profileDataCadastro = await fetchProfileDataCadastro()
    const profileDataVendas = await fetchProfileDataVendas()
    const profileDataProdutos = await fetchProfileDataProdutos()

    let user;
    profileDataCadastro.cadastro.map((res) => {
        if(res.nome == decodedToken.payloadObj.username){
            user = Number(res.id)
        }
    })
    let produtoRecuperado = [];
    profileDataVendas.vendas.map((res) => {
        if(res.cliente == user){
            vendas.push(res)
            profileDataProdutos.produtos.map((prod) =>{
                if(prod.id == res.produto)
                produtoRecuperado.push(prod)
            })  
        }
    })
    carregarUsuario(profileDataCadastro.cadastro[user -1], produtoRecuperado)
    carregarEnderecoCadastrado(profileDataCadastro.cadastro[user -1])
    let cartoesUsuario = [];
    profileDataCadastro.cartoes.map((res) => {
        if(res.usuario == user.id)
            cartoesUsuario.push(res)
    })
    carregarCartao(profileDataCadastro.cadastro[2], cartoesUsuario)
})()

