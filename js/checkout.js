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
    const precoItemFormatado = (e.PrecoItem).
    
    
    
    toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    // Convertendo e.PrecoTotalItem para número e formatando com 2 casas decimais
    const precoTotalItemFormatado = parseFloat(e.PrecoTotalItem).toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    tabelaProduto.innerHTML +=
        `<tr>
        <td><img src="${e.Imagem}" alt="${e.Nome}" width= 114px></td>
        <td>${e.Nome}</td>
        <td>R$${precoItemFormatado}</td>
        <td>${e.Qtdade}</td>
        <td>R$${precoTotalItemFormatado}</td>
    </tr>`;
});




let subtotal1 = document.getElementById("subtotal1");
subtotal1.textContent = `Subtotal: R$ ${subTotal.toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

let precoTotal1 = document.getElementById("precoTotal");

let envioNumero = valoresFinais.envio ? parseFloat(valoresFinais.envio.slice(3).replace(',', '.')) || 0 : 0;
let taxaNumero = valoresFinais.taxa ? parseFloat(valoresFinais.taxa.slice(3).replace(',', '.')) || 0 : 0;

let total = subTotal + envioNumero + taxaNumero;

precoTotal1.textContent = `Preço Total: R$ ${total.toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

let envioFinal = document.getElementById("envio");
envioFinal.innerText = valoresFinais.envio;

let taxa = document.getElementById("taxa");
taxa.textContent = valoresFinais.taxa;

console.log(taxa);

let somaTotal = 0;



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
let x1 = document.getElementById("1x");
if (x1) {
    x1.textContent = `1x de R$  ${subTotal.toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    console.log(x1);
}

let opcaoDePagamentoPix = document.getElementById("pix")
let opcaoDePagamentocartao = document.getElementById("cartao")
let tabelaCartao = document.getElementById("tabelaCartao")
let cartoes = document.getElementById("cartoes")
let pagamentoFinal = ""

opcaoDePagamentoPix.addEventListener('change', ()=> {
     pagamentoFinal = ""
    if (opcaoDePagamentoPix.checked){
        console.log("opcaoDePagamentoPix")
        tabelaCartao.style.display = "none"
        cartoes.style.display = "none"
        gerarCodigoPix();

    
    }

})


function gerarCodigoPix() {
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var codigoAleatorio = '';

    for (var i = 0; i < 64; i++) {
      var indice = Math.floor(Math.random() * caracteres.length);
      codigoAleatorio += caracteres.charAt(indice);
    }
    console.log(codigoAleatorio)
    pagamentoFinal = `Pagamento Pix Codigo: ${codigoAleatorio}`
  }
 let parcelas = document.querySelectorAll("input[name='credito']")
let auxiliar;
 parcelas.forEach((element) =>{
    element.addEventListener('change', ()=>{
        let parcela = document.getElementById(`${element.value}`);
        console.log(parcela.textContent)
        auxiliar = parcela.textContent
 })})
 let cartaoEscolhido = document.querySelectorAll("input[name='cartaoEscolhido']")
 cartaoEscolhido.forEach((element)=>{
    element.addEventListener('change', function(){
        console.log(element.value)
        pagamentoFinal = `Pagamento no cartão ${element.value}, ${auxiliar}`
        
 })})
opcaoDePagamentocartao.addEventListener('change', ()=> {
    pagamentoFinal = ""
    if (opcaoDePagamentocartao.checked){
        console.log("opcaoDePagamentocartao")
    tabelaCartao.style.display = "table"
    cartoes.style.display = "block"}

})
let botaoFinalizar = document.getElementById("botao1")
let erroFinal = document.getElementById("erroFinal")
botaoFinalizar.addEventListener('click', function(){
    if (pagamentoFinal != ""){
        abrirModal("Sucesso", `<br> ${pagamentoFinal}`, "Fechar"  )
        MudarDisplayModal()
        let modalFinal = document.getElementById("avaliarModal")
        setTimeout(() => {
            modalFinal.style.transform = "translateY(0px)"
            
        }, 10);

    }else{
        erroFinal.style.display="block"        
    }
})



//Modal
const modalFinal = document.getElementById("ModalGeral");
var currentListAtributs = 1
var arrayListAtributs = [
    "none",
    "flex"
]

modalFinal.addEventListener("click", (e) => {
    
    if (e.target.nodeName == 'DIV' ||  e.target.nodeName == 'H2' || e.target.nodeName == "P" )
    {console.log("Teste")}  else if (e.target.nodeName == 'BUTTON') { MudarDisplayModal()
    //modalFinal.style.display = "none"

} 
    
    
})

function MudarDisplayModal() {
    
    if (currentListAtributs == arrayListAtributs.length) {
        currentListAtributs = 0
    }
    
    modalFinal.style.display = arrayListAtributs[currentListAtributs]
    currentListAtributs++
    console.log(modalFinal.style.display);

}

function abrirModal(titulo, mensagem, botaoConfirmar) {
  modalFinal.innerHTML = `
  <div id="avaliarModal">
  <div class="fecharModalSup"></div>
  <h2>${titulo}</h2>
  <p>${mensagem}</p>
  <div class="btnModal">
  <a href="index.html"><button type="button"> ${botaoConfirmar}</button></a>
  </div>
  </div>`
}



