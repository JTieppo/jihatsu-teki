import Link from 'next/link';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center ">
            <img src="/inicio.webp" className="min-h-screen max-h-screen min-w-full absolute" alt="" />
            <div className="flex z-10 w-full items-center">
                <div className="flex flex-col w-full p-10 px-40 items-center">
                    <nav className="flex justify-between w-full">
                        <Link href={''} className="cursor-pointer">Link1</Link>
                        <Link href={''} className="cursor-pointer">Link2</Link>
                        <img src="/glove.svg" className="w-14 " alt="" />
                        <Link href={''}>Link3</Link>
                        <Link href={'/signup'}>Signup</Link>

                    </nav>
                    <div className="flex flex-row mt-20 text-black">
                        <input className="rounded-full h-12 w-96 mx-auto pl-6 pr-12 focus:outline-none" type="text" />
                        <button className=" bg-emerald-200 -ml-11 my-auto rounded-full p-2"><MagnifyingGlassIcon className="w-6"></MagnifyingGlassIcon></button>
                    </div>
                    <div className="p-2 px-4 w-80 mt-4 flex justify-between bg-white text-black rounded-full text-sm">
                        <Link href={'/voluntario'}>Se Voluntariar</Link>
                        <div className="border"></div>
                        <Link href={'/projetista'}>Iniciar  serviço</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
