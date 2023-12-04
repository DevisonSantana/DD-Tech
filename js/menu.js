let divHamburguer = document.getElementById("divHamburguer")
var parte22 = document.getElementById('parte22')

divHamburguer.addEventListener('click', ()=>{

    console.log(parte22.style.display)
    if(parte22.style.display === '' || parte22.style.display === 'none'){
        parte22.style.display = 'flex' 
        parte22.style.height = 'fit-content'
        parte22.style.width = 'fit-content'
    }
    else if(parte22.style.display == 'flex'){
        parte22.style.display = 'none'
    }
    
})