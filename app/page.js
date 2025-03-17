function Inicio() {
  return (  );
}

export default Inicio;

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Barbearia do Seu Sonho</title>
    <link rel="stylesheet" href="Tela_Inicial.css"/>
</head>
<body> 
    <header>
        <h1>Barbearia do Seu Sonho</h1>
    </header>

    <section id="hero">
        <img  class="grad" src="https://www.institutowalcosta.com.br/wp-content/uploads/2021/09/barbeiro-saiba-tudo-sobre-essa-profissao-1024x683.jpg" class="heaidht"/>
        <h2>A MELHOR EXPERIÊNCIA NA BARBEARIA</h2>
        <p>Conheça nossos profissionais e serviços de qualidade.</p>
    </section>

    <section id="login">
        <h3>Login</h3>
        <form>
            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" required>
            <label for="password">Senha:</label>
            <input type="password" id="password" name="password" required>
            <button type="submit">Entrar</button>
        </form>
    </section>

    <section id="cadastro">
        <h3>Cadastro</h3>
        <form>
            <label for="cadastro-email">E-mail:</label>
            <input type="email" id="cadastro-email" name="cadastro-email" required>
            <label for="cadastro-password">Senha:</label>
            <input type="password" id="cadastro-password" name="cadastro-password" required>
            <button type="submit">Cadastrar</button>
        </form>
    </section>

    <section id="entrar">
        <a href="#" class="btn">Navegar sem Logar</a>
    </section>

    <footer>
        <h4>Contatos</h4>
        <p>Telefone: (XX) XXXX-XXXX</p>
        <p>E-mail: contato@barbeariaseusonho.com</p>
        <p>Endereço: Rua do Seu Sonho, 123 - Bairro dos Sonhos, Cidade dos Sonhos</p>
        <p>Horário de Funcionamento: Segunda a Sexta, 8h às 18h; Sábado, 9h às 13h</p>
        </ul>
    </footer>
</body>
</html>