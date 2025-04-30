'use client'
import React, { useEffect, useState } from 'react';
import './Tela_Inicial.css'; // Importando o CSS
import axios from 'axios';
import { Router } from 'next/router';
import host from './lib/host';
import Menu_cliente from './components/Menu_cliente';
import Swal from 'sweetalert2'

function Inicio() {

    const [nome, alteraNome] = useState([])
    const [email, alteraEmail] = useState([])
    const [senha, alteraSenha] = useState([])

    const erroLogin = () => toast.error("Email, ou senha inválido...")
    const erroNome = () => toast.error("O nome é muito curto")
    const erroEmail = () => toast.error("O email deve conter ' @ ' e ' . '")
    const erroSenha = () => toast.error("a senha é muito curta")

    async function login(e){

        e.preventDefault();

        const obj = {
            nome: nome,
            email: email,
            senha: senha
        }

        const response = await axios.post(host+"login/autenticar", obj)

        if (response.data.length == 0){
            erroLogin()
            return
        }
        
        if(email != "ze@adm.com" && senha != "Zeadm"){
            delete response.data[0].senha
            const usuario = JSON.stringify(response.data[0])
            localStorage.setItem("usuario", usuario)
            window.location.href = '/home_cliente'
        }else{
            delete response.data[0].senha
            const usuario = JSON.stringify(response.data[0])
            localStorage.setItem("usuario", usuario)
            window.location.href = '/home_barbeiro' 
        }


    }

    async function cadastro(e){

        e.preventDefault();

        let nomeLocal = nome
        let emailLocal = email
        let senhaLocal = senha

        const obj = {
            nome: nome,
            email: email,
            senha: senha
        }

        console.log(obj)

        const response = await axios.post(host+"cadastro", obj)



        
        if(nomeLocal.length <= 3){
            erroNome()
            return
        }
        
        if(emailLocal.includes(".") == false || emailLocal.includes("@") == false){
            erroEmail()
            return
        }
        
        if(senhaLocal.length < 5){
            erroSenha()
            return
        }
        
        if(response.status == 200){
            alteraNome("")
            alteraEmail("")
            alteraSenha("")
            window.location.href= "/"
        }
    }

    useEffect(()=> {
        
        
    }, [])

    return (    
        <div>
            <Menu_cliente/>
            
            <div className='apresentacao'>
                <h2>A MELHOR EXPERIÊNCIA NA BARBEARIA</h2>
            </div>

            <br></br>

            <div className="formularios">

                <section id="login" className='alinhaTexto'>
                    <h3>Entrar</h3>
                    <form onSubmit={(e)=> login(e)}>
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email_login" name="email" onChange={(e)=> alteraEmail(e.target.value)} required />
                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password_login" name="password" onChange={(e)=> alteraSenha(e.target.value)} required />
                        <button className='btn'>Entrar</button>
                    </form>
                </section>

                <div id="cadastro" className='alinhaTexto'>
                    <h3>Cadastre-se</h3>
                    <form onSubmit={(e)=> cadastro(e)} >
                        <label htmlFor="cadastro-nome">Nome:</label>
                        <input type="name" id="cadastro-name"  onChange={(e)=> alteraNome(e.target.value)} required/>
                        <label htmlFor="cadastro-email">E-mail:</label>
                        <input type="email" id="cadastro-email"  onChange={(e)=> alteraEmail(e.target.value)} required />
                        <label htmlFor="cadastro-password">Senha:</label>
                        <input type="password" id="cadastro-password"  onChange={(e)=> alteraSenha(e.target.value)} required />
                        <button className='btn' type="submit">Cadastrar</button>
                    </form>
                </div>
            
            </div>

            <div id="entrar" className='alinhaTexto'>
                <p>Conheça as opções de cortes e dias disponíveis</p>
                <a href="./agendamento" className="botaoNavegar" onClick={()=> localStorage.removeItem("usuario")}>Navegar sem Logar</a>
            </div>

            <footer>
                <h4>Contatos</h4>
                <p>Telefone: (16) 9 9173-3577</p>
                <p>E-mail: contato@barbeariaseusonho.com</p>
                <p>Endereço: Rua do Seu Sonho, 123 - Bairro dos Sonhos, Cidade dos Sonhos</p>
                <p>Horário de Funcionamento: Segunda a Sexta, 8h às 18h; Sábado, 9h às 13h</p>
            </footer>
            
        </div>
    );
}

export default Inicio;