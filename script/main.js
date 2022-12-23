import handleSkills from './skills.js' 

$('.hamburguer_btn').click(function(){
    $(this).toggleClass('hamburguer_btn--rotate')
    $('.sidebar').toggleClass('sidebar--show')
});

handleSkills()