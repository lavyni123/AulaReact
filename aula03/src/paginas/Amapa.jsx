import { Link } from "react-router-dom";
export default function MatoGrosso() {
    return (
        <div>
            <h1>Estado Mato Grosso</h1>
            <div className="conteudo">
                <img src="/MG.png" />

                <p>
                    Mato Grosso (MT) tem capital em Cuiabá, lidera a produção nacional de soja e milho, e abriga o Pantanal, Cerrado e Amazônia.
                </p>
                <p>
                    <Link to="/">Voltar</Link>

                </p>
            </div>
        </div>
    )
}