import './RedesSociais.scss'

export default function RedesSociais() {
    const linkDoInstagram = 'https://www.instagram.com/m_brayan_dev/'
    const iconDoInstagram = 'img/icons/icon-rede-social-instagram.svg'

    const linkDoLinkedin = 'https://www.linkedin.com/in/mbrayans/'
    const iconDoLinkedin = 'img/icons/icon-rede-social-linkedin.svg'

    const linkDoGitHub = 'https://github.com/MBrayanS/'
    const iconDoGitHub = 'img/icons/icon-tech-github.svg'
    
    return <aside className="redes-sociais">
            
        <a className='rede' rel='noopener' href={linkDoInstagram} target="_blank">
            <img src={iconDoInstagram} alt="Intagram" />
        </a>

        <a className='rede' rel='noopener' href={linkDoLinkedin} target="_blank">
            <img src={iconDoLinkedin} alt="LinkedIn" />
        </a>
        
        <a className='rede' rel='noopener' href={linkDoGitHub} target="_blank">
            <img src={iconDoGitHub} alt="GitHub" />
        </a>

    </aside>
}