'use client'

import { useState, useEffect } from "react";
import "./projeto1.css";

function Pagina_jose() {
  const [imagens, setImagens] = useState([
    { nome: null, corte: null, preco: null },
    { nome: null, corte: null, preco: null },
    { nome: null, corte: null, preco: null },
    { nome: null, corte: null, preco: null },
    { nome: null, corte: null, preco: null }
  ]);
  
  const [linhaSelecionada, setLinhaSelecionada] = useState(null);
  const [exibirCampos, setExibirCampos] = useState(false); // Estado para controlar a visibilidade dos campos de nome e preço

  // Carregar dados do localStorage quando o componente for montado
  useEffect(() => {
    const dadosSalvos = localStorage.getItem('imagens');
    if (dadosSalvos) {
      setImagens(JSON.parse(dadosSalvos));
    }
  }, []);

  // Função para lidar com mudanças nos campos de texto (nome, preço)
  const handleTextChange = (e, tipo, index) => {
    const newImagens = [...imagens];
    newImagens[index][tipo] = e.target.value;
    setImagens(newImagens); // Atualiza o estado com os novos valores
  };

  // Função para adicionar uma imagem ao corte da tabela
  const adicionarImagem = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImagens = [...imagens];
        newImagens[index].corte = reader.result;  // Salva a imagem no formato base64
        setImagens(newImagens); // Atualiza o estado com a nova imagem
      };
      reader.readAsDataURL(file);  // Converte a imagem para base64
    }
  };

  // Função para salvar os dados no localStorage
  const salvarDados = () => {
    localStorage.setItem('imagens', JSON.stringify(imagens)); // Salva os dados no localStorage
    alert('Alterações salvas com sucesso!');
  };

  // Função para adicionar uma nova linha à tabela
  const adicionarLinha = () => {
    setImagens([...imagens, { nome: null, corte: null, preco: null }]);
  };

  // Função para apagar uma linha
  const apagarLinha = (index) => {
    const newImagens = imagens.filter((_, i) => i !== index);
    setImagens(newImagens); // Atualiza o estado após apagar a linha
  };

  return (
    <div>
      <div className="logo">
        <button><i className="fa-solid fa-list"></i> Menu</button>
        <img
          src="https://img.freepik.com/vetores-premium/belos-cachos-de-cabelo-e-pente-de-tesoura_261524-3013.jpg?semt=ais_hybrid"
          alt="Logo da Empresa"
          className="logo-img"
        />
        <a href="https://gaming.amazon.com/home" target="_blank" className="logo-link">Instagram</a>
      </div>

      <div className="container">
        <div className="ADcortes">
          <br />
          <h2>Alterar Cortes</h2>

          <div className="final">
            <button onClick={salvarDados}>Finalizar</button><br /><br /><br />
            <button onClick={adicionarLinha}>Adicionar Linha</button><br /><br /><br />
          </div>
        </div>

        <table style={{ width: '100%' }}>
          <tbody>
          <tr>
              <th> NOME </th>
              <th> FOTO </th>
              <th> PREÇO </th>
              <th> APAGAR </th>
            </tr>

            {imagens.map((imagem, index) => (
              <tr key={index}>
                <td className="corte">
                  <button 
                    onClick={() => setExibirCampos(!exibirCampos)} 
                    style={{ marginBottom: '10px' }}
                  >
                    {exibirCampos ? 'Ocultar campos' : 'Adicionar Nome e Preço'}
                  </button>
                  {exibirCampos && (
                    <>
                      <input
                        type="text"
                        value={imagem.nome || ""}
                        onChange={(e) => handleTextChange(e, 'nome', index)}
                        placeholder="Digite o nome"
                        style={{
                          border: imagem.nome ? '2px solid #000' : '1px solid #ccc', // Estilo condicional para borda
                        }}
                      />
                      <input
                        type="text"
                        value={imagem.preco || ""}
                        onChange={(e) => handleTextChange(e, 'preco', index)}
                        placeholder="Digite o preço"
                        style={{
                          border: imagem.preco ? '2px solid #000' : '1px solid #ccc', // Estilo condicional para borda
                        }}
                      />
                    </>
                  )}
                </td>

                <td className="corte">
                  <img
                    src={imagem.corte ? imagem.corte : "https://via.placeholder.com/80" }
                    alt={`Corte da linha ${index + 1}`}
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => adicionarImagem(e, index)}
                    style={{ marginTop: '10px', padding: '5px' }}
                    aria-label="Escolher arquivo"
                  />
                </td>

                <td className="corte">
                  <button onClick={() => apagarLinha(index)}>Apagar Linha</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <script src="font-awesome-v6.6.js"></script>

    </div>
  );
}

export default Pagina_jose;