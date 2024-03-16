import { NextResponse } from "next/server"

export default function middleware(request){
    const token = request.cookies.get('auth_token')?.value
    
    const initURL = new URL('/', request.url)

    if(!token || token != 'aSKJHFDDQPOI332484UYPIUHWEJFNOAISUDYiup3odfy932apjnwq3820pihqioeuy08173'){
        if(request.nextUrl.pathname === '/'){
            return NextResponse.next();
        }
        return NextResponse.redirect(initURL);
    }
}

export const config = {
    matcher: ['/usuario/:path*']
}
