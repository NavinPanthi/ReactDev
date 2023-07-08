import { useState } from "react";
import "./Apps.css";

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

  const boardSize = 3;
  const rows = Array(boardSize)
    .fill(null)
    .map((_, row) => {
      const cells = Array(boardSize)
        .fill(null)
        .map((_, col) => {
          const index = row * boardSize + col;
          return (
            <Square
              key={index}
              value={squares[index]}
              index={index}
              onSquareClick={() => handleClick(index)}
            />
          );
        });

      return (
        <div className="d-flex flex-row" key={row}>
          {cells}
        </div>
      );
    });

  return (
    <div className="d-flex flex-column">
      <div className="mb-5 ">{statuss}</div>
      <div className="d-flex flex-column">{rows} </div>
    </div>
  );
}

function Game() {
  // Creating 9 null elements in arrays for 9 squares.
  // So initially all squares such as squares[0], square[1] will have null values.

  // All the steps of clicked events in buttons are stored.
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [sortAscending, setSortAscending] = useState(true);
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

  function toggleSortOrder() {
    setSortAscending((prevSortAscending) => !prevSortAscending);
  }

  const moves = sortAscending
    ? history.map((squares, move) => {
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
          <div>
            <li key={move}>
              <button className="start btn btn-lg" onClick={() => jumpTo(move)}>
                {description}
              </button>
            </li>
          </div>
        );
      })
    : history
        .slice()
        .reverse()
        .map((squares, move) => {
          const reversedMove = history.length - move - 1;
          let description;
          if (reversedMove > 0) {
            description = "Go to move " + reversedMove;
          } else {
            description = "Start the game.";
          }

          if (reversedMove === currentMove) {
            description = "You are at move" + reversedMove;
          }

          return (
            <li key={reversedMove}>
              <button
                className="start btn btn-lg"
                onClick={() => jumpTo(reversedMove)}
              >
                {description}
              </button>
            </li>
          );
        });

  return (
    <div className="d-flex flex-row game ">
      <div className="game-board d-flex justify-content-end">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info d-flex flex-column">
        <div>
          <button
            className="start btn btn-lg toggle mb-5"
            onClick={toggleSortOrder}
          >
            Toggle Sort Order
          </button>
        </div>
        <ol className="d-flex flex-column justify-content-center ms-5  ps-5 d-flex">
          {moves}
        </ol>
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
