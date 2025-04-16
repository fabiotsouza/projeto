'use client'
import "../components/Menu.js"
import Menu from "../components/Menu";
import "./barbeiro.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Calendar } from "@heroui/calendar";
import { today, getLocalTimeZone } from "@internationalized/date";
import host from "../lib/host.js";



function HomeBarbeiro() {

    //const [appointments, setAppointments] = useState([])
    const [selectDay, setSelectDay] = useState([])


    async function searchAll() {
        const response = await axios.get(host + "agendamentos")
        console.log(response.data)
        setSelectDay(response.data)
    }
    async function searchDay(dia) {
        const data = dia.year + "-" + dia.month + "-" + dia.day
        console.log(data)
        
        const response = await axios.get(host + "/agendamentos/" + data)
        console.log(response)

        if( response.data == 0){
            console.log("Nao tem nada nesse dia")
            setSelectDay("vazio")
        }else{
            setSelectDay(response.data)
        }
    }
    useEffect(() => {
        searchAll()
    }, [])


    return (
        <div>
            <Menu />
            <div>
                <div className="title">
                    <h1>Bem-vindo barbeiro</h1>
                    <h2>O que vai ser hoje?</h2>
                </div>
                <div className="screen">
                    <div className="center">

                    <Calendar aria-label="Date (International Calendar)"
                        defaultValue={today(getLocalTimeZone())}
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
                    <button onClick={()=>searchAll() } className="verTudo"><strong>Ver tudo</strong></button>
                    </div>


                    <div className="back">
                        <div className="listScheduled">
                            <h2>Agendados</h2>
                            <ul>
                                {
                                    typeof selectDay == "object" && selectDay.length > 0 &&

                                        selectDay.map(i =>
                                            <li className="scheduledItem">
                                                <h3>{i.u_nome}</h3>
                                                <p><strong>Hora agendada:</strong> {i.horario}</p>
                                                <p className="color">{i.c_nome} - R${i.preco}</p>
                                            </li>
                                        )
                                    
                                }

                                {
                                    selectDay == "vazio" &&

                                        <li className="scheduledItem">
                                            <h3>Sem agendamentos para esse dia</h3>
                                        </li>

                                }

                                {
                                    selectDay == 0 &&

                                        <li className="scheduledItem">
                                            <h3>Carregando...</h3>
                                        </li>

                                }



                            </ul>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}


export default HomeBarbeiro;