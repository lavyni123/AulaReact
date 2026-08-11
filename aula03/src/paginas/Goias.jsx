import { Link } from "react-router-dom";
export default function Goias() {
    return (
        <div>
            <h1>Estado de Goiás</h1>
            <div className="conteudo">
                <img src="/GO.png" />

                <p>
                    Goiás (GO) tem capital em Goiânia, economia forte em grãos e gado, e turismo famoso na Chapada dos Veadeiros e Caldas Novas.
                </p>
                <p>
                    <Link to="/">Voltar</Link>

                </p>
            </div>
        </div>
    )
}