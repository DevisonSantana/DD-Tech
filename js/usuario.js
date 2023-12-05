// mudar a secçao ao clicar no menu lateral

var menuLateral = [...document.getElementsByClassName("menuLateral")]

var section = [...document.getElementsByTagName("section")]

var indiceMenu;

let btnCart = document.querySelector('.btnCart')


//mostrar dados do cartao
btnCart.addEventListener('click', ()=>{
    let btndados = document.querySelector('.cartoesCadastrados .divColum')
    console.log(btndados)

    btndados.style.display = 'flex'
    btnCart.style.display = 'none'
})


//funcao para ocultar todos os sections

menuLateral.map((element) => {
    element.addEventListener("click", (event) => {
        indiceMenu = event.target.value
        ocultarSection()
        ativarDisplay(indiceMenu)
        

    })
})

function ocultarSection() {
    section.forEach(element => {
        
        let apaImg = document.getElementById('imgRigth');

        element.style.display = 'none'

        apaImg.style.display = 'flex'

    });
}

function ativarDisplay(indice) {
    section[indice].style.display = 'flex'
}



//Modal
const listAtributs = document.getElementById("atributs");
var buttonProducts = [...document.getElementsByClassName("button")]

var currentListAtributs = 1
var arrayListAtributs = [
    "none",
    "flex"
]
buttonProducts.map((e) => {
    e.addEventListener("click", (evt) => {
        var numAtribut = evt.target.value
        console.log(numAtribut)
        passarAtributs(numAtribut)
        MudarDisplayAtributs()
    })
});

function MudarDisplayAtributs() {
    if (currentListAtributs == arrayListAtributs.length) {
        currentListAtributs = 0
    }
    listAtributs.style.display = arrayListAtributs[currentListAtributs]
    currentListAtributs++

}

listAtributs.addEventListener("click", (e) => {

    if (e.target.nodeName == 'DIV' || e.target.nodeName == 'h1' || e.target.nodeName == "textarea" || e.target.nodeName == "IMG") console.log("clicou no filho")
    else MudarDisplayAtributs()

})

function passarAtributs(numAtributo) {
    var atributos = avaliar()
    listAtributs.innerHTML = atributos
    console.log(atributos)
}

function avaliar() {
    const div = `
   <div id="listAtributs" class="atributos" >
   <h2>Atributos</h2>
   <textarea name="comenarioAdd" id="comenarioAdd" cols="70" rows="4"></textarea>
   <img src="Images/estrelas4.png" alt="">
   <button type="button">Enviar</button>
    </div>  `

    return div
}




