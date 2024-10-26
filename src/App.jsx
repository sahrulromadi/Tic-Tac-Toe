import React from "react";

const Board = () => {
  return (
    <div className="board w-1/2 grid grid-cols-3 mx-auto lg:w-1/4">
      {[...Array(9)].map((_, index) => {
        return (
          <button
            key={index}
            className="w-full h-full aspect-square bg-orange-500 border border-orange-200 hover:bg-blue-500 text-white"
          >
            X
          </button>
        );
      })}
    </div>
  );
};

const App = () => {
  return (
    <main className="min-h-screen flex justify-center items-center bg-gray-900">
      <div className="container text-center space-y-20 lg:space-y-16">
        <div className="text space-y-3">
          <h1 className="title text-orange-500">Games</h1>
          <h2 className="sub-title text-orange-200">Tic Tac Toe</h2>
        </div>
        <Board />
      </div>
    </main>
  );
};

export default App;
