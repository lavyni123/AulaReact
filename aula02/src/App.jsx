
import "./App.css";
import Exemplo1 from "./Exemplo1";
export default function App() {
  return (
    <div>
      <h1>Aula 02- Criação de Componentes e props
      </h1>
      <div className="card">
        <h3>Chamdas para o componente Exemplo1</h3>
<Exemplo1 numero1={10} numero2={20} />
      </div>
    </div>
  )
}