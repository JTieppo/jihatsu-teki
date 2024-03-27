"use client"
import Link from 'next/link';
import Image from 'next/image'
import { MagnifyingGlassIcon, MapPinIcon, CheckIcon } from "@heroicons/react/24/outline";
import Card from './ui/card'
import "./globals.css";
import { useEffect, useState } from "react";



export default function Home() {
    return (
        <main className='flex flex-col h-screen'>
            <header className="flex flex-col w-full">
                <div className="flex flex-row justify-between min-w-screen text-[#00D286] mb-16 m-10 mx-24">
                    <Link href={'/'} className="cursor-pointer text-2xl text-[#FB443A]">Jihatsu-Teki</Link>
                    <Link href={'/sobre'} className="cursor-pointer">Sobre</Link>
                    <Link href={'/'} className="cursor-pointer">Link2</Link>
                    <Link href={'/login'} className='cursor-pointer' >Login</Link>
                    <Link href={'/signup'} className='cursor-pointer'>Signup</Link>
                </div>
            </header>
            
            <p className='mx-auto text-2xl'>content main</p>
        </main>
    );
}



