import { Link } from "react-router-dom";
export default function Tocantins() {
    return (
        <div>
            <h1>Estado de Tocantins</h1>
            <div className="conteudo">
                <img src="/TO.png" />

                <p>
                    Tocantins (TO) tem capital em Palmas, é o estado mais jovem do Brasil, destaca-se no agronegócio e no turismo no Jalapão.
                </p>
                <p>
                    <Link to="/">Voltar</Link>

                </p>
            </div>
        </div>
    )
}