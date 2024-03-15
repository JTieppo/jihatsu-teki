"use client"
import { useState } from "react"
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

export default function Signup() {
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [mostraSenha, setMostraSenha] = useState('password');
    const [mostraSenhasCorrespondem, setMostraSenhasCorrespondem] = useState(false)

    function MostraSenha() {
        if (mostraSenha == 'password') {
            setMostraSenha('text')
        } else {
            setMostraSenha('password')
        }
    }

    function CriarConta(e) {
        e.preventDefault();
        if (senha != confirmaSenha) {
            setMostraSenhasCorrespondem(true);
            setTimeout(() => {
                setMostraSenhasCorrespondem(false);
            }, 3000)
        } else {
            fetch('/api/signup', {
                method: 'POST',
                body: JSON.stringify({ nome: nome, sobrenome: sobrenome, senha: senha, email: email })
            })
                .then(response => response.json())
                .then(response => console.log(response))
        }
    }
    return (
        <div className="flex h-screen">
            <form action="" className="flex flex-col mx-auto my-auto " onSubmit={CriarConta}>
                <label htmlFor="nome">Nome</label>
                <input type="text" name="nome" required value={nome} onChange={(e) => setNome(e.target.value)} />
                <label htmlFor="sobrenome">Sobrenome</label>
                <input type="text" name="sobrenome" required value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="">Senha</label>
                <div className="relative">
                    <input type={mostraSenha} required value={senha} onChange={(e) => setSenha(e.target.value)} />
                    <button className="absolute cursor-pointer" onClick={MostraSenha}><EyeIcon className={mostraSenha == 'password' ? 'w-6' : `hidden`}></EyeIcon></button>
                    <button className="absolute cursor-pointer" onClick={MostraSenha}><EyeSlashIcon className={mostraSenha == 'password' ? 'hidden' : `w-6`}></EyeSlashIcon></button>
                </div>
                <label htmlFor="">Confirme sua senha</label>
                <input type={mostraSenha} required value={confirmaSenha} onChange={(e) => setConfirmaSenha(e.target.value)} />
                <input type="submit" value={'Criar conta'} className="text-white" />
            </form>
            <div className={`${mostraSenhasCorrespondem? 'absolute':'hidden'} flex h-full w-full items-end pointer-events-none transform ease-in duration-400`}>
                <p className="mx-auto mb-20 bg-slate-500">As senhas não correspondem</p>
            </div>
        </div>
    )
}