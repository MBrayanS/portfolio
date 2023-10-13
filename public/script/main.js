const menuDOM = document.querySelector('#menu')
const htmlDOM = document.querySelector('html')

destravarMenu()

menuDOM.addEventListener('click', esconderMostrarMenu)
htmlDOM.addEventListener('click', esconderMenuSeClicarFora)

function esconderMostrarMenu() {
    menuDOM.classList.toggle('menu--invisivel')
    menuDOM.classList.remove('menu--travado')
}

function esconderMenuSeClicarFora({ target }) {
    const clicouForaDoMenu = !menuDOM.contains(target)
    
    if( clicouForaDoMenu ) menuDOM.classList.add('menu--invisivel')
}

function destravarMenu() {
    const larguraDaTelaMaiorQue800 = document.body.clientWidth > 800

    if( larguraDaTelaMaiorQue800 ) { 
        menuDOM.classList.remove('menu--travado')
        menuDOM.classList.remove('menu--invisivel')
    }
}