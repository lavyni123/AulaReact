import { Link } from "react-router-dom";
export default function SantaCatarina() {
    return (
        <div>
            <h1>Estado de Santa Catarina</h1>
            <div className="conteudo">
                <img src="/SC.png" />

                <p>
                    Santa Catarina é um estado da Região Sul do Brasil, conhecido por seu altíssimo índice de desenvolvimento humano, praias paradisíacas e forte economia industrial.
                    
                </p>
                <p>
                    <Link to="/">Voltar</Link>

                </p>
            </div>
        </div>
    )
}