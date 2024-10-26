import React from "react";
import { Board } from "../src/components/Board";

const App = () => {
  return (
    <main className="min-h-screen flex justify-center items-center bg-gray-900">
      <div className="container text-center space-y-20 lg:space-y-16">
        <div className="text space-y-3">
          <h1 className="title text-orange-500">Games</h1>
          <h2 className="sub-title text-orange-200">Tic Tac Toe</h2>
        </div>
        {/* components */}
        <Board />
        {/* components end */}
      </div>
    </main>
  );
};

export default App;
