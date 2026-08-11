import { Link } from "react-router-dom";
export default function Rondonia() {
    return (
        <div>
            <h1>Estado de Rondônia</h1>
            <div className="conteudo">
                <img src="/RO.png" />

                <p>
                    Rondônia (RO) tem capital em Porto Velho, possui forte produção de grãos e pecuária, e cresce impulsionado pelo setor hidrelétrico nacional.
                </p>
                <p>
                    <Link to="/">Voltar</Link>

                </p>
            </div>
        </div>
    )
}