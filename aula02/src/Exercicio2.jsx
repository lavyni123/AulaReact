export default function Exercicio2({peso, altura})
{
    let imc = Number(peso) / (Number(altura) * Number(altura));
    return (
        <div>
o peso é {peso} kg e altura {altura}M é {imc}.

        
</div>  )
}