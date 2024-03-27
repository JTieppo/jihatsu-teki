"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Cog6ToothIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { useState } from 'react'


export default function UserLayout({children}) {
    const idPath = usePathname().split('/')[3];
    const [hamburger, setHamburger] = useState(false);


    return (
        <div className="flex flex-row">
            <div className={`${hamburger?'w-48':'w-10'} transition-all duration-500 ease-in-out h-screen border-r-[#FB443A] border-r bg-black flex flex-col justify-between py-6`}>
                <div className='flex flex-row'>
                    <button id='hamburger' className='w-full ml-2' onClick={() => setHamburger(!hamburger)}><Bars3Icon className='w-6'></Bars3Icon></button>
                    <p className={`${hamburger? 'opacity-100 duration-500 px-2':'opacity-0 duration-75'} transition-all transform ease-in bg-[#22b981] w-full`}>Menu</p>
                </div>
                <div className='flex flex-col'>
                <Link href={`/login/usuario/${idPath}/`} className={`${hamburger? 'opacity-100 duration-500 px-2 mt-2':'opacity-0 duration-75'} transition-all transform ease-in bg-[#22b981] w-full`} onClick={()=>setHamburger(!hamburger)}>Dashboard</Link>
                <Link href={`/login/usuario/${idPath}/voluntario`} className={`${hamburger? 'opacity-100 duration-500 px-2 mt-2':'opacity-0 duration-75'} transition-all transform ease-in bg-[#22b981] w-full`} onClick={()=>setHamburger(!hamburger)}>Voluntário</Link>
                <Link href={`/login/usuario/${idPath}/projetista`} className={`${hamburger? 'opacity-100 duration-500 px-2 mt-2':'opacity-0 duration-75'} transition-all transform ease-in bg-[#22b981] w-full`} onClick={()=>setHamburger(!hamburger)}>Coordenador</Link>
                </div>
                <div className='flex flex-row'>
                    <Link href={`/login/usuario/${idPath}/config`} className='w-full'><Cog6ToothIcon className='w-6 ml-2'></Cog6ToothIcon></Link>
                    <p className={`${hamburger? 'opacity-100 duration-500 px-2':'opacity-0 duration-75'} transition-all transform ease-in bg-[#22b981] w-full`}>Configurações</p>
                </div>
            </div>
            {children}
        </div>
    )
}