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
                {children}
            </body>
        </html>
    );
}
