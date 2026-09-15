import { Link } from "react-router-dom";
import { useState } from "react";

export default function Exercicio4()
{
    const [base, setBase] = useState();
    const [altura, setAltura] = useState();
    
    const [area, setArea] = useState();

    function calcular()
    {
        let triangulo;

       const Areatriangulo = (Number(base) * Number(altura)) / 2 ;

        
        setArea(
            <div>
                A Area do triangulo é: = {Areatriangulo}
            </div>
        );
    }

    return (
        <div>

            <h1>Exercício 4</h1>

            <div className="conteudo">

                <form>

                    <p>
                        Digite a base do triangulo: <br />
                        <input
                            type="text"
                            value={base}
                            onChange={(e) => setBase(e.target.value)}
                        />
                    </p>

                    <p>
                        Digite a altura do triangulo: <br />
                        <input
                            type="text"
                            value={altura}
                            onChange={(e) => setAltura(e.target.value)}
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
                        {area}
                    </p>

                </form>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>
    );
}
