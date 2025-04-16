import conexao from "@/app/lib/conexao"

export async function GET(request, {params}){

    const id = (await params).id
    const query = `
        SELECT * FROM cortes JOIN usuarios ON cortes.id = usuarios.id WHERE usuarios.id = ${id};
    `
    const [results] = await conexao.execute(query)

    return new Response( JSON.stringify(results) ,
    {

        status: 200,
        headers: {"content-Type": "application/json"}
    }
    )

}