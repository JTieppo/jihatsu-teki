"use client"
import { usePathname } from "next/navigation";
import { data } from "../../../../../../data";
import { useState } from "react";

export default function Company() {
    const path = usePathname();
    var companyID = path.slice(1);
    const companyData = data.find(dados => dados.id == +companyID);
    var urlParts = companyData?.website.split('com/');
    const site = urlParts?.[1] ?? ' ';

    const [showSnackbar, setShowSnackbar] = useState('');
    const botaoDesativado = () => {
        setShowSnackbar('show');
        setTimeout(() => {
            setShowSnackbar('');
        }, 3000);
    };

    return (
        <div className="flex flex-col w-full justify-between">
            <div className="flex flex-col w-[80%] mx-auto rounded mt-10 p-6" id="card">
                <p className="opacity-20">data criacao</p>
                <div className="flex w-full justify-between">
                    <h2 className="text-3xl">Nome projeto</h2>
                    <button className="p-2 px-4 bg-[#00D286]">Se aplicar</button>
                </div>
                <p className="text-[#00D286]">Nome criador</p>
                <div className="mt-10">
                    demais informações do projeto
                </div>
            </div>
            <div className="h-20 w-full flex flex-row justify-between items-center px-[10%]" id="card">
                <div className="hidden md:flex flex-col">
                    <p className="text-lg">{companyData?.position}</p>
                    <p className="text-sm text-[#00D286]">Jihatsu-Teki</p>
                </div>
                <button className="p-2 rounded w-full md:w-32 bg-[#00D286]" id="" onClick={botaoDesativado}>Apply Now</button>
            </div>
            <div id="snackbar" className={showSnackbar}>
                <p className="my-auto mx-auto text-2xl text-[#00D286]">Illustrative button</p>
            </div>
        </div>
    );
}