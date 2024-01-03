import './CardProjeto.scss'

import { IProjeto } from '../../interfaces'

import { useState } from 'react'

import listaDeTecnologias from '../../data/tecnologias'

const imagemNaoCarregada = './img/icons/icon-not-found.svg'

export default function CardProjeto( props: IProjeto ) {
    const { nome, descricao, tecnologias, linkDaImagem, linkDoDeploy, linkDoRepo } = props

    const [ caminhoDaImagem, setCaminhoDaImagem ] = useState(linkDaImagem)

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

        <div className="btns">
            <a rel='noopener' href={linkDoDeploy} target="_blank">
                <p>Deploy</p>
                <span className='background'></span>
            </a>
            <a rel='noopener' href={linkDoRepo} target="_blank">
                <p>Código</p>
                <span className='background'></span>
            </a>
        </div>

    </div>
}