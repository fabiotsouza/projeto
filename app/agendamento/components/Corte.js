'use client'

import { useState } from "react";
import "../agendamento.css"
import { toast, ToastContainer } from "react-toastify";

function Cortes(attr) {

    const erroAgendar = () => toast.error("Você deve estar logado para agendar um corte...")

    function agendar(){
        
        if(localStorage.length == 0){
            erroAgendar()
            return
        }
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
                    <button className="agendar" onClick={()=> agendar() }>Agendar</button>                   
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
}

export default Cortes;