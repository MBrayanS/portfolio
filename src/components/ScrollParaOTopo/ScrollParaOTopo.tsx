import './ScrollParaOTopo.scss'

import { useState } from 'react'

export default function ScrollParaOTopo() {
    const [ btnVisivel, setBtnVisivel ] = useState(false)

    const mostrarBtn = () => {
        const scrollMaiorQueTela = window.pageYOffset > window.innerHeight

        if( scrollMaiorQueTela ) return setBtnVisivel(true)
        
        setBtnVisivel(false)
    }

    const renderizarBtn = () => {
        return <a href="#apresentacao" className="scroll-para-o-topo">
            <img src="img/seta.svg" alt="Scroll para o topo" />
        </a>
    }

    window.onscroll = mostrarBtn

    return btnVisivel && renderizarBtn()
}