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

const listaDeProjetos = document.querySelectorAll('.projetos .card')

listaDeProjetos.forEach( projetoDOM => {
    const resumoDOM = projetoDOM.querySelector('.resumo')
    const btnMostrarMaisDOM = projetoDOM.querySelector('.mostrar-mais button')

    btnMostrarMaisDOM.addEventListener('click', () => {
        mostrarOcultarResumo(resumoDOM)
        atualizarbtnMostrarMais(btnMostrarMaisDOM, resumoDOM)
    }) 
})

function mostrarOcultarResumo( resumoDOM ) { resumoDOM.classList.toggle('resumo--mostrar-tudo') }

function atualizarbtnMostrarMais( btnMostrarMaisDOM, resumoDOM ) {
    const oTextoEstaVisivel = resumoDOM.classList.value.includes('resumo--mostrar-tudo')

    btnMostrarMaisDOM.innerHTML = oTextoEstaVisivel ? 'Mostrar menos' : 'Mostrar mais'
}