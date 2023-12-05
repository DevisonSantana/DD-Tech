let divHamburguer = document.getElementById("divHamburguer")
let parte22 = document.getElementById('parte22')
let lupa = document.getElementById('lupa')
let inputLupa = document.getElementById('divLupa')
let exitLupa = document.getElementById('exitLupa')


exitLupa
//Menu Hamburguer
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

//Lupa

lupa.addEventListener('click', ()=>{
    if(inputLupa.style.display === 'none' || inputLupa.style.display === ''){
        inputLupa.style.display = 'flex'
    }
    else if(inputLupa.style.display === 'flex'){
        inputLupa.style.display = 'none'
    }
})
     
exitLupa.addEventListener('click', ()=>{
    console.log('teste')
    inputLupa.style.display = 'none'  
})