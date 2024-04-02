import { NextResponse } from "next/server"
import Cookies from "js-cookie";
let id;

const baseUrlDatabase = 'https://jihatsu-teki.vercel.app/api/auth/buscatoken'
export async function middleware(request) {
    let redireciona = false;
    const token = request.cookies.get('auth_token')?.value
    const id = request.cookies.get('auth_id')?.value
    const idPath = request.url.split('/')[5]

    if (token != undefined && id != undefined) {
        await fetch(baseUrlDatabase, {
            method: 'POST',
            body: JSON.stringify({ id: idPath, token: token })
        })
            .then(response => response.json())
            .then(response => {
                if (!response.validation || !token || token != response.token || id != response.id) {
                    redireciona = true
                }
            })
    }else {
        redireciona = true
    }

    if (redireciona) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}


export const config = {
    matcher: '/login/usuario/:path*',
}
