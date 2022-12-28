import { showSidebar } from './interactionsPage.js'
import handleSkills from './skills.js' 
import handleProjects from './projects.js'

$('.hamburguer_btn').click(showSidebar);

handleSkills()
handleProjects()