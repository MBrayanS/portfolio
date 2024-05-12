'use client'

import './styles.scss'

import { useEffect, useState } from 'react'

import { Icon, ScrollLink } from '@/components/ui'

export const ParaOTopo = () => {
    const [ btnVisivel, setBtnVisivel ] = useState(false)

    const scrollou = () => {
        const scrollMaiorQueAMetadeDaJanela = window.scrollY > (window.innerHeight/2)

        setBtnVisivel(scrollMaiorQueAMetadeDaJanela)
    }

    useEffect( () => {
        window.addEventListener('scroll', scrollou )

        return () => window.removeEventListener('scroll', scrollou)
    }, [])

    return (
        btnVisivel &&
        <div className='para-o-topo'>
            <ScrollLink to='apresentacao'>
                <Icon alt='Para o topo' name='seta' />
            </ScrollLink>
        </div>
    )
}