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
    favoritar.innerHTML = '<div id="favoritar" class="favoritado"> &#9829</div>'
}

// produto inserido dinamicamente
function produtoDinamico(produtoEspecifico){
    
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
    console.log(produtoEspecifico.imagem)
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
    //item.none = produtoEspec.nome
    //localStorage.setItem("itemCompra", item)
})
btnAdicionar.addEventListener('click', () =>{
    const novo1 = {Nome: produtoEspec.nome, QtdadeItem: inputQuantidade.value}
    item.push(novo1) 
    let jsonAux = JSON.stringify(item)
    localStorage.clear("itemCarrinho")
    localStorage.setItem("itemCarrinho", jsonAux)
    let itensRecuper = localStorage.getItem("itemCarrinho")
    let itemProntoParaUso = JSON.parse(itensRecuper)
    let carrinhoQtdade = document.getElementById('carrinhoQtdade')
    let quantidade = 0;
    if(itemProntoParaUso){ //estava com .length
    item.map((res) => {
        quantidade += parseInt(res.QtdadeItem)
    })}
    carrinhoQtdade.innerText = quantidade
    carrinhoQtdade.style.display = 'block'
})

