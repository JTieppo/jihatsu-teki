import { CalendarDaysIcon, ChevronRightIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function CardCarrossel() {
    return (
        <div className="flex flex-col w-72 bg-gradient-to-bl to-[#0b1819b3] from-[#1B3B35] rounded-2xl">
            <img className="rounded-t-2xl" src="/assets/images/imagem.png" alt="" />
            <div className="text-white font-thin text-xs p-4">
                <h2 className="text-white font-medium text-lg mb-6">Limpeza do Hospital Universiário</h2>
                <p className="flex gap-2 items-center"><CalendarDaysIcon className="w-4"/> Dia 20/06/2024 às 17:00</p>
                <p className="flex gap-2 mt-2 mr-20"><MapPinIcon className="w-6"/> Av. Mandacaru, 1590 - Parque das Laranjeiras, Maringa - PR</p>
            </div>
            <div className="bg-gradient-to-r h-[1px] from-[#ffffff00] via-green-600 to-[#ffffff00] mb-4"></div>
            <button className="font-thin text-sm flex tracking-wider items-center gap-4 justify-center mb-4">Mais detalhes <ChevronRightIcon className="w-2 my-auto" /></button>
        </div>
    )
}
