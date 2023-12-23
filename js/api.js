// Recuperar o arquivo Json com os produtos
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/DevisonSantana/DD-Tech/main/data/produtos.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}


// Inserção dinamicamente dos banners
var banner_img = document.getElementById('banner_img')

function carregarBanner(dadosBanner){
    dadosBanner.map(res =>{
        let img = document.createElement("img")
        img.setAttribute("src", `${res.imagem}`)
        img.setAttribute("class", "banner_img")
        img.setAttribute("alt", "banner")
        banner_img.appendChild(img)
    })
}


// Inserção dinamicamente dos novos produtos(que no momento são os tablets)
let products_img = document.getElementById('products_img')
let containerPeronalize = document.getElementById('containerPeronalize')
let containerNote = document.getElementById('containerNote')
let containerDesktop = document.getElementById('containerDesktop')
let containerMonitores = document.getElementById('containerMonitores')

function carregarProdutos(dadosProdutos){

// Carregar secao de novos
dadosProdutos.map(res =>{
    if(res.categoria.toLowerCase() === 'tablet'){
        for(cont = 1; cont <= 7; cont++){
        if(res.avaliacao == 4){
                var avaliacao = "img//estrelas4.png"
            }
            let picture = `
            <picture class="containerNovos">
                        <img src="${res.imagem[0]}" alt="novo produto">
                        <figcaption>
                            <div class="avaliacao">
                                <img src="${avaliacao}" alt="${res.avaliacao} estrelas">
                                <span>Reviews (${res.avaliacao})</span>
                            </div>
                            <p class="descricao">
                                ${res.descricao}
                            </p>
                            <em class="precoAntigo">R$ ${res.preco}</em>
                            <h6 class="precoAtual">R$ ${res.precoAtual}</h6>
                        </figcaption>
                    </picture>
            `
            products_img.innerHTML += picture
        }
    }
// Inserção dinamicamente dos produtos por categoria

if(res.categoria.toLowerCase() === 'personalize'){
    if(res.avaliacao == 4){
            var avaliacao = "img//estrelas4.png"
        }
        let picture = `
        <picture class="containerNovos" id=${cont}>
                    <img src="${res.imagem[0]}" alt="novo produto">
                    <figcaption>
                        <div class="avaliacao">
                            <img src="${avaliacao}" alt="${res.avaliacao} estrelas">
                            <span>Reviews (${res.avaliacao})</span>
                        </div>
                        <p class="descricao">
                            ${res.descricao}
                        </p>
                        <em class="precoAntigo">R$ ${res.preco}</em>
                        <h6 class="precoAtual">R$ ${res.precoAtual}</h6>
                    </figcaption>
                </picture>
        `
        containerPeronalize.innerHTML += picture
    }

    if(res.categoria.toLowerCase() === 'notebook'){
        if(res.avaliacao == 4){
                var avaliacao = "img//estrelas4.png"
            }
            let picture = `
            <picture class="containerNovos" id=${cont}>
                        <img src="${res.imagem[0]}" alt="novo produto">
                        <figcaption>
                            <div class="avaliacao">
                                <img src="${avaliacao}" alt="${res.avaliacao} estrelas">
                                <span>Reviews (${res.avaliacao})</span>
                            </div>
                            <p class="descricao">
                                ${res.descricao}
                            </p>
                            <em class="precoAntigo">R$ ${res.preco}</em>
                            <h6 class="precoAtual">R$ ${res.precoAtual}</h6>
                        </figcaption>
                    </picture>
            `
            containerNote.innerHTML += picture
        }

        if(res.categoria.toLowerCase() === 'desktops'){
            if(res.avaliacao == 4){
                    var avaliacao = "img//estrelas4.png"
                }
                let picture = `
                <picture class="containerNovos" id=${cont}>
                            <img src="${res.imagem[0]}" alt="novo produto">
                            <figcaption>
                                <div class="avaliacao">
                                    <img src="${avaliacao}" alt="${res.avaliacao} estrelas">
                                    <span>Reviews (${res.avaliacao})</span>
                                </div>
                                <p class="descricao">
                                    ${res.descricao}
                                </p>
                                <em class="precoAntigo">R$ ${res.preco}</em>
                                <h6 class="precoAtual">R$ ${res.precoAtual}</h6>
                            </figcaption>
                        </picture>
                `
                containerDesktop.innerHTML += picture
            }

            if(res.categoria.toLowerCase() === 'monitores'){
                if(res.avaliacao == 4){
                        var avaliacao = "img//estrelas4.png"
                    }
                    let picture = `
                    <picture class="containerNovos" id=${cont}>
                                <img src="${res.imagem[0]}" alt="novo produto">
                                <figcaption>
                                    <div class="avaliacao">
                                        <img src="${avaliacao}" alt="${res.avaliacao} estrelas">
                                        <span>Reviews (${res.avaliacao})</span>
                                    </div>
                                    <p class="descricao">
                                        ${res.descricao}
                                    </p>
                                    <em class="precoAntigo">R$ ${res.preco}</em>
                                    <h6 class="precoAtual">R$ ${res.precoAtual}</h6>
                                </figcaption>
                            </picture>
                    `
                    containerMonitores.innerHTML += picture
                }

    
})

}


// Inserção dinamicamente das marcas
let marcaZip = document.getElementById("marcaZip")
let marcas = document.getElementById("marcas")

function CarregarMarcas(dadosMarcas){
    dadosMarcas.map(res =>{
        if(res.nome.toLowerCase() ===  "zip"){
            let img = document.createElement("img")
            img.setAttribute("src", `${res.imagem}`)
            img.setAttribute("alt", "marca zip")
            marcaZip.appendChild(img)
        }
        else{
            let img = document.createElement("img")
            img.setAttribute("src", `${res.imagem}`)
            img.setAttribute("alt", "marca zip")
            marcas.appendChild(img)
        }
    })

}

// Inserção dinamicamente dos comentarios

function CarregarComentarios(dadosComentaros){

}

// Chama a função para buscar os dados da api e pasar por parametro para as demais funcoes
(async () => {
    const profileData = await fetchProfileData()
    
    carregarBanner(profileData.banner)
    
    var produto = new Produto()
    produto = profileData.produtos
    carregarProdutos(produto)

    CarregarMarcas(profileData.marcas)

    CarregarComentarios(profileData.comentarios)
})()
