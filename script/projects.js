import dataProjects from './data/projects.js'

function handleProjects(){
    dataProjects.forEach(projects => projectElementConstructor(projects))
}

function projectElementConstructor({ img, info }){
    let divCard = $('<div class="projects_card">').append(
        createCardBg(img),
        createCardInfo(info)
    )
    
    $('.projects_container').append(divCard)
}

function createCardBg(img){
    return $('<div class="card_bg-img">').append($(`<img src='${img}'>`))
}

function createCardInfo({ hrefs, title }){
    let h3 = $(`<h3>${title}</h3>`)

    let anchors = $('<div>').append(
        $(`<a class='card_anchor' href='${hrefs[0]}'>Código fonte</a>`),
        $(`<a class='card_anchor' href='${hrefs[1]}'>Visitar site</a>`)
    )
    
    return $('<div class="card_info">').append(h3, anchors)
}

export default handleProjects;