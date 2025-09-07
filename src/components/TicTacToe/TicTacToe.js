import React, { useState, useEffect } from "react";
import "./TicTacToe.css";
import Particle from "../Particle";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [winnerSquares, setWinnerSquares] = useState([]);
  const [mode, setMode] = useState(null);

  const handleClick = (i) => {
    
    if (gameOver || board[i] || (mode === "one-player" && !xIsNext)) return;
  
    const newBoard = [...board];
    newBoard[i] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);  
  
    checkGameOver(newBoard);
  
    
    if (mode === "one-player" && !gameOver) {
      setTimeout(() => makeComputerMove(newBoard), 500);
    }
  };
  

  const makeComputerMove = (currentBoard) => {
    if (gameOver) return;

    
    const emptySquares = currentBoard
      .map((value, index) => (value === null ? index : null))
      .filter((value) => value !== null);

    if (emptySquares.length === 0) return;

    const randomIndex = Math.floor(Math.random() * emptySquares.length);
    const newBoard = [...currentBoard];
    newBoard[emptySquares[randomIndex]] = "O";

    setBoard(newBoard);
    setXIsNext(true);
    checkGameOver(newBoard);
  };

  const calculateWinningSquares = (squares, winner) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      if (squares[a] === winner && squares[b] === winner && squares[c] === winner) {
        return line;
      }
    }
    return [];
  };

  const checkGameOver = (squares) => {
    const winner = calculateWinner(squares);
    if (winner) {
      setGameOver(true);
      setWinnerSquares(calculateWinningSquares(squares, winner));
    } else if (squares.every((square) => square !== null)) {
      setGameOver(true);
    }
  };

  const renderSquare = (i, isWinnerSquare) => (
    <button
      className={`square ${board[i]} ${isWinnerSquare ? "winner" : ""}`}
      onClick={() => handleClick(i)}
    >
      {board[i]}
    </button>
  );

  const getStatus = () => {
    const winner = calculateWinner(board);
    if (gameOver) {
      if (winner) {
        return <span className="winner-text">{winner} wins!</span>;
      } else {
        return <span className="draw-text">It's a draw!</span>;
      }
    } else {
      return `Next player: ${xIsNext ? "X" : "O"}`;
    }
  };

  const handleReplay = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setGameOver(false);
    setWinnerSquares([]);
  };

  const handleModeSelect = (selectedMode) => {
    setMode(selectedMode);
    handleReplay();
  };

  if (!mode) {
    return (
      <div className="mode-selection">
        <h2>Select Game Mode</h2>
        <button onClick={() => handleModeSelect("one-player")}>One Player</button>
        <button onClick={() => handleModeSelect("two-player")}>Two Player</button>
      </div>
    );
  }

  return (
    <div className="tic-tac-toe">
      <h2>Tic-Tac-Toe</h2>
      <div className="status">{getStatus()}</div>
      <div className="board">
        <div className="board-row">
          {renderSquare(0, winnerSquares.includes(0))}
          {renderSquare(1, winnerSquares.includes(1))}
          {renderSquare(2, winnerSquares.includes(2))}
        </div>
        <div className="board-row">
          {renderSquare(3, winnerSquares.includes(3))}
          {renderSquare(4, winnerSquares.includes(4))}
          {renderSquare(5, winnerSquares.includes(5))}
        </div>
        <div className="board-row">
          {renderSquare(6, winnerSquares.includes(6))}
          {renderSquare(7, winnerSquares.includes(7))}
          {renderSquare(8, winnerSquares.includes(8))}
        </div>
      </div>
      {gameOver && (
        <button className="replay-button" onClick={handleReplay}>
          Play Again
        </button>
      )}
      <div className="particle-container">
        <Particle />
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
      [0, 4, 8],
    [2, 4, 6],
  ];

  for (const line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;
