import React, { useState } from "react";
import { Square } from "./Square";

export const Board = () => {
  // 9 array dengan isi null
  const [squares, setSquares] = useState(Array(9).fill(null));

  // next player
  const [isNext, setIsNext] = useState(true);

  const handleClick = (index) => {
    // menangani bug agar tidak bisa ganti
    if (squares[index]) {
      return;
    }

    // buat array baru
    const nextSquare = squares.slice();

    // isi value dengan X / O
    nextSquare[index] = isNext ? "X" : "O";

    // masukkan ke squares
    setSquares(nextSquare);

    // ganti value
    setIsNext(!isNext);
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
