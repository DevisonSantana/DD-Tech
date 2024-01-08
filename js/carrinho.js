let botao_pagamento = document.querySelector('.botao-pagamento')
let subtotal = document.getElementById('subtotal')
let precoTotal = document.getElementById('precoTotal')
let valorTotal = 0;
let indice = 0
let item = []
let taxaPorPais = document.getElementById('pais')

botao_pagamento.addEventListener('click', ()=>{
    
    window.location.href = 'checkout.html'
})

function passarProdutosRecuperados(produtoRecuperado){
    let bodyTabela = document.getElementById('bodyTabela')
    let recuperados = localStorage.getItem('itemCarrinho')
    recuperados = JSON.parse(recuperados)
    if(recuperados != null){
        bodyTabela.innerHTML = '';
        recuperados.map((evt) => {
            produtoRecuperado.map((res) => {
                if(res.nome === evt.Nome){
                    let novo = {Nome: res.nome, QtdadeItem: evt.QtdadeItem}
                    item.push(novo)
                    bodyTabela.innerHTML += `
                    <tr class="tproduto">
                        <td> <img src="${res.imagem[0]}" alt="${res.categoria}" class="table-img"> </td>
                    <td><a href="#"></a>${res.nome}</td>
                    <td>${parseFloat(res.precoAtual).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
                    <td>
                        <input type="number" id="quantidade" min="1" max="100"  value="${evt.QtdadeItem}">
                    </td>
                    <td>${parseFloat(res.precoAtual * evt.QtdadeItem).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
                    <td>
                        <button class="table-btn excluir" id=${indice++}>X</button>
                    </td>
                    </tr> 
                    `
                    valorTotal += res.precoAtual * evt.QtdadeItem
                    subtotal.innerText = valorTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                    precoTotal.innerText = "Preço Total: " + (valorTotal + verificaPais()).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                    
                }
            })
        })
    }
    excluirItem()
}

// excluir item
function excluirItem(){
    let excluir = [...document.getElementsByClassName('excluir')]
    excluir.map((evt) =>{
        evt.addEventListener('click',(res) => {
            item.splice(res.target.id, 1)
            let jsonAux = JSON.stringify(item)
            localStorage.clear("itemCarrinho")
            localStorage.setItem("itemCarrinho", jsonAux)
            let itensRecuper = localStorage.getItem("itemCarrinho")
            let itemProntoParaUso = JSON.parse(itensRecuper)
            window.location.reload()
        })
    })

}

// esvaziar carrinho
let btnEsvaziarCarrinho = document.getElementById('btnEsvaziarCarrinho')
btnEsvaziarCarrinho.addEventListener('click', () => {
    localStorage.clear('itemCarrinho')
    window.location.reload();
})

function atualizarCarrinho(){
    window.location.reload();
}

// Recuperar o arquivo Json com os produtos
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/DevisonSantana/DD-Tech/main/data/produtos.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}

// Chama a função para buscar os dados da api e pasar por parametro para as demais funcoes
(async () => {
    const profileData = await fetchProfileData()
    passarProdutosRecuperados(profileData.produtos)
    
})()

// aplicar desconto
let aplicarDesconto = document.getElementById('aplicarDesconto')
aplicarDesconto.addEventListener('click', ()=>{
    let cupomDesconto = document.getElementById('cupomDesconto').value
    if(cupomDesconto === 'alvinhu10'){
        let totalComDesconto = valorTotal - (valorTotal * 0.10)
        subtotal.innerText = (totalComDesconto).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        precoTotal.innerText = "Preço Total: " + (totalComDesconto + verificaPais()).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }

})

// função para aplicar taxa de envio

taxaPorPais.addEventListener('change', ()=>{
    subtotal.innerText = (valorTotal).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    precoTotal.innerText = "Preço Total: " + (valorTotal + verificaPais()).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
})

function verificaPais(){
    let taxa = document.getElementById('taxa')
    let envio = document.getElementById('envio')
    let recuperados = localStorage.getItem('itemCarrinho')
    recuperados = JSON.parse(recuperados)
    let valorDaTaxa = 0;
    let valorDeEnvio = 0;
    if(recuperados != null){
        if(taxaPorPais.value == 'brasil'){
            valorDaTaxa = 0.10
            valorDeEnvio = 22.48
            adicionaTaxaEEnvioNaPagina()
        } else if(taxaPorPais.value == 'canada'){
            valorDaTaxa = 28.64
            valorDeEnvio = 50.99
            adicionaTaxaEEnvioNaPagina()
        } else {
            valorDaTaxa = 21.97
            valorDeEnvio = 49.01
            adicionaTaxaEEnvioNaPagina()
        }

        function adicionaTaxaEEnvioNaPagina(){
            taxa.innerText = (valorDaTaxa).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
            envio.innerText = (valorDeEnvio).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
        }
    }

    return valorDaTaxa + valorDeEnvio;
}