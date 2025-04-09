import { headers } from "next/headers"
import conexao from "@/app/lib/conexao"

export async function POST(){

    const query = `
    INSERT INTO agendamento (dia, horario, id_usuario, id_corte) VALUES (?, ?, ?, ? )
    `
    const [results] = await conexao.execute(
        query,
        [body.dia, body.horario, 1, body.id]
    )
}