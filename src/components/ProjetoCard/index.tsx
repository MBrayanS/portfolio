/* eslint-disable @next/next/no-img-element */
'use client'

import './styles.scss'


export interface IProjetoCardProps {
    imagemLink: string
    nome: string
    descricao: string
    tecnologias: string[]
    deployLink?: string
    repositorioLink?: string
}

export const ProjetoCard = ( props: IProjetoCardProps ) => {
    const { imagemLink, nome, descricao, tecnologias, deployLink, repositorioLink } = props

    const erroAoCarregarImagem = ( event: any ) => {
        event.target.src = '/images/not-found.svg'
    }

    return (
        <div className='projeto-card'>
            <div className='imagem'>
                <a href={ deployLink } target='_blank' rel='noopener'>
                    <img src={ imagemLink } alt='Imagem do projeto' onError={ erroAoCarregarImagem } />
                </a>
            </div>

            <h1>{ nome }</h1>
                    
            <p className='descricao'>{ descricao }</p>

            <div className='tecnologias'>{
                tecnologias.map( ( tecnologia, index ) =>
                    <div key={ index } className='tecnologia'> <p>{ tecnologia }</p> </div>
                )
            }</div>

            <div className='botoes'>
                <a href={ deployLink } target='_blank' rel='noopener'> Visitar </a>
                <a href={ repositorioLink } target='_blank' rel='noopener'> Código </a>
            </div>
        </div>
    )
}