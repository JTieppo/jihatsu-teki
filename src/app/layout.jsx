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
            <body className="bg-gradient-to-br from-emerald-950 via-[#000a03] to-black">
                {children}
            </body>
        </html>
    );
}
