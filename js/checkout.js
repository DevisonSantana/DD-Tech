let carrinhoItem = sessionStorage.getItem('carrinhoFinal')
carrinhoItem = JSON.parse(carrinhoItem)
console.log(carrinhoItem)

let valoresFinais = carrinhoItem.Valoresfinais
carrinhoItem = carrinhoItem.Produtos
console.log(valoresFinais)



const tabelaProduto = document.getElementById("table-body")

carrinhoItem.map((e)=>{
    console.log(e.Imagem)
    tabelaProduto.innerHTML += 
    `<tr>
        <td>
            <img src="${e.Imagem}" alt="${e.Nome}" width= 114px>
        </td>
            

        <td>
        ${e.Nome}
        
        </td>
        <td>
            R$ ${e.PrecoItem}
        </td>
        <td>
        ${e.Qtdade}
            
        </td>
        <td>
        ${(e.PrecoTotalItem).toLocaleString('pt-br', {style: "currency", currency: "BRL"})}
            
        </td>    
    </tr>                       
    `
    
})
