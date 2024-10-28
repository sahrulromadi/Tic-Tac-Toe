import React from "react";

export const History = ({ history, setCurrentMove, setIsNext }) => {
  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
    setIsNext(nextMove % 2 === 0);
  };

  const moves = history.map((squares, move) => {
    let desc;
    if (move > 0) {
      desc = "Move to #" + move;
    } else {
      desc = "Game start";
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className="text-white">
      <ol className="list-decimal space-y-2">{moves}</ol>
    </div>
  );
};
