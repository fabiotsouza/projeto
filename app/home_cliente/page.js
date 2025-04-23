'use client'
import axios from 'axios';
import './home_cliente.css'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCalendarDays, faScissors } from "@fortawesome/free-solid-svg-icons"
import Menu_cliente from '../components/Menu_cliente';
import host from '../lib/host';
import Card from '../components/Card';


function Home_cliente() {

    const[verHorario, alteraVerHorario] = useState(true)

    const[historico, alteraHistorico] = useState([])
    const[populares, alteraPopulares] = useState([])
    const[cortes, alteraCortes] = useState([])

    async function buscaTodos(){
        const response = await  axios.get(host+"cortes")
        alteraCortes(response.data)
    }

    async function buscaHistorico(id){
        const response = await axios.get(host+"historico/"+id)
        alteraHistorico(response.data)
    }

    async function buscaPopulares(){
        const response = await axios.get(host+"populares")
        alteraPopulares(response.data)
    }

    useEffect(()=> {

        const usuarioLocal = JSON.parse(localStorage.getItem("usuario"))
        if(usuarioLocal.id){
            buscaHistorico(usuarioLocal.id)
        }

        buscaPopulares()
    }, [])

    return ( 

        <div>
            <Menu_cliente/>
            <br/><br/><br/><br/>
            <div className='fundoIcones'>
                <div className='icones'>
                    <div>
                        <button onClick={()=> window.location.href ="./"}><FontAwesomeIcon icon={faUser}/></button>
                        <p>Menu</p>
                    </div>
                    <div>
                        <button onClick={()=> window.location.href ="./agendamento"}><FontAwesomeIcon icon={faScissors}/></button>
                        <p>Cortes</p>
                    </div>
                    <div>
                        <button onClick={()=> window.location.href ="./agendamento"}><FontAwesomeIcon icon={faCalendarDays}/></button>
                        <p>Agendamento</p>
                    </div>
                </div>
            </div>
            <br/><br/><br/>

            <hr/>
            <div className='feed'>
                <p>Histórico</p>
                <div>
                    <div className='cardPosition'>
                    {
                        historico.map(i=>
                                <Card nome={i.nome} preco={i.preco} dia={i.dia} horario={i.horario} id={i.id}/> 
                            )
                        }
                        </div>
                </div>
            </div>

            <div className='feed'>
                <p>Populares</p>
                <div className='cardPosition'>
                    {
                        populares.map(i=>                           
                                 <Card nome={i.nome} preco={i.preco} id={i.id}/>                        
                        )
                    }
                </div>
            </div>

        </div>


    );
}

export default Home_cliente;