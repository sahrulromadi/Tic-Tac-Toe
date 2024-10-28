import React, { useState } from "react";
import { Board } from "../src/components/Board";
import { Status } from "../src/components/Status";
import { History } from "../src/components/History";

const App = () => {
  // 9 array dengan isi null dan menyimpan array sebelumnya
  const [history, setHistory] = useState([Array(9).fill(null)]);

  // move saat ini
  const [currentMove, setCurrentMove] = useState(0);

  // next player
  const [isNext, setIsNext] = useState(true);

  // array sekarang
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setIsNext(!isNext); // gunakan isNext
  };

  const calculateWinner = (squares) => {
    // ambil seluruh lines dalam kondisi menang
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // logic
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  return (
    <main className="min-h-screen relative flex justify-center items-center bg-gray-900">
      <Status
        isNext={isNext}
        squares={currentSquares} // gunakan currentSquares
        calculateWinner={calculateWinner}
      />
      <div className="container text-center space-y-20 lg:space-y-16">
        <div className="text space-y-3">
          <h1 className="title text-orange-500">Games</h1>
          <h2 className="sub-title text-orange-200">Tic Tac Toe</h2>
        </div>
        <div className="flex items-center justify-center gap-20">
          <Board
            squares={currentSquares}
            onPlay={handlePlay}
            isNext={isNext}
            calculateWinner={calculateWinner}
          />
          <History
            history={history}
            setCurrentMove={setCurrentMove}
            setIsNext={setIsNext}
          />
        </div>
      </div>
    </main>
  );
};

export default App;
