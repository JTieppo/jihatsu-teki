import {NextResponse} from 'next/server';
import pg from 'pg';


export async function POST(req){
    const dados = await req.json()
    const { Pool } = pg;
    const pool = new Pool({
        connectionString: process.env.POSTGRES_URL,
    })
    const projetoRaw = await pool.query(`SELECT * FROM projetos WHERE id = '${dados.id}'`);
    const projeto = projetoRaw.rows;
    return NextResponse.json({projeto})
}