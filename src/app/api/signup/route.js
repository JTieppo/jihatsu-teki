import { NextResponse } from 'next/server'
import pg from 'pg';

function GeraToken(nome, sobrenome) {
    console.log("começa")
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
                    console.log("sobrenome", sobrenome, contador[2])
                    contador[2]++
                } else {
                    if (contador[1] < nome.length) {
                        carga[x] = nome.slice()[contador[1]];
                        console.log("nome", nome, contador[1])
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
        const token = GeraToken(dados.nome, dados.sobrenome)
        let valores = []
        pool.query(`INSERT INTO pessoa(email, nome, sobrenome, senha, token) VALUES ('${dados.email}', '${dados.nome}', '${dados.sobrenome}', '${dados.senha}', '${token}')`, (err, res) => {
            if (err) {
                console.log(err.stack);
            } else {
                console.log(res.rows[0]);
            }
        })
        return NextResponse.json({ sucess: true, pessoa });
    }
}