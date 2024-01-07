//Capturando os elementos DOM(Variaveis)
let valorQuantidade = document.getElementById("quantidade") // 1
let valorSoma = document.getElementById("soma") //8.000,00
let btnAdicionarPruduto01 = document.getElementById("adicionar") //botao adicionar + 1
let btnSubtrairProduto01 = document.getElementById("subtrair")
let qtdProduto01 = document.getElementById("quantidade")

console.log("btnSubtrair")

console.log(valorSoma, valorQuantidade, btnAdicionarPruduto01)

//Objeto-01
let subtotalInfo = {
    quantidade:1,
    valor: 15.000,
};

//objeto-02
let subtotalInfo1 = {
    quantidade:1,
    valor: 15.000,
};


//Definir a manipular elementos(funções)

function atualizarSubtotal(){
    valorQuantidade.innerText = subtotalInfo + "item";
    valorSoma.innerText = subtotalInfo.valor;

    

}

atualizarSubtotal()

function adicionarUm(){
    qtdProduto01.value = Number(qtdProduto01.value) + 1 //Adicionar um  

    atualizarSubtotal()
}

function subtrairUm(){
    qtdProduto01.value = Number(qtdProduto01.value) - 1; // Subtrair 1 em vez de adicionar 1

    atualizarSubtotal

}



//Definir quando devem ser manipulados os elementos (eventos)
btnAdicionarPruduto01.addEventListener("click", adicionarUm)
btnSubtrairProduto01.addEventListener("click", subtrairUm)
