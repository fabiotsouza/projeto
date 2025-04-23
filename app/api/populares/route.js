import conexao from "@/app/lib/conexao";

export async function GET(){

    const query = `
        SELECT c.nome AS cortes, COUNT(a.id) AS total_realizados
        FROM agendamentos a JOIN cortes c ON a.id_corte = c.id
        GROUP BY c.nome ORDER BY total_realizados DESC; 
    `

    const [results] = await conexao.execute(query)

    return new Response(JSON.stringify(results) ,
    {
        status: 200,
        headers: {"content-Type": "application/json"}
    }   
    )
}