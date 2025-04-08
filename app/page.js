'use client'
import React, { useState } from 'react';
import './Tela_Inicial.css'; // Importando o CSS

function Inicio() {

    const [email, alteraEmail] = useState([])
    const [senha, alteraSenha] = useState([])

    const [login, alteraLogin] = useState(0)
    

return (
    <div>
      <header>
        <h1>Barbearia Wender</h1>
      </header>

      <section id="hero">
        <img
          className="grad"
          src="/imagens/barbeiro-home.jpg"
          alt="Hero"
        />
        <h2>A MELHOR EXPERIÊNCIA NA BARBEARIA</h2>
      </section>

      <br></br>

      <section id="login">
        <h3>Login</h3>
        <form>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Entrar</button>
        </form>
      </section>

      <div id="cadastro">
        <h3>Cadastro</h3>
        <form>
          <label htmlFor="cadastro-email">E-mail:</label>
          <input type="email" id="cadastro-email" name="cadastro-email" required />
          <label htmlFor="cadastro-password">Senha:</label>
          <input type="password" id="cadastro-password" name="cadastro-password" required />
          <button type="submit">Cadastrar</button>
        </form>
      </div>

      <div id="entrar">
        <a href="#" className="btn">Navegar sem Logar</a>
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