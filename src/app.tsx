import { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Novo estado para controlar a visibilidade da senha
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "" || password === "") {
      setError("Usuário e senha são obrigatórios!");
      return;
    }
    setError(""); // Limpa a mensagem de erro
    console.log("Usuário:", username);
    console.log("Senha:", password);
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center w-full h-full bg-cover bg-center" 
      style={{ backgroundImage: "url('/senai2.jpg')", fontFamily: "'Poppins', sans-serif" }}
    >
      <header className="w-full py-7 px-7" style={{ backgroundColor: "#1a88db" }}>
        <nav className="flex justify-between items-center">
          <div className="text-5xl font-bold text-white ml-8"> 
            S E N A I
          </div>
        </nav>
      </header>

      <div className="container mx-auto max-w-md p-16 bg-white rounded-xl border-4 shadow-xl opacity-95 shadow-blue-400 mt-24 animate-jump relative">
        <div className="mb-6 text-center">
          <h3 className="text-4xl font-bold text-blue-600 mb-4" style={{ color: "#1a88db" }}>L o g i n</h3>
        </div>
        <div className="mb-4 relative">
          <label className="block mb-2 font-semibold text-sm">Digite o seu Usuário:</label>
          <FaUser className="absolute left-3 top-12 text-gray-400" />
          <input
            className="p-3 pl-10 outline-none focus:ring-2 focus:ring-blue-300 transition-all w-full rounded bg-gray-100 mb-4"
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6 relative">
          <label className="block mb-2 font-semibold text-sm">Digite a sua Senha:</label>
          <FaLock className="absolute left-3 top-12 text-gray-400 focus-within:text-gray-600" />
          <input
            className="p-3 pl-10 outline-none focus:ring-2 focus:ring-blue-300 transition-all w-full rounded bg-gray-100 mb-4"
            type={showPassword ? "text" : "password"} // Alterna o tipo do campo
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Botão de olho para mostrar ou esconder a senha */}
          <button
            type="button"
            className="absolute right-3 top-12 text-gray-600 focus:outline-none"
            onClick={() => setShowPassword(!showPassword)} // Alterna a visibilidade da senha
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Ícone de olho aberto/fechado */}
          </button>
        </div>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Exibe a mensagem de erro */}

        <button
          className="w-full hover:bg-[#166bb7] transition-all outline-none bg-[#1a88db] py-3 font-semibold text-white uppercase rounded hover:white transition duration-500 ease-in-out hover:bg-[#166bb7] transform hover:-translate-y-1 hover:scale-110"
          onClick={handleLogin}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}