'use client'

import { useState } from "react";
import "./projeto1.css";

function Pagina_jose() {
  
  const [imagens, setImagens] = useState([

    {corte1: null, corte2: null, consulta: null},
    {corte1: null, corte2: null, consulta: null},
    {corte1: null, corte2: null, consulta: null},
    {corte1: null, corte2: null, consulta: null}

  ]);

  const [selecao, setSelecao] = useState ({linha: 0, tipo: 'corte1'});
  

  
  const handleImageChange = (e) => {
    const file = e.target.files[0]; 
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImagens = [...imagens];
        newImagens [selecao.linha] [selecao.tipo] = reader.result;
        setNovaImagem(reader.result); 
      };
      reader.readAsDataURL(file); 
    }
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
          <div className="item">
            <button onClick={() => document.getElementById('imageUpload').click()}>Consultar</button>
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
              <th> Corte 1 </th>
              <th> Corte 2 </th>
              <th> Consulta </th>
            </tr>









           <tr>
              <td className="corte">
                <img src={imagens.corte1 || "https://via.placeholder.com/80"} alt="Corte 1" />
              </td>
              <td className="corte">
                <img src={imagens.corte2 ||  "https://via.placeholder.com/80"} alt="Corte 2" />
              </td>
              <td className="corte">
                <img src="https://via.placeholder.com/80" alt="Consulta" />
              </td>
            </tr>
            <tr>
              <td className="corte">
                <img src="https://via.placeholder.com/80" alt="Corte 1" />
              </td>
              <td className="corte">
                <img src="https://via.placeholder.com/80" alt="Corte 2" />
              </td>
              <td className="corte">
                <img src="https://via.placeholder.com/80" alt="Consulta" />
              </td>
            </tr>
            <tr>
              <td className="corte">
                <img src="https://via.placeholder.com/80" alt="Corte 1" />
              </td>
              <td className="corte">
                <img src="https://via.placeholder.com/80" alt="Corte 2" />
              </td>
              <td className="corte">
                <img src="https://via.placeholder.com/80" alt="Consulta" />
              </td>
            </tr>
            <tr>
              <td className="corte">
                <img src="https://via.placeholder.com/80" alt="Corte 1" />
              </td>
              <td className="corte">
                <img src="https://via.placeholder.com/80" alt="Corte 2" />
              </td>
              <td className="corte">
                <img src="https://via.placeholder.com/80" alt="Consulta" />
              </td>
            </tr>
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