import conexao from "@/app/lib/conexao"

export async function PUT( request, {params}){

    const id = (await params).id
    const body = await request.json()

    const query = ` UPDATE cortes SET nome= ?, preco = ?, imagem = ? WHERE id = ?;`
    const [results] = await conexao.execute(
        query, [body.name, body.price, body.image, id])

    return new Response(
        JSON.stringify(results),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    )
}

export async function DELETE( request, {params}){

    const id = (await params).id

    const query = `UPDATE cortes SET ativo = 0 WHERE id = ?;`
    const [results] = await conexao.execute(query, [id])

    return new Response(
        JSON.stringify(results),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    )
}