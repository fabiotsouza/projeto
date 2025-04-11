'use client'
import axios from 'axios';
import './home_cliente.css'
import { useState } from 'react';

function Home_cliente() {

    const[historico, alteraHistorico] = useState([])
    const[populares, alteraPopulares] = useState([])

    return ( 

        <div>

            <br/><br/><br/><br/>
            <div>
                <div>
                    <button>Aqui</button>
                    <p>asfasfasfa</p>
                </div>

                <div>
                    <button>Aqui</button>
                    <p>asffafasf</p>
                </div>
            </div>
           
            <div>
                <div>
                    <p>asfasf</p>

                </div>

                <div>
                    <p>safsafs</p>

                </div>
            </div>


            

        </div>

    );
}

export default Home_cliente;