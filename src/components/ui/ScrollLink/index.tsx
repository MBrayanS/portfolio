'use client'

export const ScrollLink = ( props: any ) => {
    const { to, children } = props

    const clicou = ( e : any) => {
        e.preventDefault()

        const elemento = document.getElementById(to)

        if( elemento ) elemento.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <a onClick={ clicou }>{ children }</a>
    )
}