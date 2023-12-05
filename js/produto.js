let imgmMini = document.querySelectorAll('.imgmMini')


imgmMini.forEach(element => {
    element.addEventListener('click', (event)=>{
        let imgBig = document.getElementById('imgBig')
        imgBig.setAttribute('src', `${event.target.src}`)
    })
});