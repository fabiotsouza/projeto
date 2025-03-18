'use client'

import { useState } from "react";
import "./projeto1.css";

function Pagina_jose() {

  
  const [imagens, setImagens] = useState([
    { nome: null, corte: null, preco: null },
    { nome: null, corte: null, preco: null },
    { nome: null, corte: null, preco: null },
    { nome: null, corte: null, preco: null },
    { nome: null, corte: null, preco: null },
    { nome: null, corte: null, preco: null }
  ]);

  const [selecao, setSelecao] = useState({ linha: 0, tipo: 'nome' });




  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImagens = [...imagens];
        newImagens[selecao.linha][selecao.tipo] = reader.result;
        setImagens(newImagens);
      };
      reader.readAsDataURL(file);
    }
  };




  
  const handleTextChange = (e) => {
    const newImagens = [...imagens];
    newImagens[selecao.linha][selecao.tipo] = e.target.value;
    setImagens(newImagens);
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
          <h2>Alterar Cortes</h2>
          
          
          <div className="item">
            <button onClick={() => document.getElementById('imageUpload').click()}>Adicionar Novo Corte</button>
            <input
              type="file"
              id="imageUpload"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
            
          </div>

          

          


        </div>

          








        <table style={{ width: '100%' }}>
          <tbody>





            <tr>
              <th> NOME </th>
              <th> FOTO </th>
              <th> PREÇO </th>
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
                    src={imagem.corte || "https://via.placeholder.com/80"}
                    alt={`Corte da linha ${index + 1}`}
                    onClick={() => setSelecao({ linha: index, tipo: 'corte' })}
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
              </tr>
            ))}
          </tbody>
        </table>

        


      </div>









      <div className="final">
        <button>Finalizar</button>
      </div>






      <script src="font-awesome-v6.6.js"></script>
    </div>
  );
}

export default Pagina_jose;