"use client"
import CreateProject from "@/app/ui/create-project";
import Link from "next/link";
import { useState } from "react";


export default function Dashboard() {
    const [openCreateProject, setOpenCreateProject] = useState(false)
    const [criado, setCriado] = useState(false)


    return (
        <div className="flex flex-row w-full">
            <div className={`${criado ? 'opacity-100' : 'opacity-0'} fixed flex w-screen h-screen pointer-events-none transition duration-300 inset-0`}>
                <p className="px-4 p-2 mx-auto bg-emerald-500 text-xl h-fit rounded-lg mt-16">Projeto criado com sucesso!</p>
            </div>
            <main className="flex flex-row w-full pt-16 pr-16">
                <CreateProject open={openCreateProject} set={setOpenCreateProject} setCriado={setCriado}/>
                <section className="flex flex-col gap-4 w-full">
                    <div className="flex flex-row justify-between">
                        <div>
                            <h1 className="text-2xl bg-white-gradient white-gradient font-black">Meus projetos</h1>
                        </div>
                        <div className="flex flex-row gap-[10px]">
                            <button className="w-48 h-10  border border-white rounded-xl">
                                Procurar projetos
                            </button>
                            <button className="w-48 h-10  bg-button-green rounded-xl" onClick={() => setOpenCreateProject(true)}>
                                Criar projeto
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-8 p-16 bg-[#012b22] rounded-xl">
                        <div className="">
                            <p>
                                Você ainda não está participando de nenhum projeto, escolha uma
                                opção abaixo para começar:{" "}
                            </p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <button className="w-48 h-10  border border-white rounded-xl">
                                Quero ser voluntário
                            </button>
                            <button className="w-48 h-10  bg-button-green rounded-xl" onClick={() => setOpenCreateProject(true)}>
                                Criar projeto
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
