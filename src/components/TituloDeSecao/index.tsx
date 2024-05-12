import './styles.scss'

import { ReactNode } from 'react'

interface ITituloDeSecaoProps {
    children: ReactNode
}

export const TituloDeSecao = ( props: ITituloDeSecaoProps ) => {
    const { children } = props

    return (
        <div className='titulo'> <h1>{children}</h1> </div>
    )
}  