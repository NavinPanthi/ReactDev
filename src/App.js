import { useState } from "react";
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
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-row">
        <Square value={squares[1]} />
        <Square value={squares[2]} />
        <Square value={squares[3]} />
      </div>
      <div className="d-flex flex-row">
        <Square value={squares[4]} />
        <Square value={squares[5]} />
        <Square value={squares[6]} />
      </div>
      <div className="d-flex flex-row">
        <Square value={squares[7]} />
        <Square value={squares[8]} />
        <Square value={squares[9]} />
      </div>
    </div>
  );
}
function Square({ value }) {
  return <button className="square">{value}</button>;
}

export default App;
