"use client"
import { useRouter } from "next/navigation";
import { useState } from "react"
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import Cookie from 'js-cookie';

export default function Signup() {
    const route = useRouter();
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [mostraSenha, setMostraSenha] = useState('password');
    const [mostraSenhasCorrespondem, setMostraSenhasCorrespondem] = useState(false);
    const [emailExiste, setEmailExiste] = useState(false);

    function MostraSenha() {
        if (mostraSenha == 'password') {
            setMostraSenha('text');
        } else {
            setMostraSenha('password');
        }
    }

    function CriarConta(e) {
        e.preventDefault();
        if (senha != confirmaSenha) {
            setMostraSenhasCorrespondem(true);
            setTimeout(() => {
                setMostraSenhasCorrespondem(false);
            }, 3000);
        } else {
            fetch('/api/signup', {
                method: 'POST',
                body: JSON.stringify({ nome: nome, sobrenome: sobrenome, senha: senha, email: email })
            })
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    if(response.success){
                        Cookie.set(response.nameCookieA, response.cookieA);
                        Cookie.set(response.nameCookieB, response.cookieB);
                        route.push(`/usuario/${response.id}`);
                    } else{
                        if(response.mailExiste){
                            console.log("chamando")
                            setEmailExiste(true);
                            setTimeout(() => {
                                setEmailExiste(false);
                            }, 3000)
                        }
                    }
                })
        }
    }
    return (
        <div className="flex h-screen text-indigo-500">
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
                <label htmlFor="datanascimento">Data Nascimento</label>
                <input type="date" name="datanascimento" required/>
                <label htmlFor="cidade">Cidade</label>
                <input type="text" name="cidade" required/>
                <label htmlFor="escolaridade">Escolaridade</label>
                <select name="escolaridade" id="" required>
                    <option value="">Selecione</option>
                    <option value="fundamental-incompleto">Fundamental - incompleto</option>
                    <option value="fundamental-completo">Fundamental - completo</option>
                    <option value="primeiro-grau-incompleto">1º grau - incompleto</option>
                    <option value="primeiro-grau-cursando">1º grau - cursando</option>
                    <option value="primeiro-grau-completo">1º grau - completo</option>
                    <option value="superior-incompleto">Ensino superior - inconpleto</option>
                    <option value="superior-cursando">Ensino superior - cursando</option>
                    <option value="superior-completo">Ensino superior - completo</option>
                    <option value="doutorado-mestrado-cursando">Doutorado/mestrado - cursando</option>
                    <option value="doutorado-mestrado-completo">Doutorado/mestrado - completo</option>
                </select>
                <label htmlFor="sexo">Sexo</label>
                <select name="sexo" id="" defaultValue={'selecione'} required>
                    {/* <option value="">Selecione</option> */}
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Outro">Outro</option>
                </select>
                <input type="submit" value={'Criar conta'} className="text-white" required/>
            </form>
            <div className={`${mostraSenhasCorrespondem? 'absolute':'hidden'} flex h-full w-full items-end pointer-events-none`}>
                <p className="mx-auto mb-20 bg-white">As senhas não correspondem</p>
            </div>
            <div className={`flex absolute h-full w-full items-end transition-opacity duration-700 ease-in-out ${emailExiste ? 'opacity-100 pointer-events-none' : 'opacity-0 pointer-events-none'}`}>
                <p className='mb-20 bg-red-950 p-4 rounded-lg mx-auto'>Email já registrado</p>
            </div>
        </div>
    )
}