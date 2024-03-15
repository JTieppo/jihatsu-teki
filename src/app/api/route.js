import { NextResponse } from 'next/server'
import { Pool } from 'pg'
import pg from 'pg';
// const { Pool } = require('pg')

export async function GET() {
    console.log("chamando rota")

    const { Pool } = pg;

    const pool = new Pool({
        connectionString: process.env.POSTGRES_URL,
    })

    // const pool = new Pool({
    //     host: "127.0.0.1",
    //     user: "tieppo",
    //     database: "jihatsu-teki",
    //     port: "5432"
    // })


    pool.query('SELECT * FROM pessoa', (err, res) => {
        console.log(err, res)
        pool.end()
    })
    return NextResponse.json({})
}