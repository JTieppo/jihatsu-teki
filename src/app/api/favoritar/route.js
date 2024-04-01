import {NextResponse} from 'next/server'
import pg from 'pg'

export async function POST(req){
    let success = true;
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
        await pool.query(`DELETE FROM ${personalTable} WHERE projetos_favoritados_id = '${dados.idProjeto}'`, (err, res) => {
            if(err){
                success = false;
            }
        })
    } else {
        await pool.query(`INSERT INTO ${personalTable} (projetos_favoritados_id) values ('${dados.idProjeto}')`, (err, res) => {
            if(err){
                success = false;
            }
        })
    }
    return NextResponse.json({success})
}