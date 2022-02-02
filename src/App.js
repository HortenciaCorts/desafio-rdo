import ConverteNumbers from "./tasks/ConverteNumbers";
import DivisorContaRestaurante from "./tasks/DivisorContaRestaurante";

import GameOfLife from "./tasks/GameOfLife";
import {GameOfLifeF} from "./tasks/GameOfLife/index"
import {Canvas} from "./tasks/GameOfLife/canvas";


function App() {
  return (
    <>
      <h1>Teste de Programação - Rota das Oficinas</h1>
      {/* <ConverteNumbers />
      <DivisorContaRestaurante /> */}
      <GameOfLifeF />
    </>
  );
}

export default App;
