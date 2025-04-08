'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import "./agendamento.css"
import Corte from"./components/Corte.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"




function Agendamento() {

    const[agendamento, setAgendamento] = useState(false)
    const[verCortes, setVerCortes] = useState(true)   
    const[cortes, alteraCortes] = useState([])

    const [pesquisa, alteraPesquisa] = useState("")

    async function buscaTodos(){
        const response = await  axios.get("http://localhost:3000/api/cortes")
        alteraCortes(response.data)
    }

    async function buscaPorNome(nome){
        const response = await axios.get("http://localhost:3000/api/cortes/pesquisa/"+nome)
        alteraCortes(response.data)
    }

    function enviaFormulario(e){

        e.preventDefault()

        if( pesquisa !== i.nome && pesquisa !== ("")){
            <p>Corte não encontrado</p>
        }
    }

    useEffect(()=> {
        buscaTodos()
    }, [pesquisa])

    return ( 
        <div>
            {
                agendamento == true &&
                
                    <div className="telaAgendamento">
                        <input type="date"/>
                        <input type="time"/>
                        <div >                            
                            <button className="agendamento" onClick={()=> {setVerCortes(false); setAgendamento(true)}}>Ver cortes</button>
                        </div>
                    </div>
            }
            
            
            

            {
                verCortes == true &&
                <div className="centralizar">

                    <form onSubmit={(e)=> enviaFormulario(e)}>
                        <input type="search" placeholder="Pesquisar" onChange={(e)=> alteraPesquisa(e.target.value)}/>
                        <button className="pesquisa" onClick={()=> buscaPorNome(pesquisa)} ><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    </form>

                    {
                        cortes.length == 0 ? <p>Corte não encontrado</p>
                        :
                            <div>
                                {
                                    cortes.map(i =>
                                        <div>                              
                                            <Corte image={i.imagem} nome={i.nome} preco={i.preco}/>                                             
                                        </div>                          
                                    )
                                }
                            </div>
                    }
                    
                </div>

            }


        </div>
    );
}

export default Agendamento;