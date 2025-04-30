'use client'

import { useState } from "react";
import "../agendamento.css"
import Swal from 'sweetalert2'


function Cortes(attr) {

    const erroAgendar = () => toast.error("Você deve estar logado para agendar um corte...")

    function agendar(){
        
        if(attr.usuario == null){
            console.log("nao ta logado")
            const resposta = Swal.fire({
                text: "Você precisa entrar com uma conta para agendar este corte!",
                icon: "error",
                showCancelButton: true,
                confirmButtonText: `Fechar`,
                cancelButtonText: `Criar uma conta`,
              }).then((results)=> {
                if(results.isDismissed == true){
                    window.location.href = "/"
                }
              })

            console.log(resposta)
        }

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
        </div>
    );
}

export default Cortes;