import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/praiaMarAluminio.jpg';
import Sino from '../assets/images/sino.jpg';
// import Jovem from '../assets/images/logo-jovem.png';


const Header = () => {    
  
  const [menuOpen, setMenuOpen] = useState(false);
  

  
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="fixed w-full bg-white font-roboto flex items-center justify-between p-5 h-[80px] border-b border-gray-300 z-50">
      <Link to={"/"}>
        <img src={Logo} alt="Logo" className="w-[120px]" />
      </Link>

      {/* Menu Hamburguer apenas mobile */}
      <button className="lg:hidden text-gray-700" onClick={toggleMenu}>
      </button>

      {/* Menu de Navegação */}
      <nav
        className={`fixed lg:relative top-[80px] lg:top-0 left-0 w-full lg:w-auto h-[calc(100vh-80px)] lg:h-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none
          lg:flex lg:items-center transition-transform duration-300 lg:transform-none
          ${menuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <ul className="flex flex-col lg:flex-row items-start lg:items-center h-full lg:h-auto px-5 lg:px-0 py-8 lg:py-0 space-y-6 lg:space-y-0 lg:gap-8 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-gray-900 lg:hover:underline" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/shop" className="hover:text-gray-900 lg:hover:underline" onClick={toggleMenu}>Shop</Link></li>
          <li><Link to="/#" className="hover:text-gray-900 lg:hover:underline" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/contact" className="hover:text-gray-900 lg:hover:underline" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>

      {/* Ícones do carrinho e perfil */}
      <div className="flex items-center space-x-4">
        <button >
          <img src={Sino} alt="log" className="cursor-pointer w-[30px]" />
        </button>

        
      </div>

    </div>
  );
};

export default Header;