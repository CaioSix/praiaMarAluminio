import {

    Star

} from 'lucide-react';
const CardLastClientes = () => {
    return (
        <>
            <div >
                <h3 className="font-semibold mb-1">Últimos clientes</h3>
                <hr className="mb-1" />
                <ul className="space-y-1">
                    <li><Star className="inline w-4 h-4 mr-1 text-yellow-400" /> Paulo – Ubatuba</li>
                    <li><Star className="inline w-4 h-4 mr-1 text-yellow-400" /> Willian – Campos</li>
                    <li><Star className="inline w-4 h-4 mr-1 text-yellow-400" /> Nego – Ubatuba</li>
                </ul>
            </div>
        </>
    )
}

export default CardLastClientes