import conexao from "@/app/lib/conexao";

export async function GET(){

    const query = `
        SELECT 
        c.nome AS corte,
        COUNT(*) AS total_agendamentos
        FROM 
        agendamentos a
        JOIN 
        cortes c ON a.corte_id = c.id
        GROUP BY 
        a.corte_id, c.nome
        ORDER BY 
        total_agendamentos DESC
        LIMIT 10;
    `

    const [results] = await conexao.execute(query)

    return new Response(JSON.stringify(results) ,
    {
        status: 200,
        headers: {"content-Type": "application/json"}
    }   
    )
}