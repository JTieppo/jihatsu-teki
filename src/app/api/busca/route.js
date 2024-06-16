import { NextResponse } from "next/server";
import Fuse from "fuse.js";
import pg from 'pg';


export const POST = async (req) => {
    const searchPattern = await req.json();
    const { Pool } = pg
    const pool = new Pool({
        connectionString: process.env.POSTGRES_URL,
    })
    const dataRaw = await pool.query(`SELECT * FROM projetos`)
    const data = dataRaw.rows
    var queryData = [];

    if (searchPattern['favoritado']) {
        const personalTableRaw = await pool.query(`SELECT personal_table FROM pessoa WHERE id = '${searchPattern.idUser}'`)
        const personalTable = personalTableRaw.rows[0].personal_table
        const favoritadoRaw = await pool.query(`SELECT projetos_favoritados_id FROM ${personalTable} `)
        const idsFavoritos = favoritadoRaw.rows.map(projeto => projeto.projetos_favoritados_id)


        for (const id of idsFavoritos) {
            try {
                const res = await pool.query(`SELECT * FROM projetos WHERE id = $1`, [id]);
                console.log(res.rows[0])
                queryData.push(res.rows[0]);
            } catch (err) {
                console.error(err);
            }
        }

    } else {
        queryData = data.map(dados => dados)
    }
    const fuseOptions = {
        keys: [
            "cidade",
            "endereco",
            "nome",
            "nome_criador",
            "descricao",
            "status",
            "prioridade"
        ]
    };


    if (searchPattern.buscaLocal == '') {
        if (searchPattern.buscaTipo == '') {
            var ids = queryData.map(item => item);
        } else {
            const fuse = new Fuse(queryData, fuseOptions);
            var buffer = fuse.search(searchPattern.buscaTipo);
            var teste = buffer.map(item => item.item);
            var ids = teste.map(item => item);
        }
    } else {
        if (searchPattern.buscaTipo == '') {
            const fuse = new Fuse(queryData, fuseOptions);
            var buffer = fuse.search(searchPattern.buscaLocal);
            var teste = buffer.map(item => item.item);
            var ids = teste.map(item => item);
        } else {
            const fuse = new Fuse(queryData, fuseOptions);
            var buffer = fuse.search(searchPattern.buscaLocal);
            var teste = buffer.map(item => item.item);
            const fusedois = new Fuse(queryData, fuseOptions);
            var bufferdois = fusedois.search(searchPattern.buscaTipo)
            var testedois = bufferdois.map(item => item.item)
            var ids = testedois.map(item => item);
        }
    }
    return NextResponse.json(ids);
}

export async function GET() {
    const { Pool } = pg
    const pool = new Pool({
        connectionString: process.env.POSTGRES_URL,
    })
    const projetosRaw = await pool.query(`SELECT * FROM projetos`)
    const projetos = projetosRaw.rows
    console.log(projetosRaw)
    return NextResponse.json(projetos)
}