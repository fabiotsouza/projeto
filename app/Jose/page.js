'use client'

import { useState, useEffect } from "react";
import "./projeto1.css";

function Pagina_jose() {
  const [imagens, setImagens] = useState([
    { nome: null, corte: null, preco: null, corte_url: null },
    { nome: null, corte: null, preco: null, corte_url: null },
    { nome: null, corte: null, preco: null, corte_url: null },
    { nome: null, corte: null, preco: null, corte_url: null },
    { nome: null, corte: null, preco: null, corte_url: null }
  ]);

  const [campoNomeSelecionado, setCampoNomeSelecionado] = useState(null);
  const [campoPrecoSelecionado, setCampoPrecoSelecionado] = useState(null);
  const [campoCorteUrlSelecionado, setCampoCorteUrlSelecionado] = useState(null);

  // Carregar dados do localStorage quando o componente for montado
  useEffect(() => {
    const dadosSalvos = localStorage.getItem('imagens');
    if (dadosSalvos) {
      setImagens(JSON.parse(dadosSalvos));
    }
  }, []);

  const handleTextChange = (e, tipo, index) => {
    const newImagens = [...imagens];
    newImagens[index][tipo] = e.target.value;
    setImagens(newImagens);
  };

  // Função para salvar os dados no localStorage
  const salvarDados = () => {
    localStorage.setItem('imagens', JSON.stringify(imagens));
    alert('Alterações salvas com sucesso!');
  };

  // Função para adicionar uma nova linha à tabela
  const adicionarLinha = () => {
    setImagens([...imagens, { nome: null, corte: null, preco: null, corte_url: null }]);
  };

  // Função para apagar uma linha
  const apagarLinha = (index) => {
    const newImagens = imagens.filter((_, i) => i !== index);
    setImagens(newImagens);
  };

  // Função para mostrar o campo nome editável
  const ativarCampoNome = (index) => {
    setCampoNomeSelecionado(index);
  };

  // Função para mostrar o campo preço editável
  const ativarCampoPreco = (index) => {
    setCampoPrecoSelecionado(index);
  };

  // Função para mostrar o campo corte_url editável
  const ativarCampoCorteUrl = (index) => {
    setCampoCorteUrlSelecionado(index);
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
                {/* Nome */}
                <td className="corte">
                  {campoNomeSelecionado === index ? (
                    <input
                      type="text"
                      value={imagem.nome || ""}
                      onChange={(e) => handleTextChange(e, 'nome', index)}
                      placeholder="Digite o nome"
                      onBlur={() => setCampoNomeSelecionado(null)}
                      autoFocus
                    />
                  ) : (
                    <span onClick={() => ativarCampoNome(index)}>
                      {imagem.nome || "Clique para editar nome"}
                    </span>
                  )}
                </td>

                {/* Foto */}
                <td className="corte">
                  {campoCorteUrlSelecionado === index ? (
                    <input
                      type="text"
                      value={imagem.corte_url || ""}
                      onChange={(e) => handleTextChange(e, 'corte_url', index)}
                      placeholder="Digite a URL da imagem"
                      onBlur={() => setCampoCorteUrlSelecionado(null)}
                      autoFocus
                    />
                  ) : (
                    <span onClick={() => ativarCampoCorteUrl(index)}>
                      {imagem.corte_url ? (
                        <img
                          src={imagem.corte_url}
                          alt={`Corte da linha ${index + 1}`}
                          style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                        />
                      ) : (
                        "Clique para adicionar URL da imagem"
                      )}
                    </span>
                  )}
                </td>

                {/* Preço */}
                <td className="corte">
                  {campoPrecoSelecionado === index ? (
                    <input
                      type="text"
                      value={imagem.preco || ""}
                      onChange={(e) => handleTextChange(e, 'preco', index)}
                      placeholder="Digite o preço"
                      onBlur={() => setCampoPrecoSelecionado(null)}
                      autoFocus
                    />
                  ) : (
                    <span onClick={() => ativarCampoPreco(index)}>
                      {imagem.preco || "Clique para editar preço"}
                    </span>
                  )}
                </td>










                {/* Botão Apagar */}
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