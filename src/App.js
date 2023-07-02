import { useState} from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Tic Tac Tutorial Game</header>
      <hr />
      <Board />
    </div>
  );
}
function Board() {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="d-flex flex-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="d-flex flex-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}
function Square() {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue('X');
  }
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default App;
