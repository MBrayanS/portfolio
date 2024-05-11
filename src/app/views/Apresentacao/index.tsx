import './styles.scss'

import { Icon } from '@/components/ui/Icon'

export const Apresentacao = () => {
    return (
        <section id='apresentacao' className='secao-apresentacao luz' >
            <div className='container flex-center-all font-s20'>
                <p>Olá, eu sou</p>
                <h1>MBrayanS</h1>
                <p>Desenvolvedor Web Full Stack</p>
            </div>
            
            <div className="redes-sociais flex-center-all">
                <a href="https://www.linkedin.com/in/mbrayans/" target="_blank" rel="noopener" title='Linkedin'>
                    <Icon name='linkedin' alt='Linkedin' />
                </a>

                <a href="https://github.com/MBrayanS" target="_blank" rel="noopener" title='Github'>
                    <Icon name='github' alt='Github' />
                </a>

                <a href="https://www.instagram.com/m_brayan_s/" target="_blank" rel="noopener" title='Instagram'>
                    <Icon name='instagram' alt='Instagram' />
                </a>
            </div>
        </section >
    )
}