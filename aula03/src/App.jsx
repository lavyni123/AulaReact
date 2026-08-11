import {BrowserRouter, Routes, Route} from"react-router-dom";

import Home from "./paginas/Home";
import SaoPaulo from "./paginas/SaoPaulo";
import MinasGerais from "./paginas/MinasGerais";
import RioJaneiro from "./paginas/RioJaneiro";
import EspiritoSanto from "./paginas/EspiritoSanto";
import Parana from "./paginas/Parana";
import SantaCatarina from "./SantaCatarina";
import RioGrandedoSul from "./RioGrandedoSul";
import MatoGrossodoSul from "./paginas/MatoGrossodoSul";
import MatoGrosso from "./paginas/MatoGrosso";
import DistritoFederal from "./paginas/DistritoFederal";

export default function App()
{
return(
<BrowserRouter>

<Routes>

<Route path="/" element={<Home />} />

<Route path="/estados/sp" element={<SaoPaulo />}  />
<Route path="/estados/mg" element={<MinasGerais />}  />
<Route path="/estados/rj" element={<RioJaneiro />}  />
<Route path="/estados/es" element={<EspiritoSanto />}  />
<Route path="/estados/pr" element={<Parana />}  />
<Route path="/estados/sc" element={<SantaCatarina />}  />
<Route path="/estados/rs" element={<RioGrandedoSul />}  />
<Route path="/estados/go" element={<Goias />}  />
<Route path="/estados/ms" element={<MatoGrossodoSul />}  />
<Route path="/estados/mg" element={<MatoGrosso />}  />
<Route path="/estados/df" element={<DistritoFederal />}  />
</Routes>

</BrowserRouter>



);


}