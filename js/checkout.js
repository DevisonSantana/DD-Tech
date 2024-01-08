
//Primeiro produto
//Capturando os elementos DOM (Variáveis)
let valorQuantidade = document.getElementById("quantidade"); // 1
let valorSoma = document.getElementById("soma"); // Elemento que exibe o subtotal
let btnAdicionarProduto01 = document.getElementById("adicionar"); // Botão adicionar +1
let btnSubtrairProduto01 = document.getElementById("subtrair");
let qtdProduto01 = document.getElementById("quantidade");

let valorProduto01 = 5.000

// Objeto-01
let subtotalInfo = {
    quantidade: 1,
    valor: 5.000,
};

// Definir a manipulação de elementos (funções)
function atualizarSubtotal() {
    qtdProduto01.innerText = subtotalInfo.quantidade;
    valorSoma.innerText = (subtotalInfo.valor).toLocaleString('pt-br', {style:'currency', currency:'BRL'}); // Formatando para exibir duas casas decimais
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
    // Subtrair 1 à quantidade do produto
    if (qtdProduto01.value > 0) {
        qtdProduto01.value = Number(qtdProduto01.value) - 1; // Subtrair 1 apenas se a quantidade for maior que 0
        // Subtrair o valor do produto do subtotal
        subtotalInfo.valor = subtotalInfo.valor - valorProduto01;
        subtotalInfo.quantidade = subtotalInfo.quantidade - 1;
        // Atualizar o DOM
        atualizarSubtotal();
    }
}




//

// Definir quando devem ser manipulados os elementos (eventos)
btnAdicionarProduto01.addEventListener("click", adicionarUm);
btnSubtrairProduto01.addEventListener("click", subtrairUm);

// Segundo produto
// Captura de elementos do DOM
let valorProduto02 = document.getElementById("teste"); // Valor Subtotal
let btnAdicionarProduto02 = document.getElementById("adicionar2"); // button +
let btnSubtrairProduto02 = document.getElementById("subtrair2");
let quantidade02 = document.getElementById("quantidade02");

console.log(valorProduto02)

// Objeto-02
let subtotalInfo02 =  {
    quantidade: 1,
    valor: 55.00,
};

subtotalInfo02.va

let valorProduto03 = 0
valorProduto02.value = valorProduto03;

console.log(valorProduto03)

valorProduto02.innerText = subtotalInfo02.valor

console.log(subtotalInfo02.valor)

// Definir a manipulação dos elementos capturados (funções)
function atualizarSubtotal02() {
    quantidade02.innerText = subtotalInfo02.quantidade;
    valorProduto02.innerText = (subtotalInfo02.valor).toLocaleString('pt-br', {style:'currency', currency:'BRL'});
}

function adicionarUmm() {
    quantidade02.value = Number(quantidade02.value) + 1;
    subtotalInfo02.valor = subtotalInfo02.valor + 55.00;
    subtotalInfo02.quantidade = subtotalInfo02.quantidade + 1;
    atualizarSubtotal02();
}

function subtrairUmm() {
    if (subtotalInfo02.quantidade > 0) {
        quantidade02.value = Number(quantidade02.value) - 1;
        subtotalInfo02.valor = subtotalInfo02.valor - 55.00;
        subtotalInfo02.quantidade = subtotalInfo02.quantidade - 1;
        atualizarSubtotal02();
    }
}

// Definir quando devem ser manipulados os elementos (eventos)
btnAdicionarProduto02.addEventListener("click", adicionarUmm);
btnSubtrairProduto02.addEventListener("click", subtrairUmm);

