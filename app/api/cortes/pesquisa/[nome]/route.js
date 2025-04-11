
import conexao from "@/app/lib/conexao"

export async function GET(request, {params}){

    const nome = (await params).nome
    const query = `SELECT * FROM cortes WHERE nome LIKE '%${nome}%';`
    const[results] = await conexao.execute(query)

    return new Response(
        JSON.stringify(results),
        {
            status: 200,
            headers: {"Content-Type": "application/json"}
        }
    )

}