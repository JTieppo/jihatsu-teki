import {NextResponse} from 'next/server'

export async function GET() {
    const dados = await req.json();
    console.log(dados);
    return NextResponse.json({dados})
}