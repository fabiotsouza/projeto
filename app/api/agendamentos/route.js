import conexao from "@/app/lib/conexao"

export async function GET() {

    const query = `
        SELECT a.dia, a.horario, u.nome AS u_nome, c.nome AS c_nome, c.preco
        FROM agendamentos AS a
        JOIN usuarios AS u ON a.id_usuario = u.id
        JOIN cortes AS c ON a.id_corte = c.id
        ORDER BY dia, horario;

    `
    const [results] = await conexao.execute(query)

    return new Response(JSON.stringify(results),
        {

            status: 200,
            headers: { "content-Type": "application/json" }
        }
    )

}

export async function POST(request) {
    
    const body = request.body;

    const existeAgendamento = buscaAgendamentoNaData(body.data);
    console.log(existeAgendamento)
    if(existeAgendamento == true){
        return new Response(null)
    }

    const query = `
    INSERT INTO agendamentos (dia, horario, id_corte, id_usuario) VALUES (?, ?, ?, ?)
    `
    const [results] = await conexao.execute(query, [body.dia, body.hora, body.id_corte, body.id_usuario])

    return new Response(JSON.stringify(results.insertId))

}

async function buscaAgendamentoNaData(data){

    const query = `
    SELECT * FROM agendamentos WHERE data >= ? AND data <= ?
    `
    const [results] = await conexao.execute(query, [data, data])
    return results

}