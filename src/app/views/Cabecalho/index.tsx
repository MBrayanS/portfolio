import './styles.scss'

import { ScrollLink } from '@/components/ui'

export const Cabecalho = () => {
    return (
        <div className='cabecalho'>
            <div className='logo'>
                <a href="/" className='font-s20'> MBrayanS</a>
            </div>

            <nav className='flex-center-all'>

                <ul className='font-s16 flex-center-all'>
                    <ScrollLink to="apresentacao"> Apresentação </ScrollLink>
                    <ScrollLink to="projetos"> Projetos </ScrollLink>
                    <ScrollLink to="servicos"> Serviços </ScrollLink>
                    <ScrollLink to="tecnologias"> Tecnologias </ScrollLink>
                </ul>

            </nav>
        </div>
    )
}