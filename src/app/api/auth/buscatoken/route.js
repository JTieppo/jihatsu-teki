import { NextResponse } from 'next/server';
import pg from 'pg';


export async function POST(req) {
    const { Pool } = pg;
    const dados = await req.json();
    const pool = new Pool({
        connectionString: process.env.POSTGRES_URL,
    })
    const pessoa = await pool.query(`SELECT * FROM pessoa WHERE id = '${dados.id}'`)
    if(dados.token == pessoa.rows[0].token && dados.id == pessoa.rows[0].id){
        return NextResponse.json({validation: true, token: pessoa.rows[0].token, id: pessoa.rows[0].id})
    } else{
        return NextResponse.json({validation: false})
    }
}