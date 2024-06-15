"use client"
import Cookie from 'js-cookie'
import { useState } from "react"
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Navbar from '../ui/navbar';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaEmailInvalidos, setSenhaEmailInvalidos] = useState(false);
    const cookieT = Cookies.get('auth_token')
    const cookieI = Cookies.get('auth_token')
    

    function Login() {
        event.preventDefault();
        fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email: email, senha: senha })
        })
            .then(response => response.json())
            .then(response => {
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
        <div className='h-screen'>
            <Navbar/>
            <div className="flex justify-center h-full flex-row m-top">
                <form className="flex flex-col w-96 absolute mx-auto my-auto" onSubmit={Login}>
                    <h1 className="text-4xl text-darker-white  mx-auto mb-4">Fazer login</h1>
                    <h3 className="text-sm	 mx-auto mb-2">Crie uma conta para se inscrever em projetos</h3>
                    {/* <label className='' htmlFor="email">Email</label> */}
                    <input className="text-white bg-transparent	border border-neutral-500 rounded-lg p-3 my-4" placeholder='Email' name='email' type="mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    {/* border image não funcionou, precisa corrigir */}
                    {/* <label htmlFor="senha">Senha</label> */}
                    <input className="text-white bg-transparent	border border-neutral-500 rounded-lg p-3 my-4" placeholder='Senha' name='senha' type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                    {/* border image não funcionou, precisa corrigir */}
                    <div className='flex justify-around	'>
                    <a href="" className='w-full text-center my-auto'>Recuperar senha</a>
                    <input className="rounded-lg bg-button-green p-2 px-6 w-full" type="submit" value={'Entrar'} />
                    </div>
                    <div id='separador' className='w-96	h-px border-gradient-right'></div>
                    {/* bg-teal-500  */}
                    <a href="" className='text-xs mt-6 text-center text-neutral-500'>Ainda não tem conta? Cadastre-se aqui!</a>
                </form>
                {/* <div className={` fixed transition-opacity duration-700 ease-in-out ${senhaEmailInvalidos ? 'opacity-100 pointer-events-none' : 'opacity-0 pointer-events-none'}`}> */}
                    {/* <p className='mb-20 bg-red-950 p-4 rounded-lg'>Email ou senha inválidos</p> */}
                {/* </div> */}
            </div>
            
        </div>
    )
}