import conexao from "@/app/lib/conexao"

export async function GET(){
    
    const query = `
        SELECT * FROM cortes WHERE ativo = 1;
    `
    const [results] = await conexao.execute(query)

    return new Response( JSON.stringify(results) ,
    {

        status: 200,
        headers: {"content-Type": "application/json"}
    }
    )

}
export async function POST(request) {
    const body = await request.json()
    const query =`
    INSERT INTO cortes
    (nome, preco, imagem)
    VALUES
    (?, ?, ?);`
    const[results] = await conexao.execute(
        query,
        [body.name, body.price, body.image]
    )
    return new Response(JSON.stringify(results.insertId))
}


