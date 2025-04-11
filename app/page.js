'use client'
import React, { useEffect, useState } from 'react';
import './Tela_Inicial.css'; // Importando o CSS
import axios from 'axios';
import { Router } from 'next/router';
import Menu from "./components/Menu.js"

function Inicio() {

    const [nome, alteraNome] = useState([])
    const [email, alteraEmail] = useState([])
    const [senha, alteraSenha] = useState([])

    async function login(e){

        e.preventDefault()

        const response = await axios.post("http://localhost:3000/api/login/autenticar", {email, senha})

        if (response.status == 200) {
            window.location.href= "./home_cliente"
        }else{
            message("Email, ou senha inválidos")
        }
    }

    async function cadastro(e){

        e.preventDefault();

        const obj = {
            nome: nome,
            email: email,
            senha: senha
        }

        console.log(obj)

        const response = await axios.post("http://localhost:3000/api/cadastro", obj)
        console.log(response)
        if(response.status == 200){
            console.log("Arrombado cadastrado com sucesso!")
            alteraNome("")
            alteraEmail("")
            alteraSenha("")
            window.location.href= "/"
        }

    }

    useEffect(()=> {

    }, [cadastro])

    return (
        <div>
            <Menu/>
            <section id="hero">
                <img
                    className="grad"
                    src="/imagens/barbeiro-home.jpg"
                    alt="Hero"
                />
                <h2>A MELHOR EXPERIÊNCIA NA BARBEARIA</h2>
            </section>

            <br></br>

            <section id="login" className='alinhaTexto'>
                <h3>Login</h3>
                <form onSubmit={(e)=> login(e)}>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" onChange={(e)=> alteraEmail(e.target.value)} required />
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" onChange={(e)=> alteraSenha(e.target.value)} required />
                    <button type="submit">Entrar</button>
                </form>
            </section>

            <div id="cadastro" className='alinhaTexto'>
                <h3>Cadastro</h3>
                <form onSubmit={(e)=> cadastro(e)} >
                    <label htmlFor="cadastro-nome">Nome:</label>
                    <input type="name" id="cadastro-name"  onChange={(e)=> alteraNome(e.target.value)} required/>
                    <label htmlFor="cadastro-email">E-mail:</label>
                    <input type="email" id="cadastro-email"  onChange={(e)=> alteraEmail(e.target.value)} required />
                    <label htmlFor="cadastro-password">Senha:</label>
                    <input type="password" id="cadastro-password"  onChange={(e)=> alteraSenha(e.target.value)} required />
                    <button type="submit">Cadastrar</button>
                </form>
            </div>

            <div id="entrar" className='alinhaTexto'>
                <a href="./home_cliente" className="btn">Navegar sem Logar</a>
            </div>

            <footer>
                <h4>Contatos</h4>
                <p>Telefone: (XX) XXXX-XXXX</p>
                <p>E-mail: contato@barbeariaseusonho.com</p>
                <p>Endereço: Rua do Seu Sonho, 123 - Bairro dos Sonhos, Cidade dos Sonhos</p>
                <p>Horário de Funcionamento: Segunda a Sexta, 8h às 18h; Sábado, 9h às 13h</p>
            </footer>
        </div>
    );
}

export default Inicio;