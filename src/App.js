import { useState } from "react";
import "./App.css";

//  Whole page  component.
function App() {
  return (
    <div className="App">
      <header className="App-header">Tic Tac Tutorial Game</header>
      <hr />
      <Game />
    </div>
  );
}

//Component of board containing 9 squares component.
function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    // To implement the concept of immutability, we have copy the array of squares to nextSquares by using slice method.
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    //above squares prop is taking current squares and squares array is passed to nextSquares.
    const nextSquares = squares.slice();

    if (xIsNext) {
      //This condition is to check if square box have already the 'X' or 'O' value.
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares);
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
function Game() {
  // Creating 9 null elements in arrays for 9 squares.
  // So initially all squares such as squares[0], square[1] will have null values.
  const [xIsNext, setXIsNext] = useState(true);
  // All the steps of clicked events in buttons are stored.
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  // THe current squares variable store the last state of history i.e. present steps of clicked button.
  const currentSquares = history[currentMove];


  console.log("History");
  console.log(history);
  console.log("Currentsquares");
  console.log(currentSquares);
  console.log("Length");
  console.log(history.length);

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    // Every array when button clicked is added to history.
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }
  // Here history array is mapped to a function where  each time each element (i.e array) of history array is passed
  //  and move is the index of element passed to history array.
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move" + move;
      return (
        <li key={move}>
          <button className="goto btn btn-light" onClick={() => jumpTo(move)}>
            {description}
          </button>
        </li>
      );
    } else {
      description = "Start the game.";
      return (
        <li key={move}>
          <button className="start btn btn-light " onClick={() => jumpTo(move)}>
            {description}
          </button>
        </li>
      );
    }
  });

  return (
    <div className="d-flex flex-row game ">
      <div className="game-board pe-5">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
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
