import { Link } from "react-router-dom";
export default function Para() {
    return (
        <div>
            <h1>Estado do Pará</h1>
            <div className="conteudo">
                <img src="/PA.png" />

                <p>
                    Pará (PA) tem capital em Belém, lidera a produção mineral e de açaí do país, e destaca-se culturalmente pelo Círio de Nazaré.
                </p>
                <p>
                    <Link to="/">Voltar</Link>

                </p>
            </div>
        </div>
    )
}