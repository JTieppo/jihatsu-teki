"use client"
import "./globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function RootLayout({
    children,
}) {
    const [showSnackbar, setShowSnackbar] = useState('');
    const botaoDesativado = () => {
        setShowSnackbar('show');
        setTimeout(() => {
            setShowSnackbar('');
        }, 4000);
    };

    return (
        <html lang="en">
            <body>
                <header className="flex flex-col w-full">
                    <img id="img-header" className="hidden lg:flex" src="/assets/desktop/bg-pattern-header.svg" alt="" />
                    <img id="img-header" className="hidden md:flex lg:hidden" src="/assets/tablet/bg-pattern-header.svg" alt="" />
                    <img src="/assets/mobile/bg-pattern-header.svg" className="md:hidden" alt="" />
                    <div className="z-50 ml-10 mr-10  md:ml-20 md:mr-20 -mt-[100px] mb-[70px] flex flex-row justify-between min-w-screen ">
                        <Link href={'/'} className="cursor-pointer ">Jihatsu-Teki</Link>
                        <Link href={'/sobre'} className="cursor-pointer">Sobre</Link>
                        <Link href={'/'} className="cursor-pointer">Link2</Link>
                        <Link href={'/login'} className='cursor-pointer' >Login</Link>
                        <Link href={'/signup'} className='cursor-pointer'>Signup</Link>
                    </div>
                    <div id="snackbar-color-scheme" className={showSnackbar}>
                        <p className="my-auto mx-auto text-2xl" style={{ color: "#5964E0" }}>Illustrative button, the color scheme is set by default</p>
                    </div>
                </header>
                {children}
            </body>
        </html>
    );
}
