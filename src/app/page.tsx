import { Apresentacao, Cabecalho, Projetos } from '@/app/views'
import { ParaOTopo } from '@/components'

const Home = () => {
    return (
        <>
            <Cabecalho />

            <main>
                <Apresentacao />
                <Projetos /> 
            </main>

            <ParaOTopo />
        </>
    )
}

export default Home