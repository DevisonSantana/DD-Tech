var banner_img = document.getElementById("banner_img");
img = document.getElementsByClassName("banner_img");
var products_img = document.getElementById("products_img");
var x = banner_img.clientWidth
var cont = 0
setInterval(rolagemAutomatico, 3000)

function rolagemAutomatico() {
    banner_img.scrollLeft += x
    cont++
    if (cont === 3) {
        banner_img.scrollLeft += -(3 * x)
        cont = 0
    }
}

function LeftBanner() {

    banner_img.scrollLeft += -x

}

function RightBanner() {

    banner_img.scrollLeft += x

}

function LeftNovos() {

}

function RightNovos() {

}

