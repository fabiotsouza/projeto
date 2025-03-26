'use client'

import { useState } from "react";
import "./projeto1.css";

function Pagina_jose() {
  const [imagens, setImagens] = useState([
    { id: 1, nome: null, corte: null, preco: null },
    { id: 2, nome: null, corte: null, preco: null },
    { id: 3, nome: null, corte: null, preco: null }
  ]);

  // Função para lidar com mudanças nos campos de texto
  const handleTextChange = (e, tipo, index) => {
    const newImagens = [...imagens];
    newImagens[index][tipo] = e.target.value;
    setImagens(newImagens); // Atualiza o estado com os novos valores
  };

  // Função para adicionar a imagem no corte da tabela
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

  // Função para adicionar uma nova linha à tabela
  const adicionarLinha = () => {
    const novoId = imagens.length + 1;  // Gerando um novo ID único
    setImagens([
      ...imagens,
      { id: novoId, nome: null, corte: null, preco: null }
    ]);
  };

  // Função para apagar uma linha
  const apagarLinha = (id) => {
    const newImagens = imagens.filter((imagem) => imagem.id !== id); // Remove a linha com o id correspondente
    setImagens(newImagens); // Atualiza o estado
  };

  // Função para salvar os dados no localStorage
  const salvarDados = () => {
    localStorage.setItem('imagens', JSON.stringify(imagens)); // Salva os dados no localStorage
    alert('Alterações salvas com sucesso!');
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

            {imagens.map((imagem) => (
              <tr key={imagem.id}>
                <td className="corte">
                  <input
                    type="text"
                    value={imagem.nome || ""}
                    onChange={(e) => handleTextChange(e, 'nome', imagens.indexOf(imagem))}
                    placeholder="Digite o nome"
                  />
                </td>

                <td className="corte">
                  <img
                    src={imagem.corte ? imagem.corte : "https://via.placeholder.com/80"}
                    alt={`Corte da linha ${imagem.id}`}
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => adicionarImagem(e, imagens.indexOf(imagem))}
                    style={{ marginTop: '10px', padding: '5px' }}
                  />
                </td>

                <td className="corte">
                  <input
                    type="text"
                    value={imagem.preco || ""}
                    onChange={(e) => handleTextChange(e, 'preco', imagens.indexOf(imagem))}
                    placeholder="Digite o preço"
                  />
                </td>

                <td className="corte">
                  <button onClick={() => apagarLinha(imagem.id)}>Apagar Linha</button>
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