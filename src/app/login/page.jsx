"use client"
import Cookie from 'js-cookie'
import { useState } from "react"
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaEmailInvalidos, setSenhaEmailInvalidos] = useState(false);
    const cookieT = Cookies.get('auth_token')
    const cookieI = Cookies.get('auth_token')
    

    function Login(e) {
        e.preventDefault();
        fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email: email, senha: senha })
        })
            .then(response => response.json())
            .then(response => {
                if (response.id > 0) {
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
        <div className=" h-screen">
            <form className="flex flex-col w-96 mx-auto absolute" onSubmit={(e)=>Login(e)}>
                <h1 className="text-4xl mx-auto mb-4">Login</h1>
                <label htmlFor="email">Email</label>
                <input className="text-black" name='email' type="mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label htmlFor="senha">Senha</label>
                <input className="text-black" name='senha' type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                <input type="submit" className="" value={'Login'} />
            </form>
            <div className={`transition-opacity duration-700 ease-in-out ${senhaEmailInvalidos ? 'opacity-100 pointer-events-none' : 'opacity-0 pointer-events-none'}`}>
                <p className='mb-20 bg-red-950 p-4 rounded-lg'>Email ou senha inválidos</p>
            </div>
        </div>
    )
}