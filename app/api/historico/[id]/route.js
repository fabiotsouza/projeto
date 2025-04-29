import conexao from "@/app/lib/conexao"

export async function GET(request, {params}){

    const id = (await params).id
    const query = `
        SELECT agendamentos.*, cortes.* FROM agendamentos JOIN cortes ON agendamentos.id_corte = cortes.id WHERE agendamentos.id_usuario = ${id} ORDER BY agendamentos.dia LIMIT 5;
    `
    const [results] = await conexao.execute(query)

    return new Response( JSON.stringify(results) ,
    {

        status: 200,
        headers: {"content-Type": "application/json"}
    }
    )

}