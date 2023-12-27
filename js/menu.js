let divHamburguer = document.getElementById("divHamburguer")
let parte22 = document.getElementById('parte22')
let lupa = document.getElementById('lupa')
let inputLupa = document.getElementById('divLupa')
let exitLupa = document.getElementById('exitLupa')
let produtoDigitado = '';

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
}
if(itemProntoParaUso.length > 0){
    carrinhoQtdade.innerText = itemProntoParaUso.length
    carrinhoQtdade.style.display = 'block'
}




// busca de produtos pela lupa
let produtoProcurado = document.getElementById('inputLupa')
let containerEncontrados = document.getElementById('containerEncontrados')
produtoProcurado.addEventListener('keyup', produtoBuscado)
function produtoBuscado(produto){
produtoDigitado = produtoProcurado.value
if(produtoDigitado != ''){
    procurarProduto(produtoDigitado)
}
else{
    containerEncontrados.innerHTML = ''
}
}

function carregarDinamicamenteEncontrados(produto){
    for(let cont = 0; cont < 5; cont++){
         containerEncontrados.innerHTML += `
        <picture class="containerProdutoEncontrado">
        <img src="${produto[cont].imagem[0]}" alt="">
        <figcaption>
        <div class="avaliacao">
        <img src="img/estrelas4.png" alt="4 estrelas">
        <span>Reviews (4)</span>
        </div>
        <p class="descricao">
        ${produto[cont].descricao}
        </p>
        <em class="precoAntigo">R$ ${produto[cont].preco}</em>
        <h6 class="precoAtual">R$ ${produto[cont].precoAtual}</h6>
        </figcaption>
        </picture>
        `
        console.log(containerEncontrados)
        
    }
}


async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/DevisonSantana/DD-Tech/main/data/produtos.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}


async function procurarProduto(nomeProduto) {
    
    const profileData = await fetchProfileData()
    var produto = new Produto()
    produto = profileData.produtos
    
    let produtosEncontrados = produto.filter(produto => produto.nome.toLowerCase().includes(nomeProduto.toLowerCase()) || produto.descricao.toLowerCase().includes(nomeProduto.toLowerCase()) || produto.categoria.toLowerCase().includes(nomeProduto.toLowerCase()));

    if(produtosEncontrados.length > 0)
    containerEncontrados.innerHTML = ''

        carregarDinamicamenteEncontrados(produtosEncontrados)
        
}