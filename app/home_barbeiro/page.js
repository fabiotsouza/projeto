'use client'
import "../components/Menu.js"
import Menu from "../components/Menu";
import "./barbeiro.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from "@fortawesome/free-solid-svg-icons"


function HomeBarbeiro() {
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
                            <ScheduledItem name="Yuri" cut="Corte coreano" time="00:00" price="100" hour="" />
                            <ScheduledItem name="Dan" cut="Corte do Moica" time="12:00" price="23" />
                            <ScheduledItem name="Yuri" cut="Corte coreano" time="00:00" price="100" />
                            <ScheduledItem name="Yuri" cut="Corte coreano" time="00:00" price="100" />
                            <ScheduledItem name="Yuri" cut="Corte coreano" time="00:00" price="100" />
                            <ScheduledItem name="Yuri" cut="Corte coreano" time="00:00" price="100" />
                            <ScheduledItem name="Yuri" cut="Corte coreano" time="00:00" price="100" />
                            <ScheduledItem name="Yuri" cut="Corte coreano" time="00:00" price="100" />
                            <ScheduledItem name="Yuri" cut="Corte coreano" time="00:00" price="100" />

                        </ul>
                    </div>
                    </div>

                </div>
            </div>

        </div>
    );
}
function ScheduledItem(e) {
    return (
        <li className="scheduledItem">
            <h3>{e.name}</h3>
            <p><strong>Hora agendada:</strong> {e.time}</p>
            <p className="color">{e.cut} - R${e.price}</p>
        </li>
    )
}

export default HomeBarbeiro;