import { Link } from "react-router-dom";
import { useState } from "react";

export default function Exercicio6()
{
    const [quantidade, setQuantidade] = useState();
   
    const [preco, setPreco] = useState();
    const [resultado, setResultado] = useState();

    function calcular()
    {
        let conta;

       const subtotal = Number(quantidade) * Number(preco);
        const desconto = Number(subtotal) * 0.10
        const total = Number(subtotal) - Number(desconto)
        
        setResultado(
            <div>
                O subtotal é: = {subtotal}
                o desconto é: = {desconto}
                o Total é: = {total}
            </div>
        );
    }

    return (
        <div>

            <h1>Exercício 6</h1>

            <div className="conteudo">

                <form>

                    <p>
                        Digite a quantidade de produtos <br />
                        <input
                            type="text"
                            value={quantidade}
                            onChange={(e) => setQuantidade(e.target.value)}
                        />
                    </p>

                    <p>
                        Digite o preço do produto: <br />
                        <input
                            type="text"
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)}
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
