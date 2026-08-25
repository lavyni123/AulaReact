import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exemplo1()
{
    const[nome, setNome] = useState("Lavyni");
    const[idade, setIdade] = useState(17);

    return (
        <div>

            <h1>Exemplo 1</h1>

            <div className="conteudo">

            <p>
                Nome do Aluno: {nome} <br />
                Idade: {idade}
            </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>
    );
}