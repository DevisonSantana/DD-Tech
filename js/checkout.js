let carrinhoItem = sessionStorage.getItem('carrinhoFinal');
carrinhoItem = JSON.parse(carrinhoItem);
console.log(carrinhoItem);

let valoresFinais = carrinhoItem.Valoresfinais || {};
let subTotalString = valoresFinais.subTotal || '0';
let subTotal = parseFloat(subTotalString.replace(/[^\d,.-]/g, '').replace('.', '').replace(',', '.')) || 0;
carrinhoItem = carrinhoItem.Produtos;
console.log(subTotal);

const tabelaProduto = document.getElementById("table-body");

carrinhoItem.map((e) => {
    console.log(e.Imagem);
    tabelaProduto.innerHTML += 
    `<tr>
        <td>
            <img src="${e.Imagem}" alt="${e.Nome}" width= 114px>
        </td>
        <td>${e.Nome}</td>
        <td>R$ ${e.PrecoItem}</td>
        <td>${e.Qtdade}</td>
        <td>${(e.PrecoTotalItem).toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
    </tr>`;
});

let subtotal1 = document.getElementById("subtotal1");
subtotal1.textContent = `Subtotal: R$ ${subTotal.toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

console.log(subtotal1);

let precoTotal1 = document.getElementById("precoTotal");
precoTotal1.textContent = `Preço Total: R$ ${subTotal.toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

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
    x1.textContent = `1x de R$${subTotal.toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    console.log(x1);
}

