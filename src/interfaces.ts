export type TTecnologia = {
    nome: string
    imagem: string
}

export interface IProjeto {
    nome: string
    descricao: string
    tecnologias: Array<string>
    linkDaImagem: string
    linkDoDeploy?: string
    linkDoRepo?: string
}

export interface ITecnologia {
    [key: string]: { imagem: string, descricao: string }
}