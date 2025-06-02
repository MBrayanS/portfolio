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
                <p>Oi! Eu sou <strong>Micael Brayan</strong>, uma pessoa curiosa, apaixonada por tecnologia, desenvolvimento e tudo que envolve criatividade e aprendizado.</p>

                <p>Minha história com programação começou lá em <strong>2015</strong>, quando, por pura diversão, eu tentava criar alguns jogos. Nem imaginava que aquilo se transformaria na minha profissão — e, mais do que isso, em algo que realmente me encanta até hoje.</p>

                <p>Atualmente, trabalho como desenvolvedor full-stack na <a href="https://www.terraviva.agr.br/" target="_blank" rel="noreferrer"><strong>Terra Viva</strong></a>, uma empresa do setor agrícola, onde ajudo a transformar necessidades internas em soluções digitais. Nosso time desenvolve aplicações que vão desde a otimização de processos até a criação de ferramentas para atender demandas completamente novas.</p>

                <p>O que mais me motiva no dia a dia é poder participar de todo o ciclo dos projetos — da idealização e planejamento, passando pelas discussões técnicas, até, claro, o desenvolvimento em si. Ter essa liberdade de explorar, propor soluções e construir de forma colaborativa é algo que valorizo muito.</p>

                <p>Gosto de aprender, de explorar coisas novas e de fazer tudo isso com uma boa xícara de café do lado. Também carrego comigo uma paixão enorme por astronomia, arte e matemática — coisas que, de um jeito ou de outro, sempre acabam cruzando meu caminho.</p>

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