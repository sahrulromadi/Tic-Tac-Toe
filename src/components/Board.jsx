import React from "react";
import { Square } from "./Square";

export const Board = ({ isNext, squares, onPlay, calculateWinner }) => {
  const handleClick = (index) => {
    // agar tidak bisa ditekan lagi
    if (squares[index]) {
      return;
    }

    // buat array baru
    const nextSquares = squares.slice();

    // isi value dengan X / O
    nextSquares[index] = isNext ? "X" : "O";

    // masukkan ke squares
    onPlay(nextSquares);
  };

  return (
    <div className="board w-1/2 grid grid-cols-3 lg:w-1/4">
      {Array.from({ length: 9 }).map((_, index) => {
        return (
          <Square
            key={index}
            value={squares[index]}
            onSquareClick={() => handleClick(index)}
          />
        );
      })}
    </div>
  );
};
