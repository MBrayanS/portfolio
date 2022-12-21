const skills = [
    {
        iconClass: 'fa-brands fa-html5',
        name: 'HTML5',
        pContent: '- Estrutura <br>- Semântica <br>'
    },
    {
        iconClass: 'fa-brands fa-css3',
        name: 'CSS3',
        pContent: '- Responsividade <br> - Animações <br>'
    },
    {
        iconClass: 'fa-brands fa-square-js',
        name: 'JavaScript',
        pContent: "- Clean code <br> - POO <br> - API's <br> - Design patters básicos"
    },
    {
        iconClass: 'fa-brands fa-square-js',
        name: 'Jquery',
        pContent: '- Manipulação'
    },
    {
        iconClass: 'fa-brands fa-sass',
        name: 'SASS',
        pContent: '- Organização <br> - Compacto <br> - Responsividade <br> - Animações <br>'
    },
    {
        iconClass: 'fa-brands fa-git',
        name: 'Git',
        pContent: '- Commits limpos <br> - Branches <br> - Mergers'
    },
    {
        iconClass: 'fa-brands fa-github',
        name: 'Github',
        pContent: '- Git remote'
    }
]

function handleSkills(){
    skills.forEach(skill => skillElementConstructor(skill))
}

function skillElementConstructor({ iconClass, name, pContent }){
    let div = $('<div>', {class: 'skills_item'})
    let icon = $('<i>', { class: iconClass })
    let h3 = $('<h3>',{ text: name })
    let pElement = $(`<p>${pContent}</p>`)

    div.append(icon)
    div.append(h3)
    div.append(pElement)
    console.log(h3)

    $('.skills_container').append(div);
}

export default handleSkills