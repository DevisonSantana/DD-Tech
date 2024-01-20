sessionStorage.removeItem("nomeProduto") //removendo sessionStorage e houver
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
    let contagem = 1
// Carregar secao de novos
dadosProdutos.map(res =>{
    if(res.categoria.toLowerCase() == "novos"){
        if(res.avaliacao == 4){
                var avaliacao = "img//estrelas4.png"
            }
            let picture = `
            <picture class="containerNovos novosProdutos" id="${res.nome}" onclick="AcessarProdutoPage(id)">
                        <img src="${res.imagem[0]}" alt="novo produto" >
                        <figcaption>
                            <div class="avaliacao">
                                <img src="${avaliacao}" alt="${res.avaliacao} estrelas">
                                <span>Reviews (${res.avaliacao})</span>
                            </div>
                            <p class="descricao">
                                ${(res.descricao).substr(0,90)}...
                            </p>
                            <em class="precoAntigo">R$ ${res.preco}</em>
                            <h6 class="precoAtual">R$ ${res.precoAtual}</h6>
                        </figcaption>
                    </picture>
            `
            products_img.innerHTML += picture
    }
// Inserção dinamicamente dos produtos por categoria

if(res.categoria.toLowerCase() === 'personalize'){
    if(res.avaliacao == 4){
            var avaliacao = "img//estrelas4.png"
        }
        let picture = `
        <picture class="containerNovos"  id="${res.nome}" onclick="AcessarProdutoPage(id)">
                    <img src="${res.imagem[0]}" alt="novo produto">
                    <figcaption>
                        <div class="avaliacao">
                            <img src="${avaliacao}" alt="${res.avaliacao} estrelas">
                            <span>Reviews (${res.avaliacao})</span>
                        </div>
                        <p class="descricao">
                            ${res.descricao}
                        </p>
                        <em class="precoAntigo"> ${res.preco}.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})</em>
                        <h6 class="precoAtual"> ${res.precoAtual}.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})</h6>
                    </figcaption>
                </picture>
        `
        containerPeronalize.innerHTML += picture


    }

    if(res.categoria.toLowerCase() === 'notebook'){
        
        if(res.avaliacao == 4 || res.avaliacao == 5){
                var avaliacao = "img//estrelas4.png"
            }
            

            let picture =
             `
            <picture class="containerNovos" id="${res.nome}" onclick="AcessarProdutoPage(id)">
                        <img src="${res.imagem[0]}" alt="novo produto">
                        <figcaption>
                            <div class="avaliacao">
                                <img src="${avaliacao}" alt="${res.avaliacao} estrelas">
                                <span>Reviews (${res.avaliacao})</span>
                            </div>
                            <p class="descricao">
                                ${res.descricao.substr(0, 80)}...
                            </p>
                            <em class="precoAntigo">R$ ${res.preco}</em>
                            <h6 class="precoAtual">R$ ${res.precoAtual}</h6>
                        </figcaption>
                    </picture>
            `;
            
            if(contagem <= 5){
                containerNote.innerHTML += picture
                contagem++
            }
        }

        if(res.categoria.toLowerCase() === 'desktops'){
            if(res.avaliacao == 4){
                    var avaliacao = "img//estrelas4.png"
                }
                let picture = `
                <picture class="containerNovos" id="${res.nome}" onclick="AcessarProdutoPage(id)">
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
                    <picture class="containerNovos" id="${res.nome}" onclick="AcessarProdutoPage(id)">
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

// funcao para ir para a pagina de produtos passando o produto clicado

function AcessarProdutoPage(produtoEspecifico){
console.log(produtoEspecifico)
sessionStorage.setItem("nomeProduto", produtoEspecifico)
window.location.href = `produto.html`
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
let citacao_div = document.querySelector('#citacao_p')
function CarregarComentarios(dadosComentaros){
   for(let cont = 0; cont < dadosComentaros.length; cont++){
    citacao_div.innerHTML += `
    <div class="citacao_div">
    <p>
        ${dadosComentaros[cont].comentario}
    </p>
    <p class="name_citacao">
        ${dadosComentaros[cont].autor}
    </p>
    `
   }
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
