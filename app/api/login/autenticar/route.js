
import conexao from "@/app/lib/conexao"
export async function POST(request){

    const body = await request.json();

    const query = `
   SELECT * FROM usuarios WHERE email = ? AND senha = ?;
    `
    
    const [results] = await conexao.execute(query, [body.email, body.senha])

    return new Response( 
        JSON.stringify(results) ,
        {
            status:200,
            headers: {"content-Type": "application/json"}
        }
    )

    
     
}

