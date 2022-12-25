import dataSkills from './data/skills.js'

function handleSkills(){
    dataSkills.forEach(skill => skillElementConstructor(skill))
}

function skillElementConstructor({ iconClass, name, pContent }){
    let div = $('<div>', {class: 'skills_item'})
    let icon = $('<i>', { class: iconClass })
    let h3 = $('<h3>',{ text: name })
    let pElement = $(`<p>${pContent}</p>`)

    div.append(icon)
    div.append(h3)
    div.append(pElement)

    $('.skills_container').append(div);
}

export default handleSkills