'use client'

import { today, getLocalTimeZone } from "@internationalized/date";
import { Calendar } from "@heroui/calendar";
import axios from "axios";
import { useEffect, useState } from "react";
import "./agendamento.css"
import Corte from "./components/Corte.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import Menu_cliente from "../components/Menu_cliente";
import host from "../lib/host";




function Agendamento() {

    const [verHorario, alteraVerHorario] = useState(false);
    const [verCortes, setVerCortes] = useState(true)

    const [cortes, alteraCortes] = useState([])
    const [corteSelecionado, alteraCorteSelecionado] = useState([])

    const [selectDay, setSelectDay] = useState([])
    const [dia, alteraDia] = useState([])
    const [hora, alteraHora] = useState([])

    const [pesquisa, alteraPesquisa] = useState("")

    async function buscaTodos() {
        const response = await axios.get(host + "cortes")
        alteraCortes(response.data)
    }

    async function buscaPorNome(nome) {
        const response = await axios.get(host + "cortes/pesquisa/" + nome)
        alteraCortes(response.data)
    }

    async function insereHorario(e) {

        e.preventDefault()

        const obj = {
            dia: dia,
            hora: hora
        }

        const response = await axios.post(host + "agendamento", obj)


        alteraDia("")
        alteraHora("")

    }


    function enviaPesquisa(e) {

        e.preventDefault()

        if (pesquisa == null  && pesquisa !== ("")) {
            <p>Corte não encontrado</p>
        }
    }

    async function searchDay(dia) {
        const data = dia.year + "-" + dia.month + "-" + dia.day
        console.log(data)
        
        const response = await axios.get(host + "agendamentos/" + data)
        console.log(response)

        if( response.data == 0){
            console.log("Nao tem nada nesse dia")
            setSelectDay("vazio")
        }else{
            setSelectDay(response.data)
        }
    }

    useEffect(() => {
        buscaTodos()
    }, [pesquisa])

    return (
        <div>
            <Menu_cliente />
            {verCortes == true && verHorario == false ?
                <div className="centralizar">

                    <form onSubmit={(e) => enviaPesquisa(e)}>
                        <button className="limpar" onClick={()=> alteraPesquisa("")  }>Limpar</button>
                        <input type="search" placeholder="Pesquisar" onChange={(e) => alteraPesquisa(e.target.value)} />
                        <button className="pesquisa" onClick={() => buscaPorNome(pesquisa)} ><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
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
                    <form onSubmit={(e) => insereHorario(e)}>
                        <p className="textoBranco">Agende seu horário</p>
                        <Calendar aria-label="Date (International Calendar)"
                            defaultValue={today(getLocalTimeZone())}
                            minValue={today(getLocalTimeZone())}
                            onChange={searchDay}

                            pageBehavior="single"
                            color="primary" // Added color prop to change selected cell color

                            classNames={{
                                base: 'custom-calendar',
                                cell: 'custom-cell',
                                cellButton: 'c-c',
                                header: 'custom-header',
                                nextButton: 'custom-button',
                                prevButton: 'custom-button',
                                headerWrapper: 'custom-headerW',
                                title: 'custom-title'

                            }}
                        />
                        <input type="time" required onChange={(e) => alteraHora(e.target.value)} />
                        <button>Salvar</button>
                    </form>
                </div>
            }



        </div>
    );
}

export default Agendamento;