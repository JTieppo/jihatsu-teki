"use client"
import { usePathname } from "next/navigation"
import { useState } from "react"


export default function CreateProject(paramGeral) {
    const idPath = usePathname().split('/')[3]
    const [etapa, setEtapa] = useState(1)
    const [nome, setNome] = useState('')
    const [cidade, setCidade] = useState('')
    const [endereco, setEndereco] = useState('')
    const [responsavel, setResponsavel] = useState('')
    const [dataInicio, setDataInicio] = useState('')
    const [horaInicio, setHoraInicio] = useState('')
    const [dataEncerramento, setDataEncerramento] = useState('')
    const [horaEncerramento, setHoraEncerramento] = useState('')
    const [descricao, setDescricao] = useState('')
    const [nomeInstituicao, setNomeInstituicao] = useState('')
    const [responsavelInstituicao, setResponsavelInstituicao] = useState('')
    const [telefone, setTelefone] = useState('')


    function cadastrarProjeto() {
        fetch('/api/newproject', {
            method: "POST",
            body: JSON.stringify({ nomeProjeto: nome, idResponsavel: idPath, cidade: cidade, endereco: endereco, responsavel: responsavel, dataInicio: dataInicio, horaInicio: horaInicio, dataFim: dataEncerramento, horaFim: horaEncerramento, descricao: descricao, nomeInstituicao: nomeInstituicao, representanteInstituicao: responsavelInstituicao, telefone: telefone })
        })
            .then(response => response.json())
            .then(response => {
                if (response.success) {
                    paramGeral.setCriado(true)
                    setTimeout(() => {
                        paramGeral.setCriado(false)
                    }, 3000)
                }
            })
    }


    return (
        <div className={`${paramGeral.open ? 'opacity-100' : 'pointer-events-none opacity-0'} flex fixed transition duration-300 z-10`}>
            {etapa == 1 ?
                <div>
                    <button className="w-screen h-screen fixed blur bg-[#0000005e] inset-0" onClick={() => paramGeral.set(false)}></button>
                    <div className="w-[450px] h-fit p-6 bg-emerald-900 rounded-lg fixed mx-auto inset-0 my-auto">
                        <h1 className="text-[32px] font-extrabold">Criar projeto</h1>
                        <p className="my-6 text-base/[19.6px] text-darker-white">
                            Precisamos saber algumas coisas sobre o seu projeto para exibi-lo
                            para os voluntários:
                        </p>
                        <div className="flex flex-col gap-4">
                            <input
                                onChange={(e) => setNome(e.target.value)}
                                type="text"
                                placeholder="Nome do projeto"
                                className="w-full p-3 bg-transparent border border-darker-white rounded-xl"
                            />
                            <input
                                onChange={(e) => setCidade(e.target.value)}
                                type="text"
                                placeholder="Cidade do projeto"
                                className="w-full p-3 bg-transparent border border-darker-white rounded-xl"
                            />
                            <input
                                onChange={(e) => setEndereco(e.target.value)}
                                type="text"
                                placeholder="Endereço / ponto de encontro"
                                className="w-full p-3 bg-transparent border border-darker-white rounded-xl"
                            />
                            <input
                                onChange={(e) => setResponsavel(e.target.value)}
                                type="text"
                                placeholder="Responsável pelo projeto"
                                className="w-full p-3 bg-transparent border border-darker-white rounded-xl"
                            />
                        </div>
                        <div className="flex flex-row justify-between mt-16">
                            <div>
                                <p className="mb-2 text-darker-white">Etapa 1 de 3</p>
                                <img src="/assets/images/1de3.png" alt="Etapa 1 de 3" />
                            </div>
                            <div>
                                <button onClick={() => setEtapa(etapa + 1)} className="w-56 px-6 py-4 bg-button-green rounded-xl">
                                    Próximo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                :
                etapa == 2 ?

                    <div className="flex fixed">
                        <button className="w-screen h-screen fixed blur bg-[#0000005e] inset-0" onClick={() => paramGeral.set(false)}></button>
                        <div className="w-[450px] h-fit p-6 bg-emerald-900 rounded-lg fixed mx-auto inset-0 my-auto">
                            <h1 className="text-[32px] font-extrabold">Criar projeto</h1>
                            <p className="my-6 text-base/[19.6px] text-darker-white">
                                Precisamos saber algumas coisas sobre o seu projeto para exibi-lo
                                para os voluntários:
                            </p>

                            <div className="flex flex-col gap-4">
                                <div className="flex flex-row gap-2">
                                    <input
                                        onChange={(e) => setDataInicio(e.target.value)}
                                        type="text"
                                        placeholder="Data de início"
                                        className="w-full p-3 bg-transparent border border-darker-white rounded-xl"
                                    />
                                    <input
                                        onChange={(e) => setHoraInicio(e.target.value)}
                                        type="text"
                                        placeholder="Hora de início"
                                        className="w-full p-3 bg-transparent border border-darker-white rounded-xl"
                                    />
                                </div>
                                <div className="flex flex-row gap-2">
                                    <input
                                        onChange={(e) => setDataEncerramento(e.target.value)}
                                        type="text"
                                        placeholder="Data de encerramento"
                                        className="w-full p-3 bg-transparent border border-darker-white rounded-xl"
                                    />
                                    <input
                                        onChange={(e) => setHoraEncerramento(e.target.value)}
                                        type="text"
                                        placeholder="Hora de encerramento"
                                        className="w-full p-3 bg-transparent border border-darker-white rounded-xl"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        onChange={(e) => setDescricao(e.target.value)}
                                        type="text"
                                        placeholder="Descrição do projeto"
                                        className="w-full h-20 p-3 bg-transparent border border-darker-white rounded-xl"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row justify-between mt-16">
                                <div>
                                    <p className="mb-2 text-darker-white">Etapa 2 de 3</p>
                                    <img src="/assets/images/2de3.png" alt="Etapa 2 de 3" />
                                </div>
                                <div>
                                    <button onClick={() => setEtapa(etapa + 1)} className="w-56 px-6 py-4 bg-button-green rounded-xl">
                                        Próximo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    :
                    <div className="flex fixed">
                        <button className="w-screen h-screen fixed blur bg-[#0000005e] inset-0" onClick={() => paramGeral.set(false)}></button>
                        <div className="w-[450px] h-fit p-6 bg-emerald-900 rounded-lg fixed mx-auto inset-0 my-auto">
                            <h1 className="text-[32px] font-extrabold">Criar projeto</h1>
                            <p className="my-6 text-base/[19.6px] text-darker-white">
                                Precisamos selecionar uma entidade para ser responsável pelo seu
                                projeto
                            </p>
                            <div className="flex flex-col gap-4">
                                <input
                                    onChange={(e) => setNomeInstituicao(e.target.value)}
                                    type="text"
                                    placeholder="Nome da instituição"
                                    className="w-full p-3 bg-transparent border border-darker-white rounded-xl"
                                />
                                <input
                                    onChange={(e) => setResponsavelInstituicao(e.target.value)}
                                    type="text"
                                    placeholder="Responsável"
                                    className="w-full p-3 bg-transparent border border-darker-white rounded-xl"
                                />
                                <input
                                    onChange={(e) => setTelefone(e.target.value)}
                                    type="text"
                                    placeholder="Telefone de contato"
                                    className="w-full p-3 bg-transparent border border-darker-white rounded-xl"
                                />
                                <div className="flex flex-row p-4 border border-dashed border-darker-white rounded-xl">
                                    <img src="/assets/images/material-symbols_image.png" alt="" className="w-12 h-12 my-auto mr-4" />
                                    <div>
                                        <p className="font-xs text-darker-white">
                                            Logo da insituiçāo
                                        </p>
                                        <p className="text-[10px]/[10px] font-light text-darker-white">
                                            Envie ou arraste uma imagem
                                        </p>
                                        <p className="text-[10px] font-light text-darker-white">
                                            Recomendamos uma imagem 250px*250px
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between mt-16">
                                <div className="">
                                    <p className="mb-2 text-darker-white">Etapa 3 de 3</p>
                                    <img src="/assets/images/3de3.png" alt="Etapa 3 de 3" />
                                </div>
                                <div>
                                    <button className="w-56 px-6 py-4 bg-button-green rounded-xl" onClick={() => cadastrarProjeto()}>
                                        Próximo
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
            }
        </div>
    )
};


