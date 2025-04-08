import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/Home";
import Header from "./components/Header";

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>


    </BrowserRouter>
  )
}

export default App
