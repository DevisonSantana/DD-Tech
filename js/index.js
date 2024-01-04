
//var products_img = document.getElementById("products_img");
var citacao_p = document.getElementById("citacao_p");
var Comentario1 = document.getElementById("Comentario1");
var Comentario2 = document.getElementById("Comentario2");
var Comentario3 = document.getElementById("Comentario3");
let picture = document.querySelectorAll('picture')
var btnComentar = document.getElementById("btnComentar");

btnComentar.addEventListener('click', () =>{
        window.location.href = "produto.html"
    })
//pegar o tamanho do banner
var cont_p = 1
var num = 0
var cont = 0

// chamar a rolagem automatica do banner
setInterval(rolagemAutomatico, 3000)

// chamar a rolagem automatica dos comentarios

setInterval(RolagemComentarioAutomatico, 5000)


function rolagemAutomatico() {
    let banner_img = document.getElementById("banner_img");
    let x = banner_img.clientWidth

    banner_img.scrollLeft += x
    cont++
    if (cont === 3) {
        banner_img.scrollLeft += -(3 * x)
        cont = 0
    }
}

// rolar banner
function LeftBanner() {
    var banner_img = document.getElementById("banner_img");
    let x = banner_img.clientWidth
    banner_img.scrollLeft += -x
}

function RightBanner() {
    var banner_img = document.getElementById("banner_img");
    let x = banner_img.clientWidth
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
    num++
    if (num > 3) {
        num = 1
    }
    Comentario(num)
}


//rolagem do comentarios
function Comentario(num) {
    var citacao_div = document.querySelectorAll(".citacao_div");

    if(num === 1) {
        citacao_div[0].style.display = 'block'
        citacao_div[1].style.display = 'none'
        citacao_div[2].style.display = 'none'
        Comentario1.style.backgroundColor = "blue"
        Comentario2.style.backgroundColor = "#978d8d"
        Comentario3.style.backgroundColor = "#978d8d"
    }
    else if (num === 2) {
            citacao_div[0].style.display = 'none'
            citacao_div[1].style.display = 'block'
            citacao_div[2].style.display = 'none'
            Comentario1.style.backgroundColor = "#978d8d"
            Comentario2.style.backgroundColor = "blue"
            Comentario3.style.backgroundColor = "#978d8d"
            
    }
        else if (num == 3) {
            citacao_div[0].style.display = 'none'
            citacao_div[1].style.display = 'none'
            citacao_div[2].style.display = 'block'
            Comentario1.style.backgroundColor = "#978d8d"
            Comentario2.style.backgroundColor = "#978d8d"
            Comentario3.style.backgroundColor = "blue"
        }
    }

function VoltarComentario1() {
    citacao_div[0].style.display = 'block'
    citacao_div[1].style.display = 'none'
    citacao_div[2].style.display = 'none'
    cont_p = 1
    Comentario1.style.backgroundColor = "blue"
    Comentario2.style.backgroundColor = "#978d8d"
    Comentario3.style.backgroundColor = "#978d8d"
}

