import { NextResponse } from 'next/server';
import pg from 'pg';

export async function POST(req) {
    const dados = await req.json();
    const { Pool } = pg;
    const pool = new Pool({
        connectionString: process.env.POSTGRES_URL,
    });
    
    const pessoa = await pool.query(`SELECT * FROM pessoa WHERE email = '${dados.email}'`);
    console.log("dados", dados.email)
 
    if (pessoa.rows[0] != undefined) {
        if (pessoa.rows[0].senha == dados.senha) {
            return NextResponse.json(pessoa.rows[0]);
        } else {
            return NextResponse.json({ id: 0 })
        }
    } else {
        return NextResponse.json({id:0})
    }
}