'use client'


import axios from "axios";
import { useEffect, useState } from "react";
import "./agendamento.css"
import Corte from"./components/Corte.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import Menu_cliente from "../components/Menu_cliente";
import host from "../lib/host";



function Agendamento() {

    const [verHorario, alteraVerHorario] = useState(false);
    const[verCortes, setVerCortes] = useState(true)   

    const[cortes, alteraCortes] = useState([])
    const[corteSelecionado, alteraCorteSelecionado] = useState([])

    const [dia, alteraDia] = useState([])
    const [hora, alteraHora] = useState([])

    const [pesquisa, alteraPesquisa] = useState("")

    async function buscaTodos(){
        const response = await  axios.get(host+"cortes")
        alteraCortes(response.data)
    }

    async function buscaPorNome(nome){
        const response = await axios.get(host+"cortes/pesquisa/"+nome)
        alteraCortes(response.data)
    }

    async function insereHorario(e){

        e.preventDefault()

        const obj = {
            dia: dia,
            hora: hora
        }

        const response = await axios.post(host+"agendamento", obj)


        alteraDia("")
        alteraHora("")

    }


    function enviaPesquisa(e){

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
            <Menu_cliente/>
            {   verCortes == true && verHorario == false ?
                <div className="centralizar">
                    
                    <form onSubmit={(e)=> enviaPesquisa(e)}>
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
                                            <Corte image={i.imagem} nome={i.nome} preco={i.preco} alteraVerHorario={alteraVerHorario} alteraCorteSelecionado={alteraCorteSelecionado} id={i.id} />                                             
                                        </div>                          
                                    )
                                }
                            </div>
                    }
                    
                </div>
            :
                <div className="telaAgendamento">
                    <form onSubmit={(e)=> insereHorario(e)}>
                        {console.log(corteSelecionado)}
                        <p className="textoBranco">Agende seu horário</p>
                        <input type="date" required onChange={(e)=> alteraDia(e.target.value)}/>
                        <input type="time" required onChange={(e)=> alteraHora(e.target.value)}/>
                        <button>Salvar</button>
                    </form>
                </div>
            }
            


        </div>
    );
}

export default Agendamento;