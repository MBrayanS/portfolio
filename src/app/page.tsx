import { Apresentacao, Cabecalho } from '@/app/views'
import { ParaOTopo } from '@/components'

const Home = () => {
    return (
        <>
            <Cabecalho />

            <main>
                <Apresentacao />
            </main>

            <ParaOTopo />
        </>
    )
}

export default Home