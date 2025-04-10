import { useNavigate } from 'react-router-dom';
import {


  Wrench,
  Bookmark,
  ArrowRight,
} from 'lucide-react';
// import Button from '../../components/Button';
import FirstSection from './sections/FirstSection';
import SecondSection from './sections/SecondSection';
import CardLastClientes from '../../components/CardLastClientes';
import Button from '../../components/Button';
import FastBudge from '../../components/FastBudge';


const Home = () => {
  const navigate = useNavigate();



  return (
    <div className="relative flex flex-col h-full font-sans w-full max-w-full overflow-hidden">

      <div className="flex-1 p-4 space-y-4 w-full max-w-full box-border">
        <div className="space-y-2">
          <FirstSection />
        </div>
        <div className="flex justify-between space-x-2 w-full">
          <SecondSection />
        </div>
        <div className="bg-white rounded-md p-3 shadow text-xs w-full">
          <CardLastClientes />
        </div>
        <div className="flex justify-between space-x-2 w-full">
          <Button kind="secondary">
            TIPOLOGIAS <Wrench className="inline w-4 h-4 ml-1" />
          </Button>
          <Button kind="secondary">
            PREÇOS <Bookmark className="inline w-4 h-4 ml-1" />
          </Button>
        </div>
        <div>
          <FastBudge />

        </div>


        <Button kind="thirty" onClick={() => navigate('/orcamentoRapido?produto=Box+F1')}>
          ORÇAMENTO RÁPIDO <ArrowRight className="inline w-4 h-4 ml-2" />
        </Button>




      </div>
    </div>
  );
};

export default Home;
