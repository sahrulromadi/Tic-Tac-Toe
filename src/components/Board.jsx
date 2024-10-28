import React from "react";
import { Square } from "./Square";

export const Board = ({ squares, handleClick }) => {
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
