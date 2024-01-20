let botao_pagamento = document.querySelector('.botao-pagamento')
let subtotal = document.getElementById('subtotal')
let precoTotal = document.getElementById('precoTotal')
let valorTotal = 0;
let indice = 0
let item = []
let taxaPorPais = document.getElementById('pais')

botao_pagamento.addEventListener('click', ()=>{
    let token = sessionStorage.getItem('token')
    if(!token){
        window.location.href = 'login.html'    
    }
    else{

        window.location.href = 'checkout.html'
    }
    })

function passarProdutosRecuperados(produtoRecuperado){
    let bodyTabela = document.getElementById('bodyTabela')
    let recuperados = localStorage.getItem('itemCarrinho')
    let cont = 0
    recuperados = JSON.parse(recuperados)
    if(recuperados != null){
        bodyTabela.innerHTML = '';
        recuperados.map((evt) => {
            produtoRecuperado.map((res) => {
                if(res.nome === evt.Nome){
                    let novo = {Nome: res.nome, QtdadeItem: evt.QtdadeItem}
                    item.push(novo)
                    let tableHeader = document.querySelector('.thead')
                    console.log(tableHeader)
                    tableHeader.innerHTML = `
                        <th></th>
                        <th></th>
                        <th>Item</th>
                        <th>Preço</th>
                        <th>Qtd</th>
                        <th>Subtotal</th> 
                    `
                    valorTotal += res.precoAtual * evt.QtdadeItem
                    subtotal.innerText = valorTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                    precoTotal.innerText = "Preço Total: " + (valorTotal + verificaPais()).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                    bodyTabela.innerHTML += `
                    <tr class="tproduto">
                    <td><input type="checkbox" value="${res.precoAtual * evt.QtdadeItem}" name="produtoSeleconado" id="produtoSeleconado" class="produtoSeleconado" checked></td>
                    <td> <img src="${res.imagem[0]}" alt="${res.categoria}" class="table-img"> </td>
                    <td class="tableNome"><a href=""></a>${res.nome}</td>
                    <td class="tablePrecoItem">${parseFloat(res.precoAtual).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
                    <td class="tdQtdade">
                    <div class="tdQtdadeDiv">
                    <button id="${cont}">-</button><input type="number" name="quantidadeItem" id="${cont}" class="quantidadeItem" value="${evt.QtdadeItem}" required onkeyup="atualizarCarrinho()"><button id="${cont}">+</button>
                    </div>
                    </td>
                    <td class="tableTotalItem" id="${cont}">${parseFloat(res.precoAtual * evt.QtdadeItem).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
                    <td>
                        <button class="table-btn excluir" id=${cont}>X</button>
                    </td>
                    </tr> 
                    `
                    cont++
                }
            })
        })
        Verificar()
    }
    excluirItem()
    alterarQuantidade()
    let tdQtdade = [...document.querySelectorAll('.tdQtdade input')]
    tdQtdade.map((res) => {
        if(res.value == ''){
            res.value = "1"
            atualizarCarrinho()
        }
    })
}



// verificar quais itens estao selecionados
let total = 0
function Verificar(){

    let produtoSeleconado = [...document.getElementsByClassName('produtoSeleconado')]
    produtoSeleconado.map((evt) => {
        evt.addEventListener("change", () => {
            total = 0
            produtoSeleconado.map((sel) => {
                
                if(sel.checked){
                    
                    total += Number(sel.value)
                }
                
            })
            atualizaSubtotalETotalNaPagina()
            atualizarCarrinho()
        })
    })
    atualizarCarrinho()
}

// aumentar ou dimunir itens pelos botoes
let carrinhoAtualizar = {
    Produtos: [],
    Valoresfinais: {}
}
    


function alterarQuantidade(){

    let tdQtdadeBtn = [...document.querySelectorAll('.tdQtdade button')]
    let tdQtdadeInp = [...document.querySelectorAll('.tdQtdade input')]
    let produtoSeleconado = [...document.getElementsByClassName('produtoSeleconado')]

    tdQtdadeBtn.map((evt) => {
        evt.addEventListener('click', () => {
            if(!produtoSeleconado[evt.id].checked){
                produtoSeleconado[evt.id].checked = true 
            }
            
                if(evt.innerText == '+'){
                    tdQtdadeInp[evt.id].value =  Number( tdQtdadeInp[evt.id].value) + 1
                    
                    atualizarCarrinho()
                }
                
                else if(evt.innerText == '-'){
                    if(tdQtdadeInp[evt.id].value > 1){
                        tdQtdadeInp[evt.id].value =  Number( tdQtdadeInp[evt.id].value) - 1
                        atualizarCarrinho()
                    }
                }
            
        })

    })
    
}

// excluir item
function excluirItem(){
    let excluir = [...document.getElementsByClassName('excluir')]
    excluir.map((evt) =>{
        evt.addEventListener('click',(res) => {
            item.splice(res.target.id, 1)
            atualizarCarrinhoSessionStorage()
            console.log(item)
            if(item.length < 1)
                localStorage.removeItem("itemCarrinho")
            window.location.reload()
        })
    })

}

