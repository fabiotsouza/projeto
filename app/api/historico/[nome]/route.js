import conexao from "@/app/lib/conexao"

export async function GET(request, {params}){

    const nome = (await params).nome
    const query = `
        SELECT * FROM cortes JOIN usuarios, agendamentos ON agendamentos.id = usuarios.id WHERE usuarios.nome = ${nome};
    `
    const [results] = await conexao.execute(query)

    return new Response( JSON.stringify(results) ,
    {

        status: 200,
        headers: {"content-Type": "application/json"}
    }
    )

}