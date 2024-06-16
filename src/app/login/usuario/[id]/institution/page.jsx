"use client"
import CreateInstitution from "@/app/ui/create-institution";
import { useState } from "react";


export default function Projects() {
    const [openCreateInstitution, setOpenCreateInstitution] = useState(true);


    return (
        <div className="flex flex-row  w-full">
            <CreateInstitution open={openCreateInstitution} set={setOpenCreateInstitution} />
            <div className="flex flex-row w-full pt-16 pr-16">
                <section className="flex flex-col gap-4 w-full">
                    <div className="flex flex-row justify-between">
                        <div>
                            <h1 className="text-2xl bg-white-gradient white-gradient font-black">Instituição</h1>
                        </div>
                        <div className="flex flex-row gap-[10px]">
                            <button className="w-48 h-10  bg-button-green rounded-xl" onClick={() => setOpenCreateInstitution(true)}>
                                Criar instituição
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-8 p-16 bg-[#012b22] rounded-xl">
                        <div className="">
                            <p>
                                Para cadastrar um projeto ou uma ação, você precisa ter uma instituição cadastrada.{" "}
                            </p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <button className="w-48 h-10  bg-button-green rounded-xl" onClick={() => setOpenCreateInstitution(true)}>
                                Criar instituição
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
