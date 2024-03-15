import Link from 'next/link';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Home() {

    return (
        <main className="flex min-h-screen flex-col items-center ">
            <img src="/inicio-desktop.jpeg" className="hidden lg:block min-h-screen max-h-screen min-w-full absolute" alt="" />
            <img src="/inicio-mobile.jpeg" className="lg:hidden min-h-screen max-h-screen min-w-full absolute" alt="" />
            <div className="flex z-10 w-full items-center">
                <div className="flex flex-col w-full p-10 lg:px-40 items-center">
                    <nav className="flex justify-between w-full text-black">
                        <Link href={'/sobre'} className="cursor-pointer">Sobre</Link>
                        <Link href={'/'} className="cursor-pointer">Link2</Link>
                        <img src="/glove-white.svg" className="w-6" alt="" />
                        <Link href={'/login'} className='cursor-pointerc' >Login</Link>
                        <Link href={'/signup'} className='cursor-pointer'>Signup</Link>
                    </nav>
                    <div className="flex flex-row mt-20 text-black">
                        <input className="rounded-full h-12 w-72 lg:w-96 mx-auto -ml-1 pl-6 pr-12 focus:outline-none" type="text" />
                        <button className=" bg-emerald-200 -ml-11 my-auto rounded-full p-2"><MagnifyingGlassIcon className="w-6"></MagnifyingGlassIcon></button>
                    </div>
                    <div className="w-72 lg:w-80 mt-4 flex justify-between bg-white text-black rounded-full text-[12px] lg:text-sm">
                        <Link href={'/voluntario'} className='p-2 px-4 cursor-pointer'>Se Voluntariar</Link>
                        <div className="border"></div>
                        <Link href={'/projetista'} className='p-2 px-4 cursor-pointer'>Iniciar  serviço</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
