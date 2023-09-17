
import './App.css';
import Lista from './Component/lista';
import {Provedor} from './Component/provider';
import Busca from './Component/busca';
function App() {
  return (
    <Provedor>
    <div className="App">
      <Busca></Busca>
      <Lista></Lista>
     
    </div>
    </Provedor>
  );
}

export default App;
