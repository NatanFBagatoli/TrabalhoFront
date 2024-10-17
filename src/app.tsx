import React, { useState } from 'react';

export function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
    dataNascimento: '',
    sexo: '',
    cep: '',
    endereco: '',
    complemento: '',
    cidade: '',
    uf: '',
    cargo: '',
    departamento: '',
    unidadeSenai: '',
  });

  const handleNumericInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAlphabeticInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, ''); // Remove non-alphabetic characters
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      cpf: '',
      dataNascimento: '',
      sexo: '',
      cep: '',
      endereco: '',
      complemento: '',
      cidade: '',
      uf: '',
      cargo: '',
      departamento: '',
      unidadeSenai: '',
    });
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center w-full h-full bg-cover bg-center"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <header className="w-full py-7 px-7" style={{ backgroundColor: "#1a88db" }}>
        <nav className="flex justify-between items-center">
          <div className="text-5xl font-bold text-white ml-8">S E N A I</div>
        </nav>
      </header>

      {/* Formulário de Cadastro */}
      <div className="container mx-auto mt-10 bg-gray-200 p-10 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold mb-8">Cadastrar Usuário</h1>

        <form className="grid grid-cols-2 gap-8">
          {/* Informações pessoais */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Informações Pessoais</h2>
            <div className="mb-4">
              <label>Nome Completo:</label>
              <input
                className="w-full p-2 border rounded"
                type="text"
                name="nome"
                value={formData.nome}
                onInput={handleAlphabeticInput}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label>E-mail Pessoal:</label>
              <input
                className="w-full p-2 border rounded"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label>Telefone Celular:</label>
              <input
                className="w-full p-2 border rounded"
                type="tel"
                name="telefone"
                value={formData.telefone}
                onInput={handleNumericInput}
                onChange={handleChange}
                maxLength={11}
              />
            </div>
            <div className="mb-4">
              <label>CPF:</label>
              <input
                className="w-full p-2 border rounded"
                type="text"
                name="cpf"
                value={formData.cpf}
                onInput={handleNumericInput}
                onChange={handleChange}
                maxLength={11}
              />
            </div>
            <div className="mb-4">
              <label>Data de Nascimento:</label>
              <input
                className="w-full p-2 border rounded"
                type="date"
                name="dataNascimento"
                value={formData.dataNascimento}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label>Sexo:</label>
              <select
                className="w-full p-2 border rounded"
                name="sexo"
                value={formData.sexo}
                onChange={handleChange}
              >
                <option value="">Selecione</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
              </select>
            </div>
          </div>

          {/* Informações de Endereço */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Informações de Endereço</h2>
            <div className="mb-4">
              <label>CEP:</label>
              <input
                className="w-full p-2 border rounded"
                type="text"
                name="cep"
                value={formData.cep}
                onInput={handleNumericInput}
                onChange={handleChange}
                maxLength={8}
              />
            </div>
            <div className="mb-4">
              <label>Endereço:</label>
              <input
                className="w-full p-2 border rounded"
                type="text"
                name="endereco"
                value={formData.endereco}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label>Complemento:</label>
              <input
                className="w-full p-2 border rounded"
                type="text"
                name="complemento"
                value={formData.complemento}
                onInput={handleAlphabeticInput}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label>Cidade:</label>
              <input
                className="w-full p-2 border rounded"
                type="text"
                name="cidade"
                value={formData.cidade}
                onInput={handleAlphabeticInput}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label>UF:</label>
              <input
                className="w-full p-2 border rounded"
                type="text"
                name="uf"
                value={formData.uf}
                onInput={handleAlphabeticInput}
                onChange={handleChange}
                maxLength={2}
              />
            </div>
          </div>

          {/* Informações Profissionais */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Informações Profissionais</h2>
            <div className="mb-4">
              <label>Cargo:</label>
              <input
                className="w-full p-2 border rounded"
                type="text"
                name="cargo"
                value={formData.cargo}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label>Departamento:</label>
              <input
                className="w-full p-2 border rounded"
                type="text"
                name="departamento"
                value={formData.departamento}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label>Unidade SENAI:</label>
              <input
                className="w-full p-2 border rounded"
                type="text"
                name="unidadeSenai"
                value={formData.unidadeSenai}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>

        <div className="flex justify-end mt-6 space-x-4">
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded"
            onClick={handleClear}
            type="button"
          >
            Limpar
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">
            Cadastrar Usuário
          </button>
        </div>
      </div>
    </div>
  );
}
