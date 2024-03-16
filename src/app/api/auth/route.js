import { NextResponse } from 'next/server';
import pg from 'pg';


export async function POST(req) {
    const { Pool } = pg;
    const dados = await req.json();
    const pool = new Pool({
        connectionString: process.env.POSTGRES_URL,
    })
    const pessoa = await pool.query(`SELECT * FROM pessoa WHERE id = '${dados.id}'`)
    if(dados.token == pessoa.token && dados.id == pessoa.id){
        return NextResponse.json({validation: true, token})
    } else{
        return NextResponse.json({validation: false})
    }
}