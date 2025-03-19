'use client'

import { useState } from "react";
import "./agendamento.css"
import Corte from"./components/Corte.js"




function Agendamento() {

    const[agendamento, setAgendamento] = useState(true)
    const[verCortes, setVerCortes] = useState(false)   



    return ( 
        <div>
            {
                agendamento == true &&
                
                    <div className="telaAgendamento">
                        <input type="date"/>
                        <input type="time"/>
                        <div >                            
                            <button className="agendamento" onClick={()=> {setVerCortes(true); setAgendamento(false)}}>Ver corte2522s</button>
                        </div>
                    </div>
            }
            
            
            

            {
                verCortes == true &&
                <div className="centralizar">
                    <input type="search" placeholder="Pesquisar"/>
                    <div>
                        <Corte image="https://pm1.narvii.com/6532/3b861844e83e90e04b4e7a08a06694bdde4216c8_hq.jpg" nome="Corte do Zeca" preco="15"/>
                        <Corte image="https://www.lance.com.br/files/article_main/uploads/2018/11/15/5bedcf90501e4.jpeg" nome="Corte do Fenômeno" preco="15"/>
                        <Corte image="https://aventurasnahistoria.com.br/media/uploads/880px-kim_jong-un_at_the_workers_party_of_korea_main_building.png" nome="Corte Coreano" preco="15"/>
                        <Corte image="https://pbs.twimg.com/media/ElxG8rEWMAAys3w.png" nome="Corte do Loro" preco="25"/>
                        <Corte image="https://i.pinimg.com/originals/d5/7c/cd/d57ccd3e3572827d198bac41835899cb.jpg" nome="Corte do Masqueico" preco="20"/>
                    </div>
                </div>

            }


        </div>
    );
}

export default Agendamento;