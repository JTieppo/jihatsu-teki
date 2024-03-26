import { NextResponse } from 'next/server'
import pg from 'pg';

export async function GET() {
    const { Pool } = pg;
    const pool = new Pool({
        connectionString: process.env.POSTGRES_URL,
    })

    pool.query('SELECT * FROM pessoa', (err, res) => {
        console.log(err, res)
        pool.end()
    })
    return NextResponse.json({})
}