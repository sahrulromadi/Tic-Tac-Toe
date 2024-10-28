import React, { useEffect, useState } from "react";

export const ModalWinner = ({ winner, isDraw }) => {
  const [modalOpen, setOpenModal] = useState(false);

  useEffect(() => {
    if (winner || isDraw) {
      setOpenModal(true);
    }
  }, [winner, isDraw]);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return modalOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-orange-500 rounded-lg shadow-lg text-center space-y-10 px-20 py-10 md:px-64 md:py-10">
        <h2 className="text-blue-500">
          {winner ? `Pemenang: ${winner}` : "Seri"}
        </h2>
        <p className="text-white">
          {winner ? "Selamat, Anda Menang!" : "Ayo, bermain lagi!"}
        </p>
        <button
          onClick={handleCloseModal}
          className="bg-blue-500 px-4 py-2 text-white rounded-lg hover:bg-blue-600"
        >
          Tutup
        </button>
      </div>
    </div>
  ) : null;
};
