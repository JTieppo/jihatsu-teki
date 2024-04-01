import {NextResponse} from 'next/server'
import pg from 'pg'


export async function POST(req){
    const dados = await req.json()
    const { Pool } = pg;
    const pool = new Pool({
        connectionString: process.env.POSTGRES_URL,
    })
    
    const personalTableRaw = await pool.query(`SELECT personal_table FROM pessoa WHERE id = '${dados.idUser}'`)
    const personalTable = personalTableRaw.rows[0].personal_table
    const favoritadoRaw = await pool.query(`SELECT projetos_favoritados_id FROM ${personalTable} WHERE projetos_favoritados_id = '${dados.idProjeto}'`)
    if(favoritadoRaw.rowCount != 0){
        const favoritado = favoritadoRaw.rows[0]
        return NextResponse.json(favoritado)
    } else {
        return NextResponse.json({})
    }
}