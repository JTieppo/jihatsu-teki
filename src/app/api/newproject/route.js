import pg from 'pg';
import { NextResponse } from 'next/server'

function VerificaPrioridade(data) {
    const dataAtual = new Date()
    const dataTratado = data.split('-');
    let prioridade = '';
    if (dataAtual.getFullYear() == data[0] && dataAtual.getMonth() == dataTratado[1]) {
        prioridade = 'Alta';
    } else if (dataAtual.getFullYear() == dataTratado[0]) {
        prioridade = 'Média';
    } else {
        prioridade = 'Mínima'
    }
    return prioridade
}
function VerificaStatus(data) {
    const dataAtual = new Date()
    let status = '';
    if (dataAtual.getDate() < data.getDate() && dataAtual.getMonth() < data.getMonth() && dataAtual.getFullYear() < data.getFullYear()) {
        status = 'A iniciar';
    } else {
        status = 'Em execução';
    }
    return status;
}

export async function POST(req) {
    const dataCriacao = new Date()
    const dados = await req.json();
    let nomeCriador;

    console.log("chamando rota",dados);
    const { Pool } = pg;
    const pool = new Pool({
        connectionString: process.env.POSTGRES_URL,
    })

    const prioridade = VerificaPrioridade(dados.dataFim);
    const status = VerificaStatus(dataCriacao)
    
    await pool.query(`SELECT nome FROM pessoa WHERE id = '${dados.idResponsavel}'`, (err, res)=>{
        nomeCriador = res.rows[0].nome
        pool.query(`INSERT INTO projetos (nome, nome_criador, id_criador, data_criacao, descricao, status, prioridade, ultima_atualizacao, endereco, cidade, representante_instituicao, data_inicio, data_fim, nome_instituicao) values ('${dados.nomeProjeto}', '${nomeCriador}', ${dados.idResponsavel}, '${dataCriacao}', '${dados.descricao}','${status}', '${prioridade}', '${dataCriacao}','${dados.endereco}', '${dados.cidade}', ${dados.representanteInstituicao}, '${dados.dataInicio}', '${dados.dataFim}', '${dados.nomeInstituicao}')`)
    })
    
    return NextResponse.json({})
} 
