import { Link } from "react-router-dom";
export default function Parana() {
    return (
        <div>
            <h1>Estado do Paraná</h1>
            <div className="conteudo">
                <img src="/PR.png" />

                <p>
                    O Paraná é um estado brasileiro da região Sul, com capital em Curitiba. Possui mais de 11 milhões de habitantes distribuídos em 399 municípios. Destaca-se pela forte produção agropecuária, por uma economia diversificada e por abrigar as Cataratas do Iguaçu e o maior porto graneleiro da América Latina.

                </p>
                <p>
                    <Link to="/">Voltar</Link>

                </p>
            </div>
        </div>
    )
}