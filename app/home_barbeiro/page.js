'use client'
import "../components/Menu.js"
import Menu from "../components/Menu";
import "./barbeiro.css";


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
                        <p>Calendario</p>
                    </div>
                    <div className="listScheduled">
                        <h2>Agendados</h2>
                        <ul>
                            <ScheduledItem name="Yuri" cut="Corte coreano" time="00:00" price="100" />
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
    );
}
function ScheduledItem(e) {
    return (
        <li className="scheduledItem">
            <h3>{e.name}</h3>
            <p>{e.cut} - R${e.price}</p>
            <p>{e.time}</p>

        </li>
    )
}

export default HomeBarbeiro;