import { headers } from "next/headers"
import conexao from "@/app/lib/conexao"
export async function POST(request){

    const body = await request.json();

    const query = `
   SELECT * FROM usuarios WHERE email = ? AND senha = ?;
    `
    
    const [results] = await conexao.execute(query, [body.email, body.senha])

    if(results.length > 0){

        return new Response( JSON.stringify(results) ,
    {
        status:200,
        headers: {"content-Type": "application/json"}
    }
    )
    }else{
        return new Response( JSON.stringify({message: "email, ou senha inválidos"}),
        {
            status:401,
            headers: {"content-Type": "application/json"}
        }
    )
    }   
}

