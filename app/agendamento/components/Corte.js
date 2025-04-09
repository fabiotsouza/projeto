'use client'

import { useState } from "react";

function Cortes(attr) {


    function agendar(){
        attr.alteraVerHorario(true)
        attr.alteraCorteSelecionado(attr.id)
    }

    return ( 

        <div>
            <div className="imagemCorte">
                <img className="tamanhoImagem" src={attr.image} />
                <div className="centralizarCorte">
                    <p className="nomeCorte">{attr.nome}</p>                    
                </div>
                <div className="centralizarCorte">
                    <p className="preco">R$:{attr.preco}</p>
                </div>
                <div>
                    <br/><br/>
                    <button className="agendar" onClick={()=> agendar() }>Agendar</button>                   
                </div>
            </div>
        </div>
    );
}

export default Cortes;