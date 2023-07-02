import { useState } from "react";
import "./App.css";

//  Whole page  component.
function App() {
  return (
    <div className="App">
      <header className="App-header">Tic Tac Tutorial Game</header>
      <hr />
      <Board />
    </div>
  );
}
//Component of board containing 9 squares component.
function Board() {
  // Creating 9 null elements in arrays for 9 squares.
  // So initially all squares such as squares[0], square[1] will have null values.

  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-row">
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="d-flex flex-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="d-flex flex-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </div>
  );
}
// Square component for board.
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
export default App;
