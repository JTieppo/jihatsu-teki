"use client"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {StarIcon} from "@heroicons/react/24/solid"

export default function Company() {
    const idPath = usePathname().split('/')[5];
    const idUser = usePathname().split('/')[3];
    const [response, setResponse] = useState([]);
    const [favoritado, setFavoritado] = useState(false);


    useEffect(() => {
        fetch('/api/busca/projeto', {
            method: "POST",
            body: JSON.stringify({ id: idPath })
        })
            .then(response => response.json())
            .then(response => setResponse(response))

        fetch('/api/favoritar/favoritado', {
            method: "POST",
            body: JSON.stringify({idProjeto: idPath, idUser: idUser})
        })
        .then(response => response.json())
        .then(response => {
            if(response.projetos_favoritados_id != undefined){
                setFavoritado(!favoritado)
            }
        })
    }, [idPath])

    function Favoritar(){
        fetch('/api/favoritar',{
            method: "POST",
            body: JSON.stringify({idProjeto: idPath, idUser: idUser})
        })
        .then(response => response.json())
        .then(response => {
            if(response.success){
                setFavoritado(!favoritado)
            }
        })
    }

    const [showSnackbar, setShowSnackbar] = useState('');
    const botaoDesativado = () => {
        setShowSnackbar('show');
        setTimeout(() => {
            setShowSnackbar('');
        }, 3000);
    };

    if (response.projeto != undefined) {
        const projeto = response.projeto[0]
        console.log(projeto)
        const dataCriacaoRaw = projeto.data_criacao.split(' ')[1] + ' ' + projeto.data_criacao.split(' ')[2] + ' ' + projeto.data_criacao.split(' ')[3]
        const dataUltimaAtualizacaoRaw = projeto.ultima_atualizacao.split(' ')[1] + ' ' + projeto.ultima_atualizacao.split(' ')[2] + ' ' + projeto.ultima_atualizacao.split(' ')[3]


        return (
            <div className="flex flex-col w-full justify-between">
                <div className="flex flex-col w-[80%] mx-auto rounded mt-10 p-6" id="card">
                    <p className="opacity-20">Criado em {dataCriacaoRaw}</p>
                    <div className="flex w-full justify-between">
                        <h2 className="text-3xl">{projeto.nome}</h2>
                        <div className="flex items-center">
                            <button className="mr-6 cursor-pointer" onClick={Favoritar}><StarIcon className={`w-6 ${favoritado? 'text-orange-500' : 'text-slate-500'}`}/></button>
                            <button className="p-2 px-4 bg-[#00D286] rounded">Se voluntariar</button>
                        </div>
                    </div>
                    <p className="text-[#00D286]">{projeto.nome_criador}</p>
                    <div className="mt-10">
                        <div className="flex flex-col justify-between mb-10">
                            <p className="opacity-20">Atualizado pela ultima vem em {dataUltimaAtualizacaoRaw}</p>
                            <p>{projeto.representante_instituicao ? `Nós da instituição ${projeto.nome_instituicao} te convidamos a esse projeto` : `${projeto.nome_criador} te convida a se voluntariar`}</p>
                            <p>Previsão de inicio: {projeto.data_inicio}</p>
                            <p>Previsão de termino: {projeto.data_fim}</p>
                            <p>Prioridade: <span className={`${projeto.prioridade == 'Mínima' ? 'text-green-400' : projeto.prioridade == 'Média' ? 'text-yellow-300' : 'text-red-500'}`}>{projeto.prioridade}</span></p>
                            <p>status: {projeto.status}</p>
                            <p>Local: {projeto.endereco}</p>
                        </div>
                        <h3 className="text-xl">DESCRIÇÃO DO PROJETO</h3>
                        <p>{projeto.descricao}</p>
                    </div>
                </div>
                <div className="h-20 w-full flex flex-row justify-between items-center px-[10%]" id="card">
                    <div className="hidden md:flex flex-col">
                        <p className="text-lg">{response?.position}</p>
                        <p className="text-sm text-[#00D286]">Jihatsu-Teki

                        </p>
                    </div>
                    <button className="p-2 rounded w-full md:w-32 bg-[#00D286]" id="" onClick={botaoDesativado}>Se voluntariar</button>
                </div>
                <div id="snackbar" className={showSnackbar}>
                    <p className="my-auto mx-auto text-2xl text-[#00D286]">Illustrative button</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex w-screen h-screen">
                <p className="mx-auto my-auto">Carregando...</p>
            </div>
        )
    }
}