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
                <div className="flex bg-black">
                    <Link href={'/'} className="">Jihatsu-Teki</Link>
                    <Link href={'/sobre'} className="">Sobre</Link>
                    <Link href={'/'} className="">Link2</Link>
                    <Link href={'/login'} className='' >Login</Link>
                    <Link href={'/signup'} className=''>Signup</Link>
                </div>
            </header>
            
            <div className='bg-gradient-to-l via-black from-purple-950 to-purple-950'>
                <h1 className='opacity-80'>Transforme sua vontade e ação e participe da mudança!</h1>
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, temporibus ut! Aspernatur, porro nisi. Iste maxime similique omnis aspernatur commodi voluptatem natus minima harum, illum, id sequi quibusdam, eaque odio.</p>
            </div>



        </main>
    );
}



