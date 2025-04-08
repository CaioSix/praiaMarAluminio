import React from 'react'
import {
  ClipboardList,
  DollarSign,
  EyeOff,
  Star,
  Wrench,
  Bookmark,
  ArrowRight,
} from 'lucide-react'

const FirstSection = () => {
  return (
    <div className="relative flex flex-col h-screen font-sans pb-20">
      {/* Conteúdo principal com espaçamento proporcional */}
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {/* Botões principais */}
        <div className="space-y-2">
          <button className="bg-black text-white w-full py-2 rounded-xl text-sm hover:bg-gray-800 transition-all">
            ORÇAMENTO <ClipboardList className="inline ml-2 w-4 h-4" />
          </button>
          <button className="bg-black text-white w-full py-2 rounded-xl text-sm hover:bg-gray-800 transition-all">
            LISTAS <ClipboardList className="inline ml-2 w-4 h-4" />
          </button>
        </div>

        {/* Cards status */}
        <div className="flex justify-between space-x-2">
          <div className="bg-white rounded-md p-3 flex-1 flex flex-col items-center shadow">
            <ClipboardList className="mb-1 w-5 h-5 text-blue-500" />
            <span className="text-lg font-bold">70</span>
            <p className="text-xs text-gray-600 text-center">Orçamentos no mês</p>
          </div>
          <div className="bg-white rounded-md p-3 flex-1 flex flex-col items-center shadow relative">
            <DollarSign className="mb-1 w-5 h-5 text-green-500" />
            <EyeOff className="absolute top-1 right-1 w-4 h-4 text-gray-400" />
            <span className="text-lg font-bold">R$ 11.700</span>
            <p className="text-xs text-gray-600 text-center">Vendas no mês</p>
          </div>
        </div>

        {/* Últimos clientes */}
        <div className="bg-white rounded-md p-3 shadow text-xs">
          <h3 className="font-semibold mb-1">Últimos clientes</h3>
          <hr className="mb-1" />
          <ul className="space-y-1">
            <li><Star className="inline w-4 h-4 mr-1 text-yellow-400" /> Paulo – Ubatuba</li>
            <li><Star className="inline w-4 h-4 mr-1 text-yellow-400" /> Willian – Campos</li>
            <li><Star className="inline w-4 h-4 mr-1 text-yellow-400" /> Nego – Ubatuba</li>
          </ul>
        </div>

        {/* Tipologias e Preços */}
        <div className="flex justify-between space-x-2">
          <button className="bg-black text-white flex-1 py-2 rounded-xl text-xs hover:bg-gray-800 transition-all">
            TIPOLOGIAS <Wrench className="inline w-4 h-4 ml-1" />
          </button>
          <button className="bg-black text-white flex-1 py-2 rounded-xl text-xs hover:bg-gray-800 transition-all">
            PREÇOS <Bookmark className="inline w-4 h-4 ml-1" />
          </button>
        </div>

        {/* Carrossel de orçamento rápido */}
        <div>
          <h3 className="text-center font-bold text-sm mb-1">Orçamento rápido</h3>
          <div className="flex overflow-x-auto space-x-2 no-scrollbar px-1 pb-1 snap-x snap-mandatory">
            {[
              'Box F1', 'Janela eng.', 'Janela 2F suprema',
              'Porta balcão', 'Max Ar', 'Porta de correr', 'Janela 4F'
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow px-3 py-2 rounded-md text-xs font-semibold flex-shrink-0 snap-start"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Botão orçamento rápido */}
        <button className="bg-black text-white w-full py-2 mt-2 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-all">
          ORÇAMENTO RÁPIDO <ArrowRight className="inline w-4 h-4 ml-2" />
        </button>
      </div>

      {/* Rodapé fixo */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow px-4 py-2 flex justify-between items-center z-50">
        <img src="/logoPraiaMar.png" alt="Logo Praia Mar" className="h-10" />
        <div className="flex gap-2">
          <div className="bg-orange-500 rounded-full w-9 h-9 flex items-center justify-center text-white hover:scale-105 transition-transform">
            🏠
          </div>
          <div className="bg-orange-500 rounded-full w-9 h-9 flex items-center justify-center text-white hover:scale-105 transition-transform">
            ⏪
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstSection
