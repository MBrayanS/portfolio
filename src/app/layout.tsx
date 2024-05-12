import '@/app/styles/globals.scss'
import '@/app/styles/reset.scss'
import '@/app/styles/typography.scss'

import type { Metadata } from 'next'
import { Russo_One } from 'next/font/google'

const russoOne = Russo_One({
    weight: '400',
    display: 'swap',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'MBrayanS',
    description: 'Desenvolvedor Web Full Stack',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='pt-br'>
            <body className={russoOne.className}>{children}</body>
        </html>
    )
}