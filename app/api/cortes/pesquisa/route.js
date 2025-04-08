import { headers } from "next/headers"
import conexao from "@/app/lib/conexao"

export async function GET(request, {params}){

    const nome = (await params).nome

    const query = `SELECT * FROM cortes WHERE nome like %?%;`
    const[results] = await conexao.execute(query, [nome])

    return new Response(
        JSON.stringify(results),
        {
            status: 200,
            headers: {"Content-Type": "application/json"}
        }
    )

}