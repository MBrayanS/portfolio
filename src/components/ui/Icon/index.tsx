import Image from 'next/image'
import { HTMLAttributes } from 'react'

export interface IIconProps extends HTMLAttributes<HTMLImageElement> {
    name: string
    alt: string
    className?: string
    size?: number
}

export const Icon = ( props: IIconProps ) => {
    const { name, alt, className, size = 28, ...rest } = props

    const caminho = `/icons/${name}.svg`

    return (
        <Image
            className={`icon ${className}`}
            width={size}
            height={size}
            alt={alt}
            src={caminho}
            {...rest}
        />
    )
}