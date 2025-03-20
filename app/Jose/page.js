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

  const [selecao, setSelecao] = useState({ linha: 0, tipo: 'nome' });
  const [urlVisivel, setUrlVisivel] = useState(false);
  const [urlImagem, setUrlImagem] = useState('');

  
  useEffect(() => {
    const dadosSalvos = localStorage.getItem('imagens');
    if (dadosSalvos) {
      setImagens(JSON.parse(dadosSalvos));
    }
  }, []);

  
  const handleTextChange = (e) => {
    const newImagens = [...imagens];
    newImagens[selecao.linha][selecao.tipo] = e.target.value;
    setImagens(newImagens);
  };

  
  const handleImageUrlChange = (e) => {
    setUrlImagem(e.target.value);
  };

  
  const salvarImagemUrl = () => {
    if (urlImagem) {
      const newImagens = [...imagens];
      newImagens[selecao.linha].corte = urlImagem;
      setImagens(newImagens);
      setUrlVisivel(false);
      setUrlImagem('');
    } else {
      alert("Por favor, insira uma URL válida.");
    }
  };

 
  const salvarDados = () => {
    localStorage.setItem('imagens', JSON.stringify(imagens));
    alert('Alterações salvas com sucesso!');
  };

  
  const adicionarLinha = () => {
    setImagens([...imagens, { nome: null, corte: null, preco: null }]);
  };

 
  const apagarLinha = (index) => {
    const newImagens = imagens.filter((_, i) => i !== index);
    setImagens(newImagens);
    setSelecao({ linha: 0, tipo: 'nome' });
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
            <button onClick={() => setUrlVisivel(!urlVisivel)}>
              {urlVisivel ? 'Cancelar' : 'Adicionar Novo Corte via URL'}
            </button>
          </div>







          {urlVisivel && (
            <div>
              <input
                type="text"
                value={urlImagem}
                onChange={handleImageUrlChange}
                placeholder="Insira a URL da imagem"
                style={{ marginTop: '10px', padding: '5px', width: '100%' }}
              />
              <button onClick={salvarImagemUrl} style={{ marginTop: '10px' }}>
                Salvar Imagem
              </button>
            </div>
          )}








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
                  {selecao.linha === index && selecao.tipo === 'nome' ? (
                    <input
                      type="text"
                      value={imagem.nome || ""}
                      onChange={handleTextChange}
                      placeholder="Digite o nome"
                    />
                  ) : (
                    <span onClick={() => setSelecao({ linha: index, tipo: 'nome' })}>
                      {imagem.nome || "Nome"}
                    </span>
                  )}
                </td>

















                
                <td className="corte">  
                  <img
                    src={imagem.corte ? imagem.corte : "https://via.placeholder.com/80"} 
                    alt={`Corte da linha ${index + 1}`}
                    onClick={() => setSelecao({ linha: index, tipo: 'corte' })}
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                </td>










                <td className="corte">
                  {selecao.linha === index && selecao.tipo === 'preco' ? (
                    <input
                      type="text"
                      value={imagem.preco || ""}
                      onChange={handleTextChange}
                      placeholder="Digite o preço"
                    />
                  ) : (
                    <span onClick={() => setSelecao({ linha: index, tipo: 'preco' })}>
                      {imagem.preco || "Preço"}
                    </span>
                  )}
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