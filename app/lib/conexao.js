import mysql from "mysql2/promise";

const conexao = await mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "projeto_novo"
    }
)


export default conexao;
