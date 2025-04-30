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
import Swal from 'sweetalert2'


function Agendamento() {

    const [usuario, alteraUsuario] = useState({})

    const [verHorario, alteraVerHorario] = useState(false);
    const [verCortes, setVerCortes] = useState(true)

    const [cortes, alteraCortes] = useState([])
    const [corteSelecionado, alteraCorteSelecionado] = useState([])

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
            hora: hora,
            id_corte: corteSelecionado,
            id_usuario: usuario.id
        }
        console.log(obj)
        const response = await axios.post(host + "agendamentos", obj)

        Swal.fire({
            title: "Parabéns!",
            text: "Corte agendado com sucesso",
            icon: "success"
        });

        alteraDia("")
        alteraHora("")

    }

    async function putDay(dia){
        console.log(dia)
        const data = dia.year + "-" + dia.month + "-" + dia.day
        alteraDia(data)
        
    }

    useEffect(() => {
        
        const usuarioLocal = JSON.parse(localStorage.getItem("usuario"))
        alteraUsuario(usuarioLocal)

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
                                            <Corte usuario={usuario} image={i.imagem} nome={i.nome} preco={i.preco} alteraVerHorario={alteraVerHorario} alteraCorteSelecionado={alteraCorteSelecionado} id={i.id} />
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
                            onChange={putDay}

                            
                            classNames={{
                                base: 'custom-calendar',
                                cell: 'custom-cell',
                                cellButton: 'c-c',
                                header: 'custom-header',
                                nextButton: 'custom-button',
                                prevButton: 'custom-button',
                                headerWrapper: 'custom-headerW',
                                title: 'custom-title',
                                
                            }}
                        />

                        {/* <input type="time" required onChange={(e) => alteraHora(e.target.value)} step="600" /> */}
                        <select className="campoHoras" onChange={(e) => alteraHora(e.target.value+":00")} required>
                            <option value="">Selecione um horário</option>
                            {Array.from({ length: 24 }, (_, i) => {
                                const h = 9 + Math.floor(i / 2);  // Começa em 09:00
                                const m = i % 2 === 0 ? 0 : 30;
                                const horaFormatada = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;

                                // Criar data do horário da opção
                                const agora = new Date();
                                const horarioOpcao = new Date();
                                horarioOpcao.setHours(h, m, 0, 0);

                                // Arredondar 'agora' para o próximo múltiplo de 30 minutos
                                const arredondado = new Date();
                                const minutos = agora.getMinutes();
                                const arredondaPara = minutos < 30 ? 30 : 60;
                                arredondado.setMinutes(0, 0, 0);
                                arredondado.setHours(agora.getHours() + (minutos < 30 ? 0 : 1));
                                arredondado.setMinutes(minutos < 30 ? 30 : 0);

                                // Verifica se a opção é anterior ao horário arredondado
                                const desabilitar = horarioOpcao < arredondado;

                                return (
                                <option key={horaFormatada} value={horaFormatada} disabled={desabilitar}>
                                    {horaFormatada}
                                </option>
                                );
                            })}
                        </select>
                        <br/>
                        <button className="botaoSalvarAgendamento">Salvar</button>

                    </form>
                </div>
            }

            
        </div>
    );
}

export default Agendamento;