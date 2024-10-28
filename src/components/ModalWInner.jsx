import React, { useEffect, useState } from "react";

export const ModalWinner = ({ winner }) => {
  const [modalOpen, setOpenModal] = useState(false);

  useEffect(() => {
    if (winner) {
      setOpenModal(true);
    } else {
      setOpenModal(false);
    }
  }, [winner]);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return modalOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-orange-500 px-64 py-10 rounded-lg shadow-lg text-center space-y-10">
        <h2 className="text-blue-500">Pemenang: {winner}</h2>
        <p className="text-white">Selamat, Anda Menang!</p>
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
