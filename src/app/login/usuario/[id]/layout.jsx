"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Cog6ToothIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import HeaderInside from '../../../ui/header-inside'

export default function UserLayout({ children }) {
    const path = usePathname().split('/');
    const idPath = path[3]
    const [hamburger, setHamburger] = useState(false);


    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-emerald-950 to-[#000a03]">
            <HeaderInside />
            <div className='flex flex-row'>
                <div className='flex flex-row text-end w-72 py-14 pl-14'>
                    <div className='flex flex-col'>
                        <Link href={`/login/usuario/${idPath}/`} className={`${path.length > 4 ? '' : 'bg-gradient-to-l from-emerald-900 '} p-2`}>Meus projetos</Link>
                        <Link href={`/login/usuario/${idPath}/institution`} className={`${path.length > 4 ? path[4] == 'institution' ? 'bg-gradient-to-l from-emerald-900 to-transparent' : '' : ''} p-2`}>Instituições</Link>
                        <Link href={`/login/usuario/${idPath}/config`} className={`${path.length > 4 ? path[4] == 'config' ? 'bg-gradient-to-l from-emerald-900 to-transparent' : '' : ''} p-2`}>Dados pessoais</Link>
                    </div>
                    <div className='bg-gradient-to-b from-transparent via-emerald-600 to-transparent w-[1px] max-h-64 h-64'></div>
                </div>
                {children}
            </div>
        </div>
    )
}