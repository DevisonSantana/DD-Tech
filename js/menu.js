let divHamburguer = document.getElementById("divHamburguer")
let parte22 = document.getElementById('parte22')
let lupa = document.getElementById('lupa')
let inputLupa = document.getElementById('divLupa')
let exitLupa = document.getElementById('exitLupa')
let produtoDigitado = '';
let caminhoFotoPerfil = 'login.html'
let divLogado = document.getElementById('divLogado')
let fotoPerfil = document.getElementById('fotoPerfil')
let logout = document.getElementById('logout')


// verificar se existe e recuperar token
 const tokenToDecode = sessionStorage.getItem('token');
  if(tokenToDecode){
      // Decodificação do token
      const decodedToken = KJUR.jws.JWS.parse(tokenToDecode);
      fotoPerfil.style.filter = 'grayscale(0)'
      fotoPerfil.addEventListener('click', () => divLogado.style.display = 'flex')
  }
  else{
    fotoPerfil.style.filter = 'grayscale(.9)'
   fotoPerfil.addEventListener('click', () => window.location.href = caminhoFotoPerfil)
  }

// logout
logout.addEventListener('click', () => {
    sessionStorage.removeItem('token')
    window.location.href = 'index.html'
})

exitLupa
//Menu Hamburguer
divHamburguer.addEventListener('click', ()=>{

    console.log(parte22.style.display)
    if(parte22.style.display === '' || parte22.style.display === 'none'){
        parte22.style.display = 'flex' 
        parte22.style.height = 'fit-content'
        parte22.style.width = 'fit-content'
    }
    else if(parte22.style.display == 'flex'){
        parte22.style.display = 'none'
    }
    
})

//Lupa

lupa.addEventListener('click', ()=>{
    if(inputLupa.style.display === 'none' || inputLupa.style.display === ''){
        inputLupa.style.display = 'flex'
        inputLupa.focus();
    }
    else if(inputLupa.style.display === 'flex'){
        inputLupa.style.display = 'none'
    }
})
     
exitLupa.addEventListener('click', ()=>{
    inputLupa.style.display = 'none'
    
})


// Carrinho
let carrinhoQtdade = document.getElementById('carrinhoQtdade')
let itemProntoParaUso;
let itensR = localStorage.getItem("itemCarrinho")
if(itensR){
    itemProntoParaUso = JSON.parse(itensR)
    let quantidade = 0;
    if(itemProntoParaUso){ //estava com .length
        itemProntoParaUso.map((res) => {
            quantidade += parseInt(res.QtdadeItem)
        })
        carrinhoQtdade.innerText = quantidade
        carrinhoQtdade.style.display = 'block'
    }
}

//busca de produto pelo cabecalho
let itensCabecalho = [... document.querySelectorAll('#parte2 > li')]
let itensCabecalhoMobile = [... document.querySelectorAll('#parte22 > li')]
itensCabecalho.map((res) =>{
    res.addEventListener('click', (evt) =>{
        if(evt.target.innerText.toLowerCase() == 'outros produtos'){
            procurarProduto('outros')
            
        }
        else if(evt.target.innerText.toLowerCase() == 'notebooks'){
            procurarProduto('note')
        }
        else if(evt.target.innerText.toLowerCase() == 'desktops'){
            procurarProduto('desktops')
        }
        else{
            procurarProduto(evt.target.innerText.toLowerCase())
        }
    })
})
itensCabecalhoMobile.map((res) =>{
    res.addEventListener('click', (evt) =>{
        if(evt.target.innerText.toLowerCase() == 'outros'){
            procurarProduto('outros')
        }
        else if(evt.target.innerText.toLowerCase() == 'notebooks'){
            procurarProduto('note')
        }
        else if(evt.target.innerText.toLowerCase() == 'desktops'){
            procurarProduto('desktops')
        }
        else{
            procurarProduto(evt.target.innerText.toLowerCase())
        }
    })
})

// buscar ofertas
let buscarOfertas = document.getElementById('buscarOfertas').addEventListener('click', () =>  procurarProduto('oferta'))

