import { Link } from "react-router-dom";
export default function SaoPaulo() {
    return (
        <div>
            <h1>Estado de São Paulo</h1>
            <div className="conteudo">

                <img src="/SP.png" />

                <p>
                    O estado de São Paulo está localizado na Região Sudeste do Brasil e é o mais populoso do país. Sua economia é uma das mais fortes do Brasil, com destaque para a indústria, o comércio, os serviços e a agricultura. Além disso, São Paulo é conhecido por sua diversidade cultural, boa infraestrutura e por desempenhar um papel importante no desenvolvimento econômico e social do país.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>

    );


}