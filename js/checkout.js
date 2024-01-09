//Primeiro produto
//Capturando os elementos DOM (Variáveis)
let valorQuantidade = document.getElementById("quantidade"); // 1
let valorSoma = document.getElementById("soma"); // Elemento que exibe o subtotal
let btnAdicionarProduto01 = document.getElementById("adicionar"); // Botão adicionar +1
let btnSubtrairProduto01 = document.getElementById("subtrair");
let qtdProduto01 = document.getElementById("quantidade");

let valorProduto01 = 8000.00;

// Objeto-01
let subtotalInfo = {
    quantidade: 1,
    valor: 8000.00,
};

// Captura do elemento DOM para o valorSubtotal_01
let valorSubtotal_01 = document.getElementById("valorSubtotal01");
console.log(valorSubtotal_01);

// Função para calcular o valorSubtotal_01
function calcularValorSubtotal01() {
    let valorSomaFloat = parseFloat(subtotalInfo.valor.toString().replace('R$', '').replace('.', '').replace(',', '.'));
    let valorProduto02Float = parseFloat(valorProduto02.innerText.replace('R$', '').replace('.', '').replace(',', '.'));
    let valorSubtotalFloat = valorSomaFloat + valorProduto02Float;
    valorSubtotal_01.innerText = valorSubtotalFloat.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

// Definir a manipulação dos elementos capturados (funções)
function atualizarSubtotal() {
    qtdProduto01.innerText = subtotalInfo.quantidade;
    valorSoma.innerText = (subtotalInfo.valor).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    calcularValorSubtotal01(); // Chamando a função para calcular o subtotal
}

function adicionarUm() {
    // Adicionar 1 à quantidade do produto
    qtdProduto01.value = Number(qtdProduto01.value) + 1; // Adicionar um

    // Adicionar o valor do produto ao subtotal
    subtotalInfo.valor = subtotalInfo.valor + valorProduto01;
    subtotalInfo.quantidade = subtotalInfo.quantidade + 1;

    // Atualizar o DOM
    atualizarSubtotal();
}

function subtrairUm() {
    // Verificar se a quantidade é maior que 1 antes de subtrair
    if (subtotalInfo.quantidade > 1) {
        // Subtrair 1 à quantidade do produto
        qtdProduto01.value = Number(qtdProduto01.value) - 1;
        // Subtrair o valor do produto do subtotal
        subtotalInfo.valor = subtotalInfo.valor - valorProduto01;
        subtotalInfo.quantidade = subtotalInfo.quantidade - 1;
        // Atualizar o DOM
        atualizarSubtotal();
    }
}

// Definir quando devem ser manipulados os elementos (eventos)
btnAdicionarProduto01.addEventListener("click", adicionarUm);
btnSubtrairProduto01.addEventListener("click", subtrairUm);

// Segundo produto
// Captura de elementos do DOM
let valorProduto02 = document.getElementById("valorFinal"); // Valor Subtotal
let btnAdicionarProduto02 = document.getElementById("adicionar2"); // button +
let btnSubtrairProduto02 = document.getElementById("subtrair2");
let quantidade02 = document.getElementById("quantidade02");

let valorProduto03 = 10000.00; // Corrigido o valor do produto para 10000.00
let valorProduto02Exibicao = 10000.00; // Corrigido o valor inicial do produto para 0.00
valorProduto02.innerText = valorProduto02Exibicao.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }); // Atualizado o valor inicial no DOM

// Objeto-02
let subtotalInfo02 = {
    quantidade: 1,
    valor: 0.00,
};

// Captura do elemento DOM para o valor final
let valorFinal = document.getElementById("valorFinal");

// Captura do elemento DOM para o valorSubtotal_01
valorSubtotal_01 = document.getElementById("valorSubtotal01");

// Definir a manipulação dos elementos capturados (funções)
function atualizarSubtotal02() {
    quantidade02.innerText = subtotalInfo02.quantidade;
    valorProduto02.innerText = (subtotalInfo02.valor).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    calcularValorSubtotal01(); // Chamando a função para calcular o subtotal
}

function adicionarUmm() {
    quantidade02.value = Number(quantidade02.value) + 1;
    subtotalInfo02.quantidade = Number(quantidade02.value);
    subtotalInfo02.valor = subtotalInfo02.quantidade * valorProduto03;
    atualizarSubtotal02();
}

function subtrairUmm() {
    if (subtotalInfo02.quantidade > 1) {
        quantidade02.value = Number(quantidade02.value) - 1;
        subtotalInfo02.quantidade = Number(quantidade02.value);
        subtotalInfo02.valor = subtotalInfo02.quantidade * valorProduto03;
        atualizarSubtotal02();
    }
}

// Definir quando devem ser manipulados os elementos (eventos)
btnAdicionarProduto02.addEventListener("click", adicionarUmm);
btnSubtrairProduto02.addEventListener("click", subtrairUmm);
