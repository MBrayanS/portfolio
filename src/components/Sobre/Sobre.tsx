import './Sobre.scss'

import Titulo from '../Titulo/Titulo'
import RedesSociais from '../RedesSociais/RedesSociais'

export default function Sobre() {
    const minhaIdade = calcularIdade()

    return <section id="sobre" className="sobre">

        <Titulo texto="Sobre mim"/>

        <div className="conteudo">

            <div className="perfil">

                <div className="informacoes">

                    <img src="./img/perfil.svg" alt="Micael Brayan"/>

                    <ul>
                        <li>Micael Brayan</li>
                        <li>{minhaIdade} anos</li>
                        <li>Artur Nogueira - SP</li>
                    </ul>

                </div>

                <RedesSociais />

            </div>

            <div className="resumo">
                <p> Sou um desenvolvedor <strong>frontend</strong> com experiência em <strong>backend</strong>. Autodidata, estou sempre ansioso por aprender e enfrentar novos desafios. Sou também apaixonado por astronomia, arte, matemática e claro, uma boa xicará de café. </p>

                <p> Minha jornada começou perto de 2015, enquanto eu aprendia a desenvolver jogos por pura diversão. Ali descobri minha paixão por códigos e conheci alguns dos principais pilares da programação. </p>
                
                <p> Atualmente, estou em transição de carreira, explorando também oportunidades como <strong>freelancer</strong>. Como desenvolvedor web, adoto metodologias ágeis, especialmente o <strong>Kanban</strong>. E comprometido com a qualidade do código, sigo princípios como o <strong>SOLID</strong> e pratico o <strong>TDD</strong>. </p>
                
                <p> Tenho experiência com <strong>Sass</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>Node</strong> e <strong>Express</strong>. Já trabalhei com integração de banco de dados com o <strong>PostgreSQL</strong>. Com consumo e desenvolvimento de <strong>APIs</strong>. Testes de únidade e de integração com <strong>Jest</strong>. Além de versionamento com <strong>Git</strong> e criação de design com <strong>Figma</strong>. </p>
                
                <p> Estou sempre focado em escrever códigos escaláveis e desenvolver interfaces pensadas na experiência do usuário. </p>
            </div>

        </div>

    </section>
}

function calcularIdade() {
    const dataDeNascimento = new Date(2001, 4, 14).getTime()
    const dataAtual = new Date().getTime()
    const diferencaEmMilisegundos = dataAtual - dataDeNascimento

    return Math.floor(diferencaEmMilisegundos / 1000 / 60 / 60 / 24 / 365)
}