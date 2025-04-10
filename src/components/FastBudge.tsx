import { useNavigate } from 'react-router-dom';

const FastBudge = () => {
    const navigate = useNavigate();

    return (
        <>
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
        </>
    )
}

export default FastBudge