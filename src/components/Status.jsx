import React from "react";
import { ModalWinner } from "./ModalWInner";

export const Status = ({ isNext, squares, calculateWinner }) => {
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
    </div>
  );
};
