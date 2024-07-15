// Ativar Links do Menu

const links = document.querySelectorAll(".header-menu a")

function ativarLinks(link) {
    const url = location.href;
    const href = link.href;

    if (url.includes(href)) {
        link.classList.add('ativo')
    }

}

links.forEach(ativarLinks)

//Ativar Itens do Orçamento

const paramentros = new URLSearchParams(location.search)

function ativarProduto(paramentro) {
    const elemento = document.getElementById(paramentro)
    if(elemento) {
        elemento.checked = true
    }
}

paramentros.forEach(ativarProduto)