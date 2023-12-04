import React from "react";

import Square from "./Square";

import { findWinner } from "@/app/func";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const Board = ({ squares, onPlay, playerX, onReset }) => {
  const handleClick = (i) => {
    if (findWinner(squares) || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    if (playerX) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares);
  };

  const winner = findWinner(squares);
  let status;
  let step;

  if (winner) {
    status = winner;
    step = "Finish";
  } else {
    status = "On Play";
    step = playerX ? "X" : "O";
  }

  return (
    <div style={containerStyle} className="gameBoard">
      <div
        id="statusArea"
        className=" text-white font-bold text-[40px] md:text-[60px] mb-3"
      >
        {step == "Finish" ? (
          <>
            The winner is <span>{status}</span>
          </>
        ) : (
          <>
            Next player: <span>{step}</span>
          </>
        )}
      </div>
      <div className="w-full flex items-center justify-center flex-col">
        <div className="flex">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="flex">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="flex">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      <button
        onClick={onReset}
        className=" bg-cyan-400 py-2 px-6 rounded-full mt-6 hover:bg-cyan-500"
      >
        Reset
      </button>
    </div>
  );
};

export default Board;
