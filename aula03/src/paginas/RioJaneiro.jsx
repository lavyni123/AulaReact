import { Link } from "react-router-dom";
export default function RioJaneiro() {
    return (
        <div>
            <h1>Estado do Rio de Janeiro</h1>
            <div className="conteudo">


            <img src="/RJ.png" />



                <p>
                    O estado do Rio de Janeiro está localizado na Região Sudeste do Brasil e é conhecido por suas belas paisagens, praias e importância cultural. Sua economia é baseada nos setores de serviços, turismo, indústria e produção de petróleo. Além disso, o estado abriga importantes atrações turísticas e desempenha um papel relevante no desenvolvimento econômico e cultural do Brasil.

                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>
        </div>

    );


}