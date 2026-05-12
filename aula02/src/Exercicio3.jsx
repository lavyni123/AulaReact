export default function Exercicio3({nota1, nota2}) 

{
    let media = (Number(nota1) + Number(nota2)) /2 ;
    let situacao = media>=6? "aprovado": "reprovado";
    return (
        <div>
a nota 1 é {nota1} e a nota 2 é {nota2} a media aritimetica é {media}.
Aluno {situacao}
        
</div>  )
}