"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import Cookie from 'js-cookie';
import Link from 'next/link';


export default function Signup() {
    const route = useRouter();
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [mostraSenha, setMostraSenha] = useState('password');
    const [mostraSenhasCorrespondem, setMostraSenhasCorrespondem] = useState(false);
    const [emailExiste, setEmailExiste] = useState(false);
    const [cidade, setCidade] = useState('');


    function MostraSenha() {
        if (mostraSenha == 'password') {
            setMostraSenha('text');
        } else {
            setMostraSenha('password');
        }
    }

    
    function CriarConta(e) {
        e.preventDefault();
        fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify({ nome: nome, senha: senha, email: email, cidade: cidade})
        })
            .then(response => response.json())
            .then(response => {
                if (response.success) {
                    Cookie.set(response.nameCookieA, response.cookieA);
                    Cookie.set(response.nameCookieB, response.cookieB);
                    route.push(`/login/usuario/${response.id}`);
                } else {
                    if (response.mailExiste) {
                        console.log("chamando")
                        setEmailExiste(true);
                        setTimeout(() => {
                            setEmailExiste(false);
                        }, 3000)
                    }
                }
            })

    }
    return (
        <div className="flex h-screen">
            <form action="" className="flex flex-col mx-auto my-auto w-96" onSubmit={CriarConta}>
                <h1 className="mx-auto text-4xl bg-white-gradient white-gradient font-semibold mb-4">Criar conta</h1>
                <p className="text-neutral-400 mx-auto ">Crie uma conta para se inscrever em projetos</p>
                <input className="bg-transparent border border-neutral-400 rounded-lg px-4 p-2 mt-4" type="text" placeholder="Nome completo" required value={nome} onChange={(e) => setNome(e.target.value)} />
                <input className="bg-transparent border border-neutral-400 rounded-lg px-4 p-2 mt-4" type="email" placeholder="E-mail" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="bg-transparent border border-neutral-400 rounded-lg px-4 p-2 mt-4" type="text" placeholder="Cidade" value={cidade} onChange={e => setCidade(e.target.value)} required />
                <input className="bg-transparent border border-neutral-400 rounded-lg px-4 p-2 mt-4" placeholder="Crie sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                <input className="p-2 w-full bg-[#009F66] rounded-lg mt-4" type="submit" value="Criar conta" />

                <div className="h-[1px] bg-gradient-to-r from-transparent via-emerald-600 to-transparent mt-4"></div>
                <Link className="text-neutral-400 mt-6 mx-auto" href={"/login"}>Já possui conta? <span className="font-medium underline underline-offset-2">faça login aqui!</span></Link>
            </form>
            <div className={`${mostraSenhasCorrespondem ? 'absolute' : 'hidden'} flex h-full w-full items-end pointer-events-none`}>
                <p className="mx-auto mb-20 bg-white">As senhas não correspondem</p>
            </div>
            <div className={`flex absolute h-full w-full items-end transition-opacity duration-700 ease-in-out ${emailExiste ? 'opacity-100 pointer-events-none' : 'opacity-0 pointer-events-none'}`}>
                <p className='mb-20 bg-red-950 p-4 rounded-lg mx-auto'>Email já registrado</p>
            </div>
        </div>
    )
}