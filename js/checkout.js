//Capturando os elementos DOM (Variáveis)
let valorQuantidade = document.getElementById("quantidade"); // 1
let valorSoma = document.getElementById("soma"); // Elemento que exibe o subtotal
let btnAdicionarProduto01 = document.getElementById("adicionar"); // Botão adicionar +1
let btnSubtrairProduto01 = document.getElementById("subtrair");
let qtdProduto01 = document.getElementById("quantidade");

let valorProduto01 = 10.000;

// Objeto-01
let subtotalInfo = {
    quantidade: 1,
    valor: 8.000,
};

// Definir a manipulação de elementos (funções)
function atualizarSubtotal() {
    valorQuantidade.innerText = subtotalInfo.quantidade + " item";
    valorSoma.innerText = subtotalInfo.valor.toFixed(3); // Formatando para exibir duas casas decimais
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
    if (subtotalInfo.quantidade > 0) {
        qtdProduto01.value = Number(qtdProduto01.value) - 1; // Subtrair 1 apenas se a quantidade for maior que 0

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

// Captura de elementos do DOM
let valorProduto02 = document.getElementById("tabela1"); // Valor Subtotal
let btnAdicionarProduto02 = document.getElementById("adicionar2"); // button +
let btnSubtrairProduto02 = document.getElementById("subtrair2");
let quantidade02 = document.getElementById("quantidade02");

console.log(btnAdicionarProduto02)



// Definir a manipulação dos elementos capturados (funções)
function atualizarSubtotal02() {
    quantidade02.innerText = subtotalInfo.quantidade + " item";
    valorProduto02.innerText = subtotalInfo.valor.toFixed(3); // Formatando para exibir três casas decimais
}

function adicionarUmm() {
    //Adicionando + 1 à quantidade de produto
    quantidade02.value = Number(quantidade02.value) + 1;

    subtotalInfo02.valor = subtotalInfo02.valor + 55.00;
    subtotalInfo02.quantidade = subtotalInfo02.quantidade + 1;

    //Adicionar + 1 à Subtotal
   
    // Atualizar o DOM

    atualizarSubtotal02();
}

function subtrairUmm() {
    quantidade02.value = Number(quantidade02.value) - 1;

    subtotalInfo02.valor = subtotalInfo02.valor + 55.00;
    subtotalInfo02.quantidade = subtotalInfo02.quantidade - 1;

    // Atualizar o DOM
    atualizarSubtotal02();
}

// Definir quando devem ser manipulados os elementos (eventos)
btnAdicionarProduto02.addEventListener("click", adicionarUmm);
btnSubtrairProduto02.addEventListener("click", subtrairUmm);


