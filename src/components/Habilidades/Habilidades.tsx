import './Habilidades.scss'

import Titulo from '../Titulo/Titulo'

import tecnologias from '../../data/tecnologias'

const listaDeTecnologias = Object.keys(tecnologias)

export default function Habilidades() {
    return <section id="habilidades" className="habilidades"> 

        <Titulo texto='Minhas habilidades' />

        <div className="conteudo">{

            listaDeTecnologias.map( ( nome: string ) => {
                const { imagem, descricao } = tecnologias[nome]

                return <div className="card-tecnologia" key={nome}>
                    <img src={imagem} alt={nome} />
                    <p>{nome}</p>
                    <span>{descricao}</span>
                </div>

            })

        }</div>

    </section>
}