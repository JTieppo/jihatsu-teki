import { CalendarDaysIcon, ChevronRightIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Cookies from 'js-cookie';


export default function CardCarrossel(paramGeral) {
    const id = Cookies.get('auth_id')


    return (
        <Link href={`/login/usuario/${id}/voluntario/${paramGeral.item.id}`} className="flex flex-col min-w-72 w-72 bg-gradient-to-bl to-[#0b1819b3] from-[#1B3B35] rounded-2xl">
            <img className="rounded-t-2xl" src="/assets/images/imagem.png" alt="" />
            <div className="text-white font-thin text-xs p-4">
                <h2 className="text-white font-medium text-lg mb-6">{paramGeral.item.nome}</h2>
                <p className="flex gap-2 items-center"><CalendarDaysIcon className="w-4" />{paramGeral.item.data_inicio}</p>
                <div className="flex gap-2 mt-2 mr-20">
                    <MapPinIcon className="w-6" />
                    <div className="flex flex-col">
                        <p>{paramGeral.item.endereco}</p>
                        <p>{paramGeral.item.cidadde}</p>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-r h-[1px] from-[#ffffff00] via-green-600 to-[#ffffff00] mb-4"></div>
            <div className="font-thin text-sm flex tracking-wider items-center gap-4 justify-center mb-4">Mais detalhes <ChevronRightIcon className="w-2 my-auto" /></div>
        </Link>
    )
}
