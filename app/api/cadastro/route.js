import { headers } from "next/headers"
import conexao from "@/app/lib/conexao"

export async function POST(request){

    const body = await request.json();


    const query = `
        INSERT INTO usuarios (nome, email, senha, adm) VALUES (?, ?, ?, ?)
    `
    const [results] = await conexao.execute(query,
        [body.nome, body.email, body.senha, false]
    )

    return new Response( JSON.stringify(results), 
    {
        status:200,
        headers: {"content-Type": "application/json"}
    }
)

}