function atualizarCarrinho(){
    let totalGeral = 0;
    let produtoSeleconado = [...document.getElementsByClassName('produtoSeleconado')]

    let tproduto = [...document.getElementsByClassName('tproduto')]
    let tableImg = [...document.getElementsByClassName('table-img')]
    let tableNome = [...document.getElementsByClassName('tableNome')]
    let tdQtdade = [...document.querySelectorAll('.tdQtdade input')]
    let tablePrecoItem = [...document.getElementsByClassName('tablePrecoItem')]
    let tableTotalItem = [...document.getElementsByClassName('tableTotalItem')]
    total = 0
    item = []
    carrinhoAtualizar = {
        Produtos: [],
        Valoresfinais: {}
    }
        

    for(let i = 0; i < tproduto.length; i++){
        console.log(produtoSeleconado[i]);
        if(produtoSeleconado[i].checked){

            let tot = (parseFloat(tdQtdade[i].value) * parseFloat(tablePrecoItem[i].innerText.slice(3).replace(/\./g, '').replace(',', '.')))     
            total += tot      
            tableTotalItem[i].innerText = tot.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})    
            const alterado = {Imagem: tableImg[i].src, Nome: tableNome[i].innerText, Qtdade: tdQtdade[i].value, PrecoItem: tablePrecoItem[i].innerText.slice(3), PrecoTotalItem: tot}
            carrinhoAtualizar.Produtos.push(alterado) 
    
            
            const novo1 = {Nome: tableNome[i].innerText, QtdadeItem: tdQtdade[i].value}
            item.push(novo1) 
            
        }
    }   
    atualizaSubtotalETotalNaPagina()
        const valoresfinais = {subTotal: subtotal.innerText, precoTotal: precoTotal.innerText}
        carrinhoAtualizar.Valoresfinais = valoresfinais


        let jsonAux = JSON.stringify(carrinhoAtualizar)
        localStorage.clear("carrinhoFinal")
        sessionStorage.setItem("carrinhoFinal", jsonAux)
        //let itensRecuperCarrinhoFinal = localStorage.getItem("carrinhoFinal")
    //window.location.reload();
    atualizarCarrinhoSessionStorage()
    
    
}

function atualizarCarrinhoSessionStorage(){
    let jsonAux = JSON.stringify(item)
    localStorage.clear("itemCarrinho")
    localStorage.setItem("itemCarrinho", jsonAux)
    let itensRecuper = localStorage.getItem("itemCarrinho")
    let itemProntoParaUso = JSON.parse(itensRecuper)

}
// esvaziar carrinho
let btnEsvaziarCarrinho = document.getElementById('btnEsvaziarCarrinho')
btnEsvaziarCarrinho.addEventListener('click', () => {
    localStorage.clear('itemCarrinho')
    window.location.reload();
    
})


console.log(carrinhoAtualizar)
console.log(item)
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
        let totalComDesconto = total - (total * 0.10)
        subtotal.innerText = (totalComDesconto).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        precoTotal.innerText = "Preço Total: " + (totalComDesconto + verificaPais()).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    }

})

/*
Função para aplicar taxa de envio
Sempre que o país de destino for modificado o valor da taxa aumenta ou diminui dinamicamente
O valor das taxa são iguais a zero quando a opção retirar na loja está marcada
Caso contrario a taxa não será aplicada devidamente
*/

let entregaDestino = document.getElementById('entrega-destino')
let retirarNaLoja = document.getElementById('retirar-na-loja')
let localEntrega;

entregaDestino.addEventListener('click', (e)=>{
    localEntrega = e.target.value
    atualizaSubtotalETotalNaPagina()
    return localEntrega
})
retirarNaLoja.addEventListener('click', (e)=>{
    localEntrega = e.target.value
    atualizaSubtotalETotalNaPagina()
    return localEntrega
})

taxaPorPais.addEventListener('change', atualizaSubtotalETotalNaPagina)

function atualizaSubtotalETotalNaPagina(){
    total = RetornarTotal()

    subtotal.innerText = (total).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    precoTotal.innerText = "Preço Total: " + (total + verificaPais()).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}

function verificaPais(){
    let taxa = document.getElementById('taxa')
    let envio = document.getElementById('envio')
    let valorDaTaxa = 0;
    let valorDeEnvio = 0;
    let recuperados = localStorage.getItem('itemCarrinho')
    recuperados = JSON.parse(recuperados)

    if(recuperados != null){
        if (localEntrega == 'casa') {
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
        } else {
            valorDaTaxa = 0
            valorDeEnvio = 0
            adicionaTaxaEEnvioNaPagina()
        }
        
        function adicionaTaxaEEnvioNaPagina(){
            taxa.innerText = (valorDaTaxa).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
            envio.innerText = (valorDeEnvio).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
        }
    }
    return valorDaTaxa + valorDeEnvio;
}

function RetornarTotal(){
    let produtoSeleconado = [...document.getElementsByClassName('produtoSeleconado')]
    let tableTotalItem = [...document.getElementsByClassName('tableTotalItem')]
    let totali= 0;
    for(let i = 0; i < produtoSeleconado.length; i++) {
                if(produtoSeleconado[i].checked){
                    
                    console.log(tableTotalItem[i].innerText.slice(3))
                    totali += parseFloat(tableTotalItem[i].innerText.slice(3).replace(/\./g, '').replace(',', '.'))
                    console.log(totali)
                }
                
            }       
            return totali
}

function atualizarPagina(){
    window.location.reload();
}

