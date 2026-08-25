import {Link} from "react-router-dom";
import "../App.css";

export default function Home()
    {
return(
<div>
<h1>Aula 03 - Estudo de Rotas</h1>

<div className="conteudo">
    <h3>Região Sudeste</h3>
<ul>
    <li><Link to="/estados/sp">São Paulo</Link></li>
    <li><Link to="/estados/mg">Minas Gerais</Link></li>
    <li><Link to="/estados/rj">Rio de Janeiro</Link></li>
    <li><Link to="/estados/es">Espírito Santo</Link></li>

</ul>

</div>
<div className="conteudo">
    <h3>Região Sul</h3>

    <ul>
        <li><Link to="/estados/pr">Paraná</Link></li>
        <li><Link to="/estados/sc">Santa Catarina</Link></li>
        <li><Link to="/estados/rs">Rio Grande do Sul</Link></li>
        
    </ul>
</div>
<div className="conteudo">
    <h3>Região Centro Oeste</h3>
<ul>
        <li><Link to="/estados/go">Goiás</Link></li>
        <li><Link to="/estados/mg">Mato Grosso</Link></li>
        <li><Link to="/estados/ms">Mato Grosso do Sul</Link></li>
        <li><Link to="/estados/df">Distrito Federal</Link></li>
</ul>
</div>

<div className="conteudo">
    <h3>Região Norte</h3>
    <ul>
<li><Link to="/estados/ac">Acre</Link></li>
<li><Link to="/estados/ap">Amapá</Link></li>
<li><Link to="/estados/am">Amazonas</Link></li>
<li><Link to="/estados/ro">Rondônia</Link></li>
<li><Link to="/estados/rr">Roraima</Link></li>
<li><Link to="/estados/to">Tocantins</Link></li>
        
    </ul>
</div>
</div>

);


    }
