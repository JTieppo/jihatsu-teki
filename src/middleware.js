import { NextResponse } from "next/server"
import Cookies from "js-cookie";
let id;

const baseUrlDatabase = 'http://127.0.0.1:3000/api/auth/buscatoken'
export async function middleware(request) {
    let redireciona = false;
    const token = request.cookies.get('auth_token')?.value
    const id = request.cookies.get('auth_id')?.value
    const idPath = request.url.split('/')[5]
    console.log(request.url)

    if (token != undefined && id != undefined) {
        await fetch(baseUrlDatabase, {
            method: 'POST',
            body: JSON.stringify({ id: idPath, token: token })
        })
            .then(response => response.json())
            .then(response => {
                console.log("reponse",response, id)
                if (!response.validation || !token || token != response.token || id != response.id) {
                    redireciona = true
                    console.log("auto?")
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
