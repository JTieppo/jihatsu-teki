import pg from 'pg';
import { NextResponse } from 'next/server'


export async function POST(req) {
    const dataCriacao = new Date()
    const dados = await req.json();
    let nomeCriador;

    console.log("chamando rota",dados);
    const { Pool } = pg;
    const pool = new Pool({
        connectionString: process.env.POSTGRES_URL,
    })

    
    
    
    nomeCriador = await pool.query(`SELECT nome FROM pessoa WHERE id = '${dados.idResponsavel}'`)
    
    await pool.query(`INSERT INTO projetos (nome, nome_criador, id_criador, descricao, finalizado, endereco, cidade, data_inicio, data_fim, nome_instituicao, telefone, responsavel, hora_inicio, hora_fim) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`, [dados.nomeProjeto, nomeCriador.rows[0].nome, dados.idResponsavel, dados.descricao, false, dados.endereco, dados.cidade, dados.dataInicio, dados.dataFim, dados.nomeInstituicao, dados.telefone, dados.responsavel, dados.horaInicio, dados.horaFim])
    return NextResponse.json({})
} 
