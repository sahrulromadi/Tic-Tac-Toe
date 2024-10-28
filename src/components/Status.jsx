import React, { useState } from "react";
import { ModalWinner } from "./ModalWInner";

export const Status = ({ isNext, squares, calculateWinner, onRestart }) => {
  const winner = calculateWinner(squares);

  // draw
  const isDraw = squares.every((square) => square !== null && !winner);

  let status;
  if (winner) {
    status = "Pemenang: " + winner;
  } else if (isDraw) {
    status = "Permainan berakhir Seri";
  } else {
    status = "Next Player: Player " + (isNext ? "X" : "O");
  }

  return (
    <div className="absolute container top-5 flex flex-row items-center justify-between">
      <div className="mx-5 md:mx-0">
        <p className="text-white">{status}</p>
        {/* modal winner */}
        <ModalWinner winner={winner} isDraw={isDraw} />
        {/* modal winner end */}
      </div>

      {/* akan muncul jika ada pemenang dan berakhir seri */}
      {(winner || isDraw) && (
        <div className="mx-5 md:mx-0">
          <button
            onClick={onRestart}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Mulai lagi
          </button>
        </div>
      )}
    </div>
  );
};
