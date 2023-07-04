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
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    // To implement the concept of immutability, we have copy the array of squares to nextSquares by using slice method.
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();

    if (xIsNext) {
      //This condition is to check if square box have already the 'X' or 'O' value.
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    console.log(nextSquares);
    setXIsNext(!xIsNext);
  }
  //To check who is the winner.
  const winner = calculateWinner(squares);

  // To display the status of winner or next move.
  let statuss;
  if (winner) {
    statuss = winner + " is winner.";
  } else {
    statuss = "Next move: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div>{statuss}</div>

      <div className="d-flex flex-column">
        <div className="d-flex flex-row">
          {/* The following will cause error as function is called not passed so it will be rendered in loop. */}
          {/* <Square value={squares[0]} onSquareClick={handleClick(0)} /> */}
          {/* The following will work because we have passes a prop by defining the function. */}
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="d-flex flex-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="d-flex flex-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}
// Square component for board.
function Square({ value, onSquareClick }) {
  return (
    <button className="square btn-lg" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function calculateWinner(squares) {
  const matches = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  for (let i = 0; i < matches.length; i++) {
    const [a, b, c] = matches[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
export default App;
