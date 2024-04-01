import { NextResponse } from 'next/server'
import pg from 'pg';

function GeraToken(nome, sobrenome) {
    let carga = [];
    let token;
    let contador = [];
    for(let t = 0; t <= 2; t++){
        contador[t] = 0;
    }
    for (let x = 1; x < 28; x++) {
        if (x != 0 && x != 2 && x != 6 && x != 5 && x != 9 && x != 12 && x != 17 && x != 21 && x != 22 && x != 27) {
            carga[x] = (Math.random() * 10000).toFixed()
        }
        else {
            if (contador[0] < (nome.length + sobrenome.length)) {
                if (contador[0] % 2 == 0 && contador[2] < sobrenome.length) {
                    carga[x] = sobrenome.slice()[contador[2]];
                    contador[2]++
                } else {
                    if (contador[1] < nome.length) {
                        carga[x] = nome.slice()[contador[1]];
                        contador[1]++
                    } else {
                        carga[x] = 'Sz1'
                    }
                }
            } else {
                if (contador[0] % 2 == 0) {
                    carga[x] = 't1As2'
                } else {
                    carga[x] = 'afq23q1qjsJHas'
                }
            }
        }

    }
    for (let z = 0; z < carga.length; z++) {
        if (carga[z] != undefined && z!=0) {
            token = token + carga[z];
        } else {
            token = token + 'aoo1934s5aKlsA23'
        }
    }
    token = token.split('undefined')[1];
    return token
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
        const token = GeraToken(dados.nome.split(' ')[0], dados.nome.split(' ')[1])
        let valores = []
        const nomeTratado = removeNumbers(dados.nome);
        await pool.query(`INSERT INTO pessoa(email, nome, senha, token, data_nascimento, escolaridade, sexo, cidade, personal_table) VALUES ('${dados.email}', '${dados.nome}', '${dados.senha}', '${token}', '${dados.dataNascimento}', '${dados.escolaridade}', '${dados.sexo}', '${dados.cidade}', '${nomeTratado}') RETURNING *`, (err, res) => {
            if (err) {
                console.log(err.stack);
            }
        })
        await pool.query(`CREATE TABLE ${nomeTratado} (projetos_favoritados_id INT, certificados TEXT, habilidades TEXT)`)

        const pessoaRaw = await pool.query(`SELECT * FROM pessoa WHERE email = '${dados.email}'`)
        const pessoa = pessoaRaw.rows
        return NextResponse.json({ success: true, id: pessoa[0].id, nameCookieA: 'auth_id', nameCookieB: 'auth_token', cookieA: pessoa[0].id, cookieB: pessoa[0].token});
    }
}