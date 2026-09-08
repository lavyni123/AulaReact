import {Link} from "react-router-dom";
import {useState} from "react";
export default function Exercicio2()
{
    const[numero, setNumero] = useState();
    const[resultado, setResultado] = useState();

    function calcular()
    {
        let fahrenheit, celcius;
        fahrenheit = ((Number(numero) - 32) * 5) / 9;
        

        //exibindo o resultado na variavel resultado
        setResultado(
            <div>
                {numero} = {fahrenheit} <br />
                
            </div>
        );
    }
    return (
        <div>

            <h1>Exercício 2</h1>

            <div className="conteudo">

            <form>
                <p>
                    digite um número qualquer <br />
                    <input type="text"
                value={numero}
                onChange={ (e) => setNumero(e.target.value)}
                />
                
                </p>

                <p>
                    <input type="button" value="Calcular" onClick={calcular} />

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