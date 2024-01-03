import './styles/global.scss'
import './styles/main.scss'

import Menu from './components/Menu/Menu'
import ScrollParaOTopo from './components/ScrollParaOTopo/ScrollParaOTopo'
import Apresentacao from './components/Apresentacao/Apresentacao'
import Projetos from './components/Projetos/Projetos'
import Habilidades from './components/Habilidades/Habilidades'
import Sobre from './components/Sobre/Sobre'
import Rodape from './components/Rodape/Rodape'

function App() {
    return <>
        <Menu />
        <ScrollParaOTopo />

        <main>
            <Apresentacao />
            <Projetos />
            <Habilidades />
            <Sobre />
        </main> 

        <Rodape />
    </>
}

export default App