import mysql from "mysql2/promise";

const conexao = await mysql.createConnection(
    {
        host: "10.60.46.38",
        user: "root",
        password: "",
        database: "projeto_novo"
    }
)


export default conexao;
