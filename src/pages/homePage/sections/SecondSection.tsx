import {useState} from 'react'
import CardStatus from '../../../components/CardStatus'
import {   ClipboardList,
    DollarSign,
    EyeOff,
    Eye, } from 'lucide-react'

const SecondSection = () => {
      const [mostrarValor, setMostrarValor] = useState(false);
    
    return (
        <>
            <CardStatus
                kind="primary"
                princiLabel="70"
                label="Orçamentos no mês"
                wordKindPrinci="primary"
                wordKindLabel="secondary"
            >
                <ClipboardList className="mb-1 w-5 h-5 text-blue-500" />
            </CardStatus>

            {/* Card de Vendas */}

            <CardStatus
                kind="primary"
                princiLabel={mostrarValor ? 'R$ 11.700' : '***'}
                label="Vendas no mês"
                wordKindPrinci="primary"
                wordKindLabel="secondary"
            >
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
                <DollarSign className="mb-1 w-5 h-5 text-green-500" />
            </CardStatus>
        </>
    )
}

export default SecondSection