'use client'

export const ScrollLink = ( props: any ) => {
    const { to, children } = props
    
    const MARGIN_DO_SCROLL = 64

    const clicou = () => {
        const elemento = document.getElementById(to)

        if( !elemento ) return

        const scrollAlvo = elemento.offsetTop - MARGIN_DO_SCROLL

        window.scrollTo({ top: scrollAlvo, behavior: 'smooth' })
    }

    return (
        <a onClick={ clicou }>{ children }</a>
    )
}