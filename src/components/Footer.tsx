import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center mt-3 px-4 py-2 bg-white shadow-md">
      <img
        src="/logoPraiaMar.png"
        alt="Logo Praia Mar"
        className="h-10"
      />
      <div className="flex gap-2">
        <button
          onClick={() => navigate('/')}
          className="bg-orange-500 rounded-full w-9 h-9 flex items-center justify-center text-white hover:scale-105 transition-transform"
        >
          🏠
        </button>
        <button
          onClick={() => navigate(-1)}
          className="bg-orange-500 rounded-full w-9 h-9 flex items-center justify-center text-white hover:scale-105 transition-transform"
        >
          ⏪
        </button>
      </div>
    </div>
  );
};

export default Footer;
