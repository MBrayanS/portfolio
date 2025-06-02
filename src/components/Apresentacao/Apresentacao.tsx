import './Apresentacao.scss'

import { useMediaQuery } from 'react-responsive'

import RedesSociais from '../RedesSociais/RedesSociais'

export default function Apresentacao() {
    const telaMenorQue600 = useMediaQuery({ maxWidth: 600 })

    const renderizarNome = () => ( telaMenorQue600 ? 'MBrayan' : 'Micael Brayan' ) 
    const renderizarSubtitulo = () => ( telaMenorQue600 ? 'Dev Full Stack' : 'Desenvolvedor Full Stack' )

    return <section id="apresentacao" className='apresentacao'>

        <div className="conteudo">
            <p>Olá, eu sou</p>
            <h1>{ renderizarNome() }</h1>
            <p>um <span>{ renderizarSubtitulo() }</span></p>
        </div>

        <RedesSociais/>
        
    </section>
}