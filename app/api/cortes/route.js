import { headers } from "next/headers"
import conexao from "@/app/lib/conexao"

export async function GET(){
    
    const query = `
        SELECT * FROM cortes;
    `
    const [results] = await conexao.execute(query)

    return new Response( JSON.stringify(results) ,
    {

        status: 200,
        headers: {"content-Type": "application/json"}
    }
    )

}

