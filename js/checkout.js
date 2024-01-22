let carrinhoItem = sessionStorage.getItem('carrinhoFinal');
carrinhoItem = JSON.parse(carrinhoItem);
console.log(carrinhoItem.Valoresfinais.envio);

let valoresFinais = carrinhoItem.Valoresfinais || {};
let subTotalString = valoresFinais.subTotal || '0';
let subTotal = parseFloat(subTotalString.replace(/[^\d,.-]/g, '').replace('.', '').replace(',', '.')) || 0;
carrinhoItem = carrinhoItem.Produtos;
console.log(carrinhoItem);

const tabelaProduto = document.getElementById("table-body");

carrinhoItem.map((e) => {
    console.log(e.Imagem);

    // Convertendo e.PrecoItem para número e formatando com 2 casas decimais
    const precoItemFormatado = parseFloat(e.PrecoItem).toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    // Convertendo e.PrecoTotalItem para número e formatando com 2 casas decimais
    const precoTotalItemFormatado = parseFloat(e.PrecoTotalItem).toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    tabelaProduto.innerHTML +=
        `<tr>
        <td><img src="${e.Imagem}" alt="${e.Nome}" width= 114px></td>
        <td>${e.Nome}</td>
        <td>R$ ${precoItemFormatado}</td>
        <td>${e.Qtdade}</td>
        <td>R$ ${precoTotalItemFormatado}</td>
    </tr>`;
});



let subtotal1 = document.getElementById("subtotal1");
subtotal1.textContent = `Subtotal: R$ ${subTotal.toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

console.log(subtotal1);

let precoTotal1 = document.getElementById("precoTotal");
precoTotal1.textContent = `Preço Total: R$ ${subTotal.toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;


let envioFinal = document.getElementById("envio")
console.log(envioFinal)
envioFinal.innerText = valoresFinais.envio



let taxa = document.getElementById("taxa")
taxa.textContent = valoresFinais.taxa

console.log(taxa)

let somaTotal = 0


// Cartão de crédito x1 a x12
for (let i = 1; i <= 12; i++) {
    let parcela = document.getElementById(`${i}x`);
    if (parcela) {
        if (!isNaN(subTotal) && subTotal > 0) {
            let valorParcela = (subTotal / i).toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2});
            parcela.textContent = `${i}x de R$ ${valorParcela}`;
            console.log(parcela);
        } else {
            // Lidar com caso em que subTotal não é um número válido
            console.error("Erro: Subtotal não é válido para cálculo de parcelas. Detalhes:", subTotal);
        }
    }
}

// Atribuir o mesmo valor de precoTotal1 ao elemento com ID "1x"
// Atribuir o mesmo valor de precoTotal1 ao elemento com ID "1x"
let x1 = document.getElementById("1x");
if (x1) {
    x1.textContent = `1x de R$  ${subTotal.toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    console.log(x1);
}

let opcaoDePagamentoPix = document.getElementById("pix")
let opcaoDePagamentocartao = document.getElementById("cartao")
let tabelaCartao = document.getElementById("tabelaCartao")
let cartoes = document.getElementById("cartoes")
opcaoDePagamentoPix.addEventListener('change', ()=> {
    if (opcaoDePagamentoPix.checked){
        console.log("opcaoDePagamentoPix")
        tabelaCartao.style.display = "none"
        cartoes.style.display = "none"
    
    }

})
opcaoDePagamentocartao.addEventListener('change', ()=> {
    if (opcaoDePagamentocartao.checked){
        console.log("opcaoDePagamentocartao")
    tabelaCartao.style.display = "table"
    cartoes.style.display = "block"}

})



