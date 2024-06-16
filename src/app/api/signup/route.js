import { NextResponse } from 'next/server'
import pg from 'pg';

function GeraToken() {
    return "asj898h12onas9819nka"
}


function removeNumbers(input) {
    const tamanho = input.length;
    let tratado = [];
    let output = '';

    for (let x = 0; x < tamanho; x++) {
        switch (input[x]) {
            case '0':
                tratado.push('o');
                break;
            case '1':
                tratado.push('i');
                break;
            case '2':
                tratado.push('z');
                break;
            case '3':
                tratado.push('e');
                break;
            case '4':
                tratado.push('a');
                break;
            case '5':
                tratado.push('a'); // foi setado como a para evitar maiores erros
                break;
            case '6':
                tratado.push('b');
                break;
            case '7':
                tratado.push('t');
                break;
            case '8':
                tratado.push('o');
                break;
            case '9':
                tratado.push('g');
                break;
            case 'a':
                tratado.push('a');
                break;
            case 'b':
                tratado.push('b');
                break;
            case 'c':
                tratado.push('c');
                break;
            case 'd':
                tratado.push('d');
                break;
            case 'e':
                tratado.push('e');
                break;
            case 'f':
                tratado.push('f');
                break;
            case 'g':
                tratado.push('g');
                break;
            case 'h':
                tratado.push('h');
                break;
            case 'i':
                tratado.push('i');
                break;
            case 'j':
                tratado.push('j');
                break;
            case 'k':
                tratado.push('k');
                break;
            case 'l':
                tratado.push('l');
                break;
            case 'm':
                tratado.push('m');
                break;
            case 'n':
                tratado.push('n');
                break;
            case 'o':
                tratado.push('o');
                break;
            case 'p':
                tratado.push('p');
                break;
            case 'q':
                tratado.push('q');
                break;
            case 'r':
                tratado.push('r');
                break;
            case 's':
                tratado.push('s');
                break;
            case 't':
                tratado.push('t');
                break;
            case 'u':
                tratado.push('u');
                break;
            case 'v':
                tratado.push('v');
                break;
            case 'x':
                tratado.push('x');
                break;
            case 'w':
                tratado.push('w');
                break;
            case 'y':
                tratado.push('y');
                break;
            case 'z':
                tratado.push('z');
                break;
            case 'ç':
                tratado.push('c')
                break;
            default:
                tratado.push('x');
        }
    }
    output = tratado.join('');
    return output;
}


export async function POST(req) {
    let pessoa = [];
    let mailExist;
    const dados = await req.json()
    const { Pool } = pg;
    const pool = new Pool({
        connectionString: process.env.POSTGRES_URL,
    })
    

    const response = await pool.query(`SELECT * FROM pessoa WHERE email = '${dados.email}'`)
    if (response.rows.length > 0) {
        return NextResponse.json({ sucess: false, mailExiste: true })
    } else {
        const token = GeraToken()
        let valores = []
        await pool.query(`INSERT INTO pessoa(email, nome, senha, token, cidade) VALUES ('${dados.email}', '${dados.nome}', '${dados.senha}', '${token}', '${dados.cidade}') RETURNING *`, (err, res) => {
            if (err) {
                console.log(err.stack);
            }
        })
        

        const pessoaRaw = await pool.query(`SELECT * FROM pessoa WHERE email = '${dados.email}'`)
        const pessoa = pessoaRaw.rows
        return NextResponse.json({ success: true, id: pessoa[0].id, nameCookieA: 'auth_id', nameCookieB: 'auth_token', cookieA: pessoa[0].id, cookieB: pessoa[0].token});
    }
}