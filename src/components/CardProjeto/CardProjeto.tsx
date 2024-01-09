import './CardProjeto.scss'

import { IProjeto } from '../../interfaces'

import { useState } from 'react'

import listaDeTecnologias from '../../data/tecnologias'

const imagemNaoCarregada = './img/icons/icon-not-found.svg'

export default function CardProjeto( props: IProjeto ) {
    const { nome, descricao, tecnologias, linkDaImagem, linkDoDeploy, linkDoRepo } = props

    const [ caminhoDaImagem, setCaminhoDaImagem ] = useState(linkDaImagem)

    const soHaUmButton = linkDoDeploy && linkDoRepo ? false : true

    const renderizarBtn = ( link: string, texto: string ) => {
        return <a rel='noopener' href={link} target="_blank"> <p>{texto}</p> <span className='background'></span> </a>
    }

    const onError = () => setCaminhoDaImagem(imagemNaoCarregada)

    return <div className="card-projeto">

        <div className="img-projeto">
            <a rel='noopener' href={linkDoDeploy} target="_blank">
                <img src={caminhoDaImagem} alt={nome} onError={onError} />
            </a>
        </div>

        <h3>{nome}</h3>

        <p>{descricao}</p>

        <div className="tecnologias">{

            tecnologias.map( ( nome: string ) => {
                const { imagem } = listaDeTecnologias[nome]
                
                return <div className="card-tecnologia" key={nome} >
                    <img src={imagem} alt={nome}/>
                </div>

            })

        }</div>

        <div className={ 'btns' + ( soHaUmButton ? ' btns--um-btn' : '' ) }>
            { linkDoDeploy && renderizarBtn(linkDoDeploy, 'Deploy') }
            { linkDoRepo && renderizarBtn(linkDoRepo, 'Código') }
        </div>

    </div>
}