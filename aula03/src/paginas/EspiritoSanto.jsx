import { Link } from "react-router-dom";
export default function EspiritoSanto() {
    return (
        <div>
            <h1>Estado do Espírito Santo</h1>
            <div className="conteudo">


                <img src="/ES.png" />

                <p>
                    O estado do Espírito Santo está localizado na Região Sudeste do Brasil e é conhecido por seu litoral, sua riqueza natural e sua economia diversificada. Destaca-se pela produção de café, pela atividade portuária, pela indústria e pelo comércio. Além disso, o estado possui belas praias, montanhas e uma importante contribuição para o desenvolvimento econômico da região.
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>

    );


}