"use client";

import React, { useState } from "react";

import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const playerX = currentMove % 2 === 0;
  const activeSquare = history[currentMove];

  const handlePlay = (next) => {
    const nextHistory = [...history.slice(0, currentMove + 1), next];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const reset = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  };

  return (
    <Board
      playerX={playerX}
      squares={activeSquare}
      onPlay={handlePlay}
      onReset={reset}
    />
  );
};

export default Game;
