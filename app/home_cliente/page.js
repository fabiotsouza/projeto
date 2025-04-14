'use client'
import axios from 'axios';
import './home_cliente.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCalendarDays, faScissors } from "@fortawesome/free-solid-svg-icons"
import Menu_cliente from '../components/Menu_cliente';


function Home_cliente() {

    const[historico, alteraHistorico] = useState([])
    const[populares, alteraPopulares] = useState([])

    async function buscaHistorico(id){
        const response = await axios.get("http://localhost:3000/api/historico")
        alteraHistorico(response.data)
    }

    async function buscaPopulares(){
        const response = await axios.get("http://localhost:3000/api/populares")
        alteraPopulares(response.data)
    }

    return ( 

        <div>
            <Menu_cliente/>
            <br/><br/><br/><br/>
            <div>
                <div>
                    <div className='espaco'>
                        <button className='icone'><FontAwesomeIcon icon={faUser} className='iconeimg'/></button>
                        <p className='icone'>Menu</p>
                        <div className='espacoCard'>
                            <p>Histórico</p>
                            <p onLoad={()=> buscaHistorico(id)}></p>
                        </div>
                    </div>

                    <div className='espaco'>
                        <button className='icone'><FontAwesomeIcon icon={faScissors} className='iconeimg'/></button>
                        <p className='icone'>Cortes</p>
                    </div>
                </div>
            
                <div>
                    <div className='espaco'>
                        <button className='icone'>< FontAwesomeIcon icon={faCalendarDays} className='iconeimg'/></button>
                        <p className='icone'>Disponibilidade</p>
                    </div>

                </div>

                <div>
                    <p>Populares</p>
                </div>
            </div>

            

            

        </div>

    );
}

export default Home_cliente;