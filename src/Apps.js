import { useState } from "react";
import "./App.css";

// Square component for board.
function Square({ value, index, onSquareClick }) {
  let className = "square btn-lg";
  if (index === 0) {
    className = "firstSquare square btn-lg";
  } else if (index === 2) {
    className = "thirdSquare square btn-lg";
  } else if (index === 6) {
    className = "seventhSquare square btn-lg";
  } else if (index === 8) {
    className = "ninthSquare square btn-lg";
  }
  return (
    <button className={className} onClick={onSquareClick}>
      {value}
    </button>
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

  const boardCount = 3;
  let index;
  const rows = [];
  for (let row = 0; row < boardCount; row++) {
    const cells = [];
    for (let col = 0; col < boardCount; col++) {
      index = row * boardCount + col;
      cells.push(
        <Square
          key={index}
          value={squares[index]}
          index={index}
          onSquareClick={() => handleClick(index)}
        />
      );
    }
    rows.push(
      <div className="d-flex flex-row" key={row}>
        {cells}
      </div>
    );
  }

  return (
    <>
      <div>{statuss}</div>
      <div className="d-flex flex-column">{rows} </div>
    </>
  );
}

function Game() {
  // Creating 9 null elements in arrays for 9 squares.
  // So initially all squares such as squares[0], square[1] will have null values.

  // All the steps of clicked events in buttons are stored.
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  // THe current squares variable store the last state of history i.e. present steps of clicked button.
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  // Here history array is mapped to a function where  each time each element (i.e array) of history array is passed
  //  and move is the index of element passed to history array.
  const moves = history.map((squares, move) => {
    let description;

    if (move > 0) {
      description = "Go to move" + move;
    } else {
      description = "Start the game.";
    }
    if (move === currentMove && move !== 0) {
      description = "You are at move" + move;
    }
    return (
      <li key={move}>
        <button className="start btn" onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
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
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < matches.length; i++) {
    const [a, b, c] = matches[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
//  Whole page  component.
function Apps() {
  return (
    <div className="App">
      <header className="App-header mb-5">Tic Tac Tutorial Game</header>
      <Game />
    </div>
  );
}

export default Apps;
