import { Link } from "react-router-dom";
export default function DistritoFederal() {
    return (
        <div>
            <h1>Estado Distrito Federal</h1>
            <div className="conteudo">
                <img src="/DF.png" />

                <p>
                    Distrito Federal (DF) tem Brasília como capital, funciona como o centro político do Brasil e destaca-se pela arquitetura moderna planejada.

                </p>
                <p>
                    <Link to="/">Voltar</Link>

                </p>
            </div>
        </div>
    )
}