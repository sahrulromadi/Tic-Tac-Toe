import React from "react";
import { ModalWinner } from "./ModalWInner";

export const Status = ({ isNext, squares, calculateWinner, onRestart }) => {
  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = "Pemenang: " + winner;
  } else {
    status = "Next Player: Player " + (isNext ? "X" : "O");
  }

  return (
    <div className="absolute top-5 left-5">
      <p className="text-white">{status}</p>
      {/* modal winner */}
      <ModalWinner winner={winner} />
      {/* modal winner end */}
      {winner && (
        <button
          onClick={onRestart}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-4"
        >
          Mulai lagi
        </button>
      )}
    </div>
  );
};
