import React from "react";

export const Square = ({ value, onSquareClick }) => {
  return (
    <button
      onClick={onSquareClick}
      className="w-full h-full aspect-square bg-orange-500 border border-orange-200 hover:bg-blue-500 text-white"
    >
      {value}
    </button>
  );
};
