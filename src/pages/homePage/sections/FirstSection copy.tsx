import React from 'react'
import { Link } from 'react-router-dom'

const FirstSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center min-h-screen bg-gray-100">
      {/* Lado Esquerdo - Botões Centralizados */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-10">
        <button className="bg-black text-white px-4 py-2 mb-4">
          ORÇAMENTO!
        </button>
        <button className="bg-black text-white px-4 py-2">
          LISTAS!
        </button>
      </div>

      {/* Lado Direito - Conteúdo com Quadrados e Botões */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-10">
        <div className="flex flex-col items-center w-full">
          {/* Primeira Linha: Dois Quadrados Lado a Lado */}
          <div className="flex flex-row space-x-4 w-full justify-center">
            <div className="bg-gray-300 p-6 rounded shadow-md w-48 h-48 flex flex-col justify-center items-center">
              <div className="text-xl font-bold">Orçamento do Mês</div>
              <div className="text-lg mt-2">R$ 10.000</div>
            </div>
            <div className="bg-gray-300 p-6 rounded shadow-md w-48 h-48 flex flex-col justify-center items-center">
              <div className="text-xl font-bold">Total de Vendas</div>
              <div className="text-lg mt-2">R$ 50.000</div>
            </div>
          </div>

          {/* Segunda Linha: Quadrado Maior para Últimos Clientes */}
          <div className="bg-gray-300 p-6 rounded shadow-md w-full mt-4 flex flex-col justify-center items-center">
            <div className="text-xl font-bold">Últimos Clientes</div>
            <ul className="mt-2">
              <li>Cliente A</li>
              <li>Cliente B</li>
              <li>Cliente C</li>
            </ul>
          </div>

          {/* Botões Abaixo dos Quadrados */}
          <div className="flex flex-row space-x-4 mt-4">
            <button className="bg-black text-white px-4 py-2">
              TIPOLOGIA
            </button>
            <button className="bg-black text-white px-4 py-2">
              PREÇOS
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstSection
