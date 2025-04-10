import conexao from "@/app/lib/conexao"

export async function GET(request, {params}) {

    const dia = (await params).dia

    const query = `
        SELECT a.dia, a.horario, u.nome AS u_nome, c.nome AS c_nome, c.preco
        FROM agendamentos AS a
        JOIN usuarios AS u ON a.id_usuario = u.id
        JOIN cortes AS c ON a.id_corte = c.id
        WHERE dia = ?
        ORDER BY dia, horario;

    `
    const [results] = await conexao.execute(query, [dia])

    return new Response(JSON.stringify(results),
        {

            status: 200,
            headers: { "content-Type": "application/json" }
        }
    )

}