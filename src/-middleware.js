// import { Pool } from 'pg'
// import pg from 'pg';

import { NextResponse } from "next/server"
let id;
const baseUrlDatabase = 'http://jihatsu-teki.vercel.app/api/auth/buscatoken'
export default function middleware(request) {
    // const { Pool } = pg;
    // const pool = new Pool({
    //     connectionString: process.env.POSTGRES_URL,
    // })
    // pool.query('SELECT * FROM pessoa', (err, res) => {
    //     console.log(err, res)
    //     pool.end()
    // })

    const token = request.cookies.get('auth_token')?.value
    id = request.cookies.get('id')?.value
    fetch(baseUrlDatabase, {
        method: 'POST',
        body: JSON.stringify({ id: id, token: token })
    })
    .then(response => response.json())
    .then(response => console.log(response))

    const initURL = new URL('/', request.url)

    if (!token || id != id || token != token) {
        if (request.nextUrl.pathname === '/') {
            return NextResponse.next();
        }
        return NextResponse.redirect(initURL);
    }
}

export const config = {
    matcher: [`/usuario/${id}:path*`]
}
