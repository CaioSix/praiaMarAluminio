import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/Home";
import OrcamentoRapido from "./pages/orcamentoRapido/OrcamentoRapido";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex justify-center overflow-x-hidden"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <BrowserRouter>
        <div className="h-screen flex flex-col w-full max-w-md">
          <Header />
          <main className="flex-grow overflow-auto w-full px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/orcamentoRapido" element={<OrcamentoRapido />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
