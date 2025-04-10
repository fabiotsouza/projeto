import { headers } from "next/headers"
import conexao from "@/app/lib/conexao"
export async function POST(){

    const query = `
    SELECT * FROM usuarios WHERE email = "?" AND senha = "?";
    `
    const [results] = await conexao.execute(query)

    return new Response( JSON.stringify(results) ,
{
    status:200,
    headers: {"content-Type": "application/json"}
}
)

}