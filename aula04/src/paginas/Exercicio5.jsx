import { Link } from "react-router-dom";
import { useState } from "react";

export default function Exercicio5()
{
    const [lado, setLado] = useState();
   
    const [resultado, setResultado] = useState();
   

    function calcular()
    {
        let quadrado;

       const resultado = Number(lado) * Number(lado);

        
        setResultado(
            <div>
                A Area do quadrado é: = {resultado}
            </div>
        );
    }

    return (
        <div>

            <h1>Exercício 5</h1>

            <div className="conteudo">

                <form>

                    <p>
                        Digite o lado do quadrado <br />
                        <input
                            type="text"
                            value={lado}
                            onChange={(e) => setLado(e.target.value)}
                        />
                    </p>

                   

                    <p>
                        <input
                            type="button"
                            value="Calcular"
                            onClick={calcular}
                        />
                    </p>

                    <p>
                        {resultado}
                    </p>

                </form>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>
    );
}
