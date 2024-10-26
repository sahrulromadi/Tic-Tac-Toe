import React, { useState } from "react";

export const Square = () => {
  const [value, SetValue] = useState(null);
  const handleClick = () => {
    SetValue("X");
  };

  return (
    <button
      onClick={handleClick}
      className="w-full h-full aspect-square bg-orange-500 border border-orange-200 hover:bg-blue-500 text-white"
    >
      {value}
    </button>
  );
};
