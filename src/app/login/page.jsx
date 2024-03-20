"use client"
import Cookie from 'js-cookie'
import { useState } from "react"
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaEmailInvalidos, setSenhaEmailInvalidos] = useState(false);


    function Login() {
        event.preventDefault();
        fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email: email, senha: senha })
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                if (response.id > 0) {
                    console.log("if")
                    Cookie.set('auth_id', response.id)
                    Cookie.set('auth_token', response.token)
                    router.push(`/login/usuario/${response.id}`)
                } else {
                    setSenhaEmailInvalidos(true);
                    setTimeout(() => {
                        setSenhaEmailInvalidos(false)
                    }, 3000)
                }
            })
    }
    return (
        <div className="flex min-h-screen flex-col items-center ">
            <img src="/login-desktop.jpeg" className="hidden lg:block min-h-screen max-h-screen min-w-full absolute" alt="" />
            <img src="/login-mobile.jpeg" className="lg:hidden min-h-screen max-h-screen min-w-full absolute" alt="" />
            <form className="flex flex-col z-10 w-full items-center my-auto bg-[#38383861] rounded-xl max-w-80 p-8" onSubmit={Login}>
                <h1 className="text-green-200 text-4xl mb-10">Login</h1>
                <input className="text-black p-2 px-4 rounded-full w-64" type="mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input className="mt-4 text-black p-2 px-4 rounded-full w-64" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                <input type="submit" className="mt-4 bg-green-200 text-black p-2 px-4 rounded-full w-64 cursor-pointer" value={'Login'}></input>
            </form>
            <div className={`flex absolute h-full items-end transition-opacity duration-700 ease-in-out ${senhaEmailInvalidos ? 'opacity-100 pointer-events-none' : 'opacity-0 pointer-events-none'}`}>
                <p className='mb-20 bg-red-950 p-4 rounded-lg'>Email ou senha inválidos</p>
            </div>
        </div>
    )
}