var banner_img = document.getElementById("banner_img");
img = document.getElementsByClassName("banner_img");
var products_img = document.getElementById("products_img");
var citacao_p = document.getElementById("citacao_p");
var Comentario1 = document.getElementById("Comentario1");
var Comentario2 = document.getElementById("Comentario2");
var Comentario3 = document.getElementById("Comentario3");

//pegar o tamanho do banner
var p = citacao_p.clientWidth
var x = banner_img.clientWidth

var cont_p = 1
var cont = 0

// chamar a rolagem automatica do banner
setInterval(rolagemAutomatico, 3000)

// chamar a rolagem automatica dos comentarios

setInterval(RolagemComentarioAutomatico, 7000)


function rolagemAutomatico() {
    banner_img.scrollLeft += x
    cont++
    if (cont === 3) {
        banner_img.scrollLeft += -(3 * x)
        cont = 0
    }
}

// rolar banner
function LeftBanner() {

    banner_img.scrollLeft += -x

}

function RightBanner() {

    banner_img.scrollLeft += x

}

//rolar secao de produtos

function LeftNovos() {
    products_img.scrollLeft += -200
}

function RightNovos() {
    products_img.scrollLeft += 200
}

function RolagemComentarioAutomatico() {
    Comentario(cont_p + 1)
    if (cont_p == 3) {
        setTimeout(VoltarComentario1, 7000)
        cont_p = 1
    }
}


//rolagem do comentarios
function Comentario(num) {
    console.log(p)

    if (num == 1) {
        VoltarComentario1()
    }
    else if (num == 2) {
        if (cont_p == 1) {
            citacao_p.scrollLeft += (p)
        }
        else if (cont_p == 3) {
            citacao_p.scrollLeft -= (p)
        }
        Comentario2.style.backgroundColor = "blue"
        Comentario1.style.backgroundColor = "#978d8d"
        Comentario3.style.backgroundColor = "#978d8d"
        console.log("ttt" + num)
        cont_p = 2
    }
    else if (num == 3) {
        citacao_p.scrollLeft += (3 * p)
        console.log("ttt" + num)
        Comentario3.style.backgroundColor = "blue"
        Comentario1.style.backgroundColor = "#978d8d"
        Comentario2.style.backgroundColor = "#978d8d"
        cont_p = 3
    }


}
function VoltarComentario1() {
    citacao_p.scrollLeft += -(3 * p)
    cont_p = 1
    Comentario1.style.backgroundColor = "blue"
    Comentario2.style.backgroundColor = "#978d8d"
    Comentario3.style.backgroundColor = "#978d8d"
}

