"use client"
import { usePathname } from "next/navigation"
import { useState } from "react";


export default function Projetista() {
    const idPath = usePathname().split('/')[3];
    const [nomeProjeto, setNomeProjeto] = useState('');
    const [cidade, setCidade] = useState('');
    const [endereco, setEndereco] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [dataFim, setDataFim] = useState('');
    const [representanteInstituicao, setRepresentanteInstituicao] = useState(false);
    const [descricao, setDescricao] = useState('');


    function EnviaProjeto() {
        event.preventDefault();
        fetch('/api/newproject', {
            method: "POST",
            body: JSON.stringify({
                nomeProjeto: nomeProjeto,
                cidade: cidade,
                endereco: endereco,
                dataInicio: dataInicio,
                dataFim: dataFim,
                representanteInstituicao: representanteInstituicao,
                descricao: descricao,
                idResponsavel: idPath
            })
        })
            .then(response => response.json())
            .then(response => console.log(response))
    }

    console.log(representanteInstituicao)
    return (
        <div className="p-6 w-full">
            <form action="" onSubmit={EnviaProjeto} className="flex flex-col w-full text-orange-700">
                <label htmlFor="">Nome do projeto</label>
                <input type="text" value={nomeProjeto} onChange={e => setNomeProjeto(e.target.value)} required />
                <label htmlFor="">Cidade</label>
                <input type="text" value={cidade} onChange={e => setCidade(e.target.value)} required />
                <label htmlFor="">Endereço</label>
                <input type="text" value={endereco} onChange={e => setEndereco(e.target.value)} required />
                <label htmlFor="">Data de inicio</label>
                <input type="date" value={dataInicio} onChange={e => setDataInicio(e.target.value)} required />
                <label htmlFor="">Data de finalização</label>
                <input type="date" value={dataFim} onChange={e => setDataFim(e.target.value)} required />
                <label htmlFor="">Descrição do projeto</label>
                <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)} required />
                
                <div className='flex flex-row my-4 mt-4 '>
                    <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" onChange={() => setRepresentanteInstituicao(!representanteInstituicao)} />
                            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
                            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Representante de instituição</span>
                    </label>
                </div>
                <input type="submit" className="bg-green-500" />
            </form>
        </div>
    )
}