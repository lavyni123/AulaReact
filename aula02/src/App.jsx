
import "./App.css";
import Exemplo1 from "./Exemplo1";
import Exercicio1 from "./exercicio1";
import Exercicio2 from "./Exercicio2";
export default function App() {
  return (
    <div>
      <h1>Aula 02- Criação de Componentes e props
      </h1>
      <div className="card">
        <h3>Chamdas para o componente Exemplo1</h3>
        <Exemplo1 numero1={10} numero2={20} />
      </div>
      <div className="card">
        <h3>Exercicio 1</h3>
        <Exercicio1 numero={12} />
        <Exercicio1 numero={67} />
        <Exercicio1 numero={-5} />

      </div>
<div className="card">
  <h3>Exercicio 2</h3>
  <Exercicio2 peso={53}/>
  <Exercicio2 altura={1.60}/>
  



</div>

    </div>


  )
}