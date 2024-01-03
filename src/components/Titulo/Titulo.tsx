import './Titulo.scss'

export default function Titulo({texto}: {texto: string}) {
    return <div className="titulo">

        <h2>{texto}</h2>
            
        <hr />

    </div>
}