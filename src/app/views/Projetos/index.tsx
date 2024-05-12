import './styles.scss'

import { ProjetoCard, TituloDeSecao } from '@/components'

interface IProjetoDto {
    imagemLink: string
    nome: string
    descricao: string
    tecnologias: string[]
    deployLink?: string
    repositorioLink?: string
}

const projetos: IProjetoDto[] = [
    {
        imagemLink: 'https://raw.githubusercontent.com/MBrayanS/lapislazuli-chat/main/images/Screenshot-desktop.png',
        nome: 'Lapislazuli Chat',
        descricao: 'Uma aplicação web de bate papo open source e sem fins lucrativos. Criado principalmente para por em pratica conhecimentos técnicos e trabalho em equipe.',
        tecnologias: ['Express', 'PostgreSQL', 'SASS', 'TypeScript'],
        repositorioLink: 'https://github.com/MBrayanS/lapislazuli-chat'
    },
    {
        imagemLink: 'https://raw.githubusercontent.com/MBrayanS/pesquisa-tech/main/images/screenshot.png',
        nome: 'Pesquisa Tech',
        descricao: 'Uma página onde é mostrado o resultado de uma simulação de pesquisa com desenvolvedores. O resultado é apresentado de forma quantitativa e através de graficos de barra.',
        tecnologias: [ 'Vite', 'React', 'TypeScript', 'CSS', 'Node', 'Figma' ],
        deployLink: 'https://pesquisa-tech.vercel.app',
    },
    {
        imagemLink: 'https://raw.githubusercontent.com/MBrayanS/quiz-app/main/images/screenshot.png',
        nome: 'Quiz App',
        descricao: 'Um quiz de perguntas e respostas. O quiz foi feito para aplicar conceitos de programação para a construção de uma interface de usuario',
        tecnologias: [ 'Vite', 'React', 'TypeScript', 'CSS', 'Node', 'Figma' ],
        deployLink: 'https://quiz-app-mu.vercel.app',
        repositorioLink: 'https://github.com/MBrayanS/quiz-app'
    }
]

export const Projetos = () => {
    return (
        <section id='projetos' className='secao-projetos'>

            <TituloDeSecao> Projetos </TituloDeSecao>

            <div className='container'>{
                projetos.map( (projeto, index) => <ProjetoCard key={ index } { ...projeto } /> )
            }</div>
        </section>
    )
}