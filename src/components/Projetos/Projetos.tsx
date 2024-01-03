import './Projetos.scss'

import Titulo from '../Titulo/Titulo'
import CardProjeto from '../CardProjeto/CardProjeto'

import listaDeProjetos from '../../data/projetos'
import { IProjeto } from '../../interfaces'

export default function Projetos() {
    return <section id="projetos" className="projetos">
            
        <Titulo texto='Meus projetos' />

        <div className="conteudo">{

            listaDeProjetos.map( ( projeto: IProjeto, index: number ) => {
                const { nome, descricao, tecnologias, linkDaImagem, linkDoDeploy, linkDoRepo } = projeto

                return <CardProjeto 
                    key={index}
                    nome={nome}
                    descricao={descricao}
                    tecnologias={tecnologias}
                    linkDaImagem={linkDaImagem}
                    linkDoDeploy={linkDoDeploy}
                    linkDoRepo={linkDoRepo}
                />
            })
            
        }</div>

    </section>
}