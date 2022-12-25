import handleSkills from './skills.js' 
import handleProjects from './projects.js'

$('.hamburguer_btn').click(function(){
    $(this).toggleClass('hamburguer_btn--rotate')
    $('.sidebar').toggleClass('sidebar--show')
});

handleSkills()
handleProjects()