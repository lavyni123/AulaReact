import { Link } from "react-router-dom";
export default function RioGrandedoSul() {
    return (
        <div>
            <h1>Estado Rio Grande do Sul</h1>
            <div className="conteudo">
                <img src="/RS.png" />

                <p>
                    O Rio Grande do Sul é o estado mais ao sul do Brasil, famoso por sua forte cultura gaúcha, relevo de pampas e serras, e uma economia altamente focada no agronegócio.
                </p>
                <p>
                    <Link to="/">Voltar</Link>


                </p>
            </div>
        </div>
    )
}