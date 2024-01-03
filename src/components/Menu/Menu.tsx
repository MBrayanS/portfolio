import './Menu.scss'

import { useMediaQuery } from 'react-responsive'
import { useState } from 'react'

export default function Menu() {
    const [ menuClasse, setMenuClasse ] = useState('menu')

    const telaMenorQue600 = useMediaQuery({ maxWidth: 600 })
    
    const btnClick = () => menuClasse === 'menu' ? setMenuClasse('menu menu--aberto') : setMenuClasse('menu')
    const fecharMenu = () => { if ( menuClasse === 'menu menu--aberto' ) setMenuClasse('menu') }

    const definirClasseDoMenu = () => ( telaMenorQue600 ? ' menu--mobile' : '' )

    return <aside id="menu" className={ menuClasse + definirClasseDoMenu() }>

        <button title='btn-menu' className='btn-menu' type='button' onClick={btnClick}>
            <span className='linha1'></span>
            <span className='linha2'></span>
            <span className='linha3'></span>
        </button>

        <nav className='ancoras'>
            <a href="#projetos" onClick={fecharMenu}>Projetos</a>
            <a href="#habilidades" onClick={fecharMenu}>Habilidades</a>
            <a href="#sobre" onClick={fecharMenu}>Sobre</a>
        </nav>

    </aside>
}
