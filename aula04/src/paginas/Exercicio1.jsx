import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exercicio1()
{
    const[numero, setNumero] = useState();
    const[resultado, setResultado] = useState();

    function calcular()
    {
        let quadrado, cubo;
        quadrado = Number(numero) * Number(numero);
        cubo = Number(numero) * Number(numero) * Number(numero);

        //exibindo o resultado na variavel resultado
        setResultado(
            <div>
                {numero}<sup>2</sup> = {quadrado} <br />
                {numero}<sup>3</sup> = {cubo}
            </div>
        );
    }
    return (
        <div>

            <h1>Exercício 1</h1>

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