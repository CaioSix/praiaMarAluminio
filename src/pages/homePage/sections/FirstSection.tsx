import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ClipboardList,
  DollarSign,
  EyeOff,
  Eye,
  Star,
  Wrench,
  Bookmark,
  ArrowRight,
} from 'lucide-react';

const FirstSection = () => {
  const navigate = useNavigate();
  const [mostrarValor, setMostrarValor] = useState(false);
  const valorVendas = 'R$ 11.700';

  return (
    <div className="relative flex flex-col h-full font-sans w-full max-w-full overflow-hidden">

  <div className="flex-1 p-4 space-y-4 w-full max-w-full box-border">



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
        <div className="flex justify-between space-x-2 w-full">
  {/* Card de Orçamentos */}
  <div className="bg-white rounded-md p-3 flex-1 flex flex-col items-center shadow">
    <ClipboardList className="mb-1 w-5 h-5 text-blue-500" />
    <span className="text-lg font-bold">70</span>
    <p className="text-xs text-gray-600 text-center">Orçamentos no mês</p>
  </div>

  {/* Card de Vendas */}
  <div className="bg-white rounded-md p-3 flex-1 flex flex-col items-center shadow relative">
    <DollarSign className="mb-1 w-5 h-5 text-green-500" />
    <button
      onClick={() => setMostrarValor(!mostrarValor)}
      className="absolute top-1 right-1 text-gray-400 hover:text-gray-600 transition-all"
    >
      {mostrarValor ? (
        <Eye className="w-4 h-4" />
      ) : (
        <EyeOff className="w-4 h-4" />
      )}
    </button>
    <span className="text-lg font-bold">
      {mostrarValor ? valorVendas : '***'}
    </span>
    <p className="text-xs text-gray-600 text-center">Vendas no mês</p>
  </div>
</div>


        {/* Últimos clientes */}
        <div className="bg-white rounded-md p-3 shadow text-xs w-full">
          <h3 className="font-semibold mb-1">Últimos clientes</h3>
          <hr className="mb-1" />
          <ul className="space-y-1">
            <li><Star className="inline w-4 h-4 mr-1 text-yellow-400" /> Paulo – Ubatuba</li>
            <li><Star className="inline w-4 h-4 mr-1 text-yellow-400" /> Willian – Campos</li>
            <li><Star className="inline w-4 h-4 mr-1 text-yellow-400" /> Nego – Ubatuba</li>
          </ul>
        </div>

        {/* Tipologias e Preços */}
        <div className="flex justify-between space-x-2 w-full">
          <button className="bg-black text-white flex-1 py-2 rounded-xl text-xs hover:bg-gray-800 transition-all">
            TIPOLOGIAS <Wrench className="inline w-4 h-4 ml-1" />
          </button>
          <button className="bg-black text-white flex-1 py-2 rounded-xl text-xs hover:bg-gray-800 transition-all">
            PREÇOS <Bookmark className="inline w-4 h-4 ml-1" />
          </button>
        </div>

        {/* Carrossel de orçamento rápido */}
        
      
  
{/* Carrossel de orçamento rápido */}
<div>
  <h3 className="text-center font-bold text-sm mb-2">Orçamento rápido</h3>
  <div className="w-full overflow-x-auto no-scrollbar">
    <div className="flex space-x-2 snap-x snap-mandatory w-fit px-1 pb-2 max-w-full">
      {[
        'Box F1', 'Janela eng.', 'Janela 2F suprema',
        'Porta balcão', 'Max Ar', 'Porta de correr', 'Janela 4F'
      ].map((item, index) => (
        <button
          key={index}
          onClick={() => navigate(`/orcamentoRapido?produto=${encodeURIComponent(item)}`)}
          className="bg-white shadow px-4 py-2 rounded-md text-xs font-semibold flex-shrink-0 snap-start whitespace-nowrap hover:bg-gray-100 transition-all"
        >
          {item}
        </button>
      ))}
    </div>
  </div>
</div>
         {/* Botão orçamento rápido */}
        <button
          onClick={() => navigate('/orcamentoRapido?produto=Box+F1')}
          className="bg-black text-white w-full py-2 mt-2 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-all mb-4"
        >
          ORÇAMENTO RÁPIDO <ArrowRight className="inline w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default FirstSection;
