import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Banco de preços do m² de vidro por cor
const precoVidroPorCor: Record<string, number> = {
  incolor: 123.88,
  fume: 134.90,
  verde: 128.45
};

// Base de dados dos kits por modelo e cor
const kits: Record<string, Record<string, Record<number, number>>> = {
  redondo: {
    branco: {
      100: 96.36,
      120: 105.80,
      133: 111.47,
      140: 115.45,
      150: 119.43,
      160: 124.69,
      180: 135.36
    }
  },
  quadrado: {
    branco: {
      100: 105.99,
      120: 116.38,
      133: 122.62,
      140: 126.99,
      150: 131.37,
      160: 137.16,
      180: 148.89
    }
  }
};

const arredondarMultiplo = (valor: number, multiplo: number) =>
  Math.ceil(valor / multiplo) * multiplo;

const OrcamentoRapido = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const produto = params.get('produto') || 'Produto';

  const [largura, setLargura] = useState(1040);
  const [corVidro, setCorVidro] = useState('incolor');
  const [modeloKit, setModeloKit] = useState<'redondo' | 'quadrado'>('redondo');
  const [corKit, setCorKit] = useState('branco');
  const [precoFinal, setPrecoFinal] = useState(0);

  const margemLucro = 2; // 100%

  const ajustarLargura = (valor: number) => {
    setLargura((prev) => Math.max(500, prev + valor));
  };

  useEffect(() => {
    // Lógica de cálculo
   // Adiciona transpasse mínimo de 25mm e arredonda para múltiplo de 50
const arredondarMultiplo = (valor: number, multiplo: number) => {
  return Math.ceil(valor / multiplo) * multiplo;
};

const larguraComTranspasse = largura + 25;
const larguraTotal = arredondarMultiplo(larguraComTranspasse, 50);

// Divide a largura total em múltiplos de 50 priorizando a porta
let metade = larguraTotal / 2;
let larguraFixa = Math.floor(metade / 50) * 50;
let larguraPorta = larguraTotal - larguraFixa;

if (larguraPorta < larguraFixa) {
  [larguraFixa, larguraPorta] = [larguraPorta, larguraFixa];
}



    // Altura padrão
    const alturaFixo = 1845;
    const alturaPorta = 1880;

    // Cálculo m²
    const areaFixo = arredondarMultiplo((alturaFixo * larguraFixa) / 1_000_000, 0.01);
    const areaPorta = arredondarMultiplo((alturaPorta * larguraPorta) / 1_000_000, 0.01);

    // Preço vidro
    const precoVidro = precoVidroPorCor[corVidro] || 0;
    const precoFixo = precoVidro * areaFixo;
    const precoPorta = precoVidro * areaPorta;

    console.clear();
    console.log('🧱 Largura total:', larguraTotal);
    console.log('📏 Fixo:', larguraFixa, 'mm | Área:', areaFixo, 'm² | R$', precoFixo.toFixed(2));
    console.log('📏 Porta:', larguraPorta, 'mm | Área:', areaPorta, 'm² | R$', precoPorta.toFixed(2));

    const custoVidros = precoFixo + precoPorta;

    // Seleção do kit
    const kitsDisponiveis = [100, 120, 133, 140, 150, 160, 180];
    const larguraEmCm = larguraTotal / 10;
    const medidaKit = kitsDisponiveis.find((k) => larguraEmCm <= k) || 180;
    const precoKit = kits[modeloKit]?.[corKit]?.[medidaKit] ?? 0;

    console.log(`🧰 Kit: ${modeloKit} ${corKit} ${medidaKit}cm | R$ ${precoKit.toFixed(2)}`);

    const custoTotal = custoVidros + precoKit;
    const precoComMargem = custoTotal * margemLucro;
    const precoArredondado = arredondarMultiplo(precoComMargem, 10);

    console.log('🧾 Custo Total:', custoTotal.toFixed(2));
    console.log('💰 Preço com margem:', precoComMargem.toFixed(2));
    console.log('💵 Preço final arredondado:', precoArredondado);

    setPrecoFinal(precoArredondado);
  }, [largura, corVidro, modeloKit, corKit]);

  return (
    <div className="h-full bg-white p-6 flex flex-col items-center">
      <h1 className="text-xl font-bold mb-4">Orçamento Rápido</h1>
      <p className="text-lg mb-2">Produto: <strong>{produto}</strong></p>

      <div className="flex items-center space-x-2 mb-4">
        <button onClick={() => ajustarLargura(-100)} className="bg-gray-200 px-3 py-2 rounded text-lg">-100</button>
        <button onClick={() => ajustarLargura(-50)} className="bg-gray-200 px-3 py-2 rounded text-lg">-50</button>

        <input
          type="number"
          className="border text-center w-28 text-xl font-bold py-2 rounded"
          value={largura}
          onChange={(e) => setLargura(Number(e.target.value))}
        />

        <button onClick={() => ajustarLargura(+50)} className="bg-gray-200 px-3 py-2 rounded text-lg">+50</button>
        <button onClick={() => ajustarLargura(+100)} className="bg-gray-200 px-3 py-2 rounded text-lg">+100</button>
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">Cor do vidro:</label>
        <select value={corVidro} onChange={(e) => setCorVidro(e.target.value)} className="border p-2 rounded">
          {Object.keys(precoVidroPorCor).map((cor) => (
            <option key={cor} value={cor}>{cor}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">Modelo do Kit:</label>
        <div className="flex gap-4 justify-center">
          <label>
            <input type="radio" name="modeloKit" value="redondo" checked={modeloKit === 'redondo'} onChange={() => setModeloKit('redondo')} />
            Redondo
          </label>
          <label>
            <input type="radio" name="modeloKit" value="quadrado" checked={modeloKit === 'quadrado'} onChange={() => setModeloKit('quadrado')} />
            Quadrado
          </label>
        </div>
      </div>

      <div className="mb-6">
        <label className="block font-bold mb-1">Cor do Kit:</label>
        <select value={corKit} onChange={(e) => setCorKit(e.target.value)} className="border p-2 rounded">
          <option value="branco">Branco</option>
          {/* você pode adicionar outras cores aqui */}
        </select>
      </div>

      <div className="text-2xl font-bold text-green-600">Valor estimado: R$ {precoFinal.toFixed(2)}</div>
    </div>
  );
};

export default OrcamentoRapido;
