import { Link } from "react-router-dom";
export default function MatoGrossodoSul() {
    return (
        <div>
            <h1>Estado Mato Grosso do Sul</h1>
            <div className="conteudo">
                <img src="/MS.png" />

                <p>
                    Mato Grosso do Sul (MS) tem capital em Campo Grande, destaca-se na pecuária e celulose, e é referência mundial em ecoturismo com Bonito.
                    
                </p>
                <p>
                    <Link to="/">Voltar</Link>

                </p>
            </div>
        </div>
    )
}