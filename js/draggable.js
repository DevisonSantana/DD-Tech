let nav = document.getElementById('nav');
let apaImg = document.getElementById('imgRigth');
let cont = 1

function moverMenuLateral(){
    if (cont === 0){
        cont++
        nav.style.transform = 'translateX(-50px)';
        console.log(cont)
        apaImg.style.display = 'flex'
    }
    else if(cont == 1){
        nav.style.transform = 'translateX(550px)';
        cont = 0
        console.log(cont)
        apaImg.style.display = 'none'
    }
}