// busca de produtos pela lupa
let produtoProcurado = document.getElementById('inputLupa')
let containerEncontrados = document.getElementById('containerEncontrados')
let verMaisProcurados = [...document.getElementsByClassName('verMaisProcurados')]
let btnSairProcurados = document.getElementById('btnSairProcurados')

produtoProcurado.addEventListener('keyup', produtoBuscado)
function produtoBuscado(produto){
produtoDigitado = produtoProcurado.value
if(produtoDigitado != ''){
    procurarProduto(produtoDigitado)
}
else{
    containerEncontrados.innerHTML = ''
    verMaisProcurados[0].style.display = 'none'
    verMaisProcurados[1].style.display = 'none'
    }
}
function carregarDinamicamenteEncontrados(produto){
    for(let cont = 0; cont < produto.length; cont++){
        let descricao;
        if(produto[cont].descricao.length > 75){
            descricao = produto[cont].descricao.substr(0, 75) + '...'
            }else{
            descricao = produto[cont].descricao
        }
         containerEncontrados.innerHTML += `
        <picture class="containerProdutoEncontrado"  id="${produto[cont].nome}" onclick="AcessarProdutoPage(id)">
        <img src="${produto[cont].imagem[0]}" alt="">
        <figcaption>
        <div class="avaliacao">
        <img src="img/estrelas4.png" alt="4 estrelas">
        <span>Reviews (4)</span>
        </div>
        <p class="descricao">
        ${descricao}
        </p>
        <em class="precoAntigo">R$ ${produto[cont].preco}</em>
        <h6 class="precoAtual">R$ ${produto[cont].precoAtual}</h6>
        </figcaption>
        </picture>
        `        
    }
    sairProcurados() 
   verMaisProcurados[1].style.display = 'flex'
   btnSairProcurados.style.display = 'flex'
}

// mover procurados
verMaisProcurados.map((res) =>{
    res.addEventListener('click', () =>{
        console.log(containerEncontrados.scrollLeft)
        if(res.id == 'verMais'){
            containerEncontrados.scrollLeft += 170
            verMaisProcurados[0].style.display = 'flex'
        }
        else if(res.id == 'verMenos'){
            containerEncontrados.scrollLeft += -170
        }
    })
})

// sair procurados
function sairProcurados(){
    btnSairProcurados.addEventListener('click', () => {
        containerEncontrados.innerHTML = ''
        verMaisProcurados[0].style.display = 'none'
        verMaisProcurados[1].style.display = 'none'
        btnSairProcurados.style.display = 'none'
        inputLupa.style.display = 'none'
    })
}
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/DevisonSantana/DD-Tech/main/data/produtos.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}


async function procurarProduto(nomeProduto) {
    
    let produtosEncontrados;
    const profileData = await fetchProfileData()
    var produto = new Produto()
    produto = profileData.produtos
    if(nomeProduto === 'oferta'){    
        produtosEncontrados = produto.filter(produto => produto.oferta.toString().includes('true'))
    }
    else{
        produtosEncontrados = produto.filter(produto => produto.nome.toLowerCase().includes(nomeProduto.toLowerCase()) || produto.descricao.toLowerCase().includes(nomeProduto.toLowerCase()) || produto.categoria.toLowerCase().includes(nomeProduto.toLowerCase()));
    }

    if(produtosEncontrados.length > 0){
        containerEncontrados.innerHTML = ''
        carregarDinamicamenteEncontrados(produtosEncontrados)
    }
    else{
        containerEncontrados.innerHTML = `
            <p>Produto não encontrado</p>
    `
    verMaisProcurados[0].style.display = 'none'
    verMaisProcurados[1].style.display = 'none'
    }

}

// funcao para ir para a pagina de produtos passando o produto clicado

function AcessarProdutoPage(produtoEspecifico){
    console.log(produtoEspecifico)
    sessionStorage.setItem("nomeProduto", produtoEspecifico)
    window.location.href = `produto.html`
    }

    // Modal

    function Modal(titulo, mensagem, botaoConfirmar) {
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