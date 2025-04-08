import { FaRegBell } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-3">
      {/* Topo */}
      <div className="flex items-center space-x-3">
        <img
          src="/avatar.png"
          alt="Avatar"
          className="rounded-full w-12 h-12 object-cover"
        />
        <div>
          <h2 className="font-bold text-lg">Rhuan Guilherme</h2>
          <p className="text-gray-500 text-xs">Bem vindo</p>
        </div>
      </div>

      <div className="relative">
        <FaRegBell className="w-6 h-6 text-orange-500" />
        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping" />
      </div>
    </div>
  );
};

export default Header;
