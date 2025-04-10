'use client'

import { useState } from "react";
import "../agendamento.css"

function Cortes(attr) {


    function agendar(){
        attr.alteraVerHorario(true)
        attr.alteraCorteSelecionado(attr.id)
    }

    return ( 

        <div>
            <div className="imagemCorte fundoCard" >
                <img className="tamanhoImagem" src={attr.image} />
                <div className="centralizarCorte">
                    <p className="nomeCorte">{attr.nome}</p>                    
                </div>
                <div className="centralizarCorte">
                    <p className="preco">R$:{attr.preco}</p>
                </div>
                <div>
                    <br/><br/>
                    <button className="agendar fundoSalvar" onClick={()=> agendar() }>Agendar</button>                   
                </div>
            </div>
        </div>
    );
}

export default Cortes;