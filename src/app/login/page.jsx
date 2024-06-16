"use client"
import Cookie from 'js-cookie'
import { useState } from "react"
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Header from '../ui/header';
import Link from 'next/link';
import { EyeIcon } from '@heroicons/react/24/outline';


export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaEmailInvalidos, setSenhaEmailInvalidos] = useState(false);
    const cookieT = Cookies.get('auth_token')
    const cookieI = Cookies.get('auth_token')
    const [showSenha, setShowSenha] = useState(false)
    const [spin, setSpin] = useState(false)

    function Login() {
        event.preventDefault();
        setSpin(true)
        fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email: email, senha: senha })
        })
            .then(response => response.json())
            .then(response => {
                setSpin(false)
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
        <div className='h-screen'>
            <Header />
            <div role="status" className={`${spin?'opacity-100':'opacity-0'} transition duration-200 fixed z-10 mt-10 ml-20 pointer-events-none`}>
                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-white fill-emerald-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
            </div>
            <div className={`${senhaEmailInvalidos? 'opacity-100':'opacity-0'} flex fixed w-full transition duration-300 pointer-events-none`}>
                <p className='mx-auto mt-4 rounded-lg px-4 p-2 bg-emerald-600'>Senha ou email inválidos!</p>
            </div>
            <div className="flex justify-center h-full flex-row">
                <form className="flex flex-col w-96 mx-auto mt-40" onSubmit={Login}>
                    <h1 className="text-4xl text-darker-white  mx-auto mb-4 bg-white-gradient white-gradient font-bold tracking-wider">Fazer login</h1>
                    <h3 className="text-neutral-300 mx-auto mb-2">Crie uma conta para se inscrever em projetos</h3>
                    <input className="text-white bg-transparent	border border-neutral-500 rounded-lg p-3 my-4" placeholder='Email' name='email' type="mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <div className='flex w-full'>
                        <input className="text-white bg-transparent	border border-neutral-500 rounded-lg p-3 my-4 w-full outline-none" placeholder='Senha' name='senha' type={showSenha ? 'text' : 'password'} value={senha} onChange={(e) => setSenha(e.target.value)} required />
                        <button type='button' onClick={() => setShowSenha(!showSenha)}><EyeIcon className='w-6 -ml-8 my-auto' /></button>
                    </div>
                    <div className='flex justify-around	'>
                        <Link href="" className='w-full text-center my-auto font-light tracking-wider text-neutral-300'>Recuperar senha</Link>
                        <input className="rounded-lg bg-button-green p-2 px-6 w-full" type="submit" value={'Entrar'} />
                    </div>
                    <div id='separador' className='w-96	h-px border-gradient-right'></div>
                    <Link href="/signup" className='text-xs mt-6 text-center text-neutral-300'>Ainda não tem conta? <span className='text-white underline underline-offset-2'>Cadastre-se aqui!</span></Link>
                </form>
            </div>
        </div>
    )
}