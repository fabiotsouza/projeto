'use client'
import "../components/Menu.js"
import Menu from "../components/Menu";
import "./barbeiro.css";
import { useEffect, useState } from "react";
import axios from "axios";



function HomeBarbeiro() {

    const [appointments, setAppointments] = useState([])


    async function searchAll() {
        const response = await axios.get("http://localhost:3000/api/agendamentos")
        console.log(response.data) 
        setAppointments(response.data)
    }
    useEffect(() => {
        searchAll()
    }, [])

    function formataData(valor) {
        let data = valor.split("T")[0]


        data = data.split("-")
        data = data.reverse()
        data = data.join("/")



        return data 

    }

    return (
        <div>
            <Menu />
            <div>
                <div className="title">
                    <h1>Bem-vindo barbeiro</h1>
                    <h2>O que vai ser hoje?</h2>
                </div>
                <div className="screen">
                    <div className="calendar">
                        <p>Calendário</p>
                    </div>
                    <div className="back">
                        <div className="listScheduled">
                            <h2>Agendados</h2>
                            <ul>

                                {
                                    appointments.map(i =>
                                        <li className="scheduledItem">
                                            <h3>{i.u_nome}</h3>
                                            <p><strong>Hora agendada:</strong> {i.horario}</p>
                                            <p className="color">{i.c_nome} - R${i.preco}</p>
                                        </li>


                                    )
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