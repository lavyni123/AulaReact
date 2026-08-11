import { Link } from "react-router-dom";
export default function Roraima() {
    return (
        <div>
            <h1>Estado de Roraima</h1>
            <div className="conteudo">
                <img src="/RR.png" />

                <p>
                   Roraima (RR) tem capital em Boa Vista, possui economia baseada no setor público e agropecuária, e abriga o famoso Monte Roraima.
                </p>
                <p>
                    <Link to="/">Voltar</Link>

                </p>
            </div>
        </div>
    )
}