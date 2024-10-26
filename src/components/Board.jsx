import React, { useState } from "react";
import { Square } from "./Square";

export const Board = () => {
  // 9 array dengan isi null
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (index) => {
    // buat array baru
    const nextSquare = squares.slice();
    // isi dengan X
    nextSquare[index] = "X";
    // masukkan ke squares
    setSquares(nextSquare);
  };

  return (
    <div className="board w-1/2 grid grid-cols-3 mx-auto lg:w-1/4">
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
