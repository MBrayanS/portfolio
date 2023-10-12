const menuDOM = document.querySelector('#menu')

menuDOM.addEventListener('click', esconderMostrarMenu)

function esconderMostrarMenu() { menuDOM.classList.toggle('menu--invisivel') }