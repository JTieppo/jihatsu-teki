import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function CardCarrossel() {
    return (
        <div className="flex flex-col w-72 bg-gradient-to-bl to-[#0b1819b3] from-[#1B3B35] rounded-2xl">
            <img className="rounded-t-2xl" src="/assets/images/imagem.png" alt="" />
            <div className="text-white font-thin text-sm p-4">
                <h2 className="text-white font-semibold text-lg">Limpeza do Hospital Universiário</h2>
                <p><span></span> Dia 20/06/2024 às 17:00</p>
                <p>Av. Mandacaru, 1590 - Parque das Laranjeiras, Maringa - PR</p>
            </div>
            <div className="bg-gradient-to-r h-[1px] from-[#ffffff00] via-green-600 to-[#ffffff00] mt-4 mb-4"></div>
            <button className="font-thin flex items-center gap-4 justify-center mb-4">Mais detalhes <ChevronRightIcon className="w-2 my-auto" /></button>
        </div>
    )
}
