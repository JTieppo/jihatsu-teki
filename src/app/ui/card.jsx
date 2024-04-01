"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserIcon } from '@heroicons/react/24/solid';


export default function Card(projeto) {
    const pjt = projeto.projeto
    const idPath = usePathname().split('/')[3];
    const dataCriacao = pjt.data_criacao.split(' ')[0] + ' ' + pjt.data_criacao.split(' ')[1] + ' ' + pjt.data_criacao.split(' ')[2];


    return (
        <Link href={`/login/usuario/${idPath}/voluntario/${pjt?.id}`} id="card-company" className="relative mt-20 rounded-lg p-8 mr-10 lg:mr-20 ">
            <div className="absolute flex w-12 h-12 rounded-2xl items-center -mt-14">
                <UserIcon className="w-6" />
            </div>
            <div>
                <div className="flex flex-row items-baseline mt-4 text-sm text-[#6E8098]">
                    <p>{dataCriacao}</p>
                    <div className="h-1 w-1 rounded-full ml-3 bg-[#6E8098]"></div>
                    <p className="ml-3">{pjt.nome_criador}</p>
                </div>
                <p className="mt-2">{pjt?.cidade}</p>
                <p className="mt-2 text-sm" style={{ color: "#6E8098" }}>{pjt?.status}</p>
                <div className="flex flex-row justify-between">
                    <p className="mt-8 text-sm text-[#5964E0]">{pjt?.prioridade} <span className="text-slate-600"> prioridade</span></p>
                    <p className="mt-8 text-sm text-[#5964E0]">{pjt?.cidade}</p>
                </div>
            </div>
        </Link>
    );
}