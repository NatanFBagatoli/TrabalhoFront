import { useState } from "react";
import { FaUser, FaLock, FaTimes } from "react-icons/fa"; // Importando ícones específicos

export function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = () => {
    console.log("Usuário:", username);
    console.log("Senha:", password);
  };

  const handleClose = () => {
    setShowLogin(false);
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center w-full h-full bg-cover bg-center" 
      style={{ backgroundImage: "url('/senai2.jpg')", fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Navbar */}
      <header className="w-full shadow-md py-7 px-8" style={{ backgroundColor: "#1a88db" }}>
        <nav className="flex justify-between items-center">
          <div className="text-3xl font-bold text-white">
            S E N A I
          </div>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-white hover:text-blue-600 transition">Início</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-600 transition">Sobre</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-600 transition">Serviços</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-600 transition">Contato</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-600 transition">Login</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Container de Login */}
      {showLogin && (
        <div className="container mx-auto max-w-md p-8 bg-white rounded-xl shadow-md shadow-gray-300 mt-10 relative">
          <button 
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={handleClose}
          >
            <FaTimes /> {/* Ícone de fechar */}
          </button>
          <div className="mb-6 text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-4" style={{ color: "#162938" }}>Login</h3>
          </div>
          <div className="mb-4 relative">
            <label className="block mb-2 font-semibold text-sm">Usuário</label>
            <FaUser className="absolute left-3 top-12 text-gray-400" /> {/* Ícone de usuário */}
            <input
              className="p-3 pl-10 outline-none focus:ring-2 focus:ring-blue-600 transition-all w-full rounded bg-gray-100 mb-4"
              type="text"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6 relative">
            <label className="block mb-2 font-semibold text-sm">Senha</label>
            <FaLock className="absolute left-3 top-12 text-gray-400" /> {/* Ícone de cadeado */}
            <input
              className="p-3 pl-10 outline-none focus:ring-2 focus:ring-blue-600 transition-all w-full rounded bg-gray-100 mb-4"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
  className="w-full focus:ring focus:ring-blue-600 hover:bg-[#166bb7] transition-all outline-none bg-[#1a88db] py-3 font-semibold text-white uppercase rounded "
  onClick={handleLogin}
>
  Entrar
</button>

        </div>
      )}
    </div>
  );
}
