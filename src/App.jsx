import React, { useState } from "react";
import { Board } from "../src/components/Board";
import { Status } from "../src/components/Status";

const App = () => {
  // 9 array dengan isi null
  const [squares, setSquares] = useState(Array(9).fill(null));

  // next player
  const [isNext, setIsNext] = useState(true);

  const handleClick = (index) => {
    // agar tidak bisa ditekan lagi
    if (squares[index] || calculateWinner(squares)) {
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
    <main className="min-h-screen relative flex justify-center items-center bg-gray-900">
      <Status
        isNext={isNext}
        squares={squares}
        calculateWinner={calculateWinner}
      />
      <div className="container text-center space-y-20 lg:space-y-16">
        <div className="text space-y-3">
          <h1 className="title text-orange-500">Games</h1>
          <h2 className="sub-title text-orange-200">Tic Tac Toe</h2>
        </div>
        <Board squares={squares} handleClick={handleClick} />
      </div>
    </main>
  );
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default App;
