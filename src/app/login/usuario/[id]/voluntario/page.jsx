"use client"
import Link from 'next/link';
import Image from 'next/image'
import { MagnifyingGlassIcon, MapPinIcon, CheckIcon } from "@heroicons/react/24/outline";
import Card from '@/app/ui/card';
import { useEffect, useState } from "react";



export default function Home() {
    const [showSnackbar, setShowSnackbar] = useState('');
    const [responseSearch, setResponseSearch] = useState('');
    const [checkVisual, setCheckVisual] = useState('');
    const [opacidade, setOpacidade] = useState('');
    const [viFiltro, setViFiltro] = useState('hidden');
    const [eventoPonteiro, setEventoPonteiro] = useState('');
    const [fullTime, setFullTime] = useState(false);
    const [buscaLocal, setBuscaLocal] = useState('');
    const [buscaTipo, setBuscaTipo] = useState('');
    const [IDlist, setIDlist] = useState([]);
    const [correspondenteNulo, setShowCorrespondenteNulo] = useState('hidden');
    const [mainShow, setMainShow] = useState('block');
    const botaoDesativado = () => {
        setShowSnackbar('show');
        setTimeout(() => {
            setShowSnackbar('');
        }, 3000);
    };

    function mostraCheck() {
        setCheckVisual(checkVisual == '' ? 'md:inline-block' : '');
        setFullTime(fullTime == false ? true : false);
    }

    function clickIconFiltro() {
        setOpacidade(opacidade == '' ? 'opacity-20' : '');
        setEventoPonteiro(eventoPonteiro == '' ? 'pointer-events-none' : '')
        setViFiltro(viFiltro == 'hidden' ? 'flex' : 'hidden');
    }

    function valorCorrespondenteNulo() {
        setShowCorrespondenteNulo(correspondenteNulo == 'flex' ? 'hidden' : 'flex')
        setMainShow(mainShow == 'hidden' ? 'block' : 'hidden');
    }

    const buscar = () => {
        fetch("/api/busca", {
            method: "POST",
            body: JSON.stringify({
                fullTime,
                buscaLocal,
                buscaTipo,
            }),
            headers: {
                "content-type": "application/json",
            },
        })
            .then(response => response.json())
            .then(dados => console.log(dados))
            .catch((e) => console.log(e))

    };
    useEffect(() => {
        fetch("/api/busca", {
            method: "GET",
        })
            .then(response => response.json())
            .then(dados => setIDlist(dados))
            .catch((e) => console.log(e))
    }, [])

    console.log(IDlist)
    if (IDlist) {
        return (
            <div className='flex flex-col w-full'>
                <div className={`${correspondenteNulo} h-screen text-center`}>
                    <div className="w-full">
                        <p className="text-center mt-20 mx-auto text-2xl"> Sentimos muito, nada foi encontrado!</p>
                        <button className="bg-[#02B075] rounded h-10 pl-3 pr-3 text-center mt-8" onClick={valorCorrespondenteNulo}>Back Home</button>
                    </div>
                </div>
                <div className={`${opacidade} ${mainShow} h-screen w-full`}>
                    <div className="hidden md:flex mr-8 ml-8 md:mr-10 md:ml-10 lg:mr-20 lg:ml-20">
                        <div className="flex flex-row w-full mt-6">
                            <div className="w-full flex items-center" id="area-grow">
                                <MagnifyingGlassIcon className="absolute ml-2 z-10 h-8 w-8 text-[#00D286]" onClick={buscar}></MagnifyingGlassIcon>
                                <input id="input-text" className="hidden xl:flex pl-12 h-16 w-full rounded-l-lg border-r" type="text" placeholder="Filtrar por tipo, projeto..." value={buscaTipo} onChange={(e) => setBuscaTipo(e.target.value)} />
                                <input id="input-text" className="xl:hidden pl-12 h-16 w-full rounded-l-lg border-r" type="text" placeholder="Filtrar por..." value={buscaTipo} onChange={(e) => setBuscaTipo(e.target.value)} />
                            </div>
                            <div className="w-full flex items-center" id="area-grow">
                                <MapPinIcon className='w-8 h-8 absolute ml-2 text-[#00D286]'></MapPinIcon>
                                <input id="input-text" className="pl-12 h-16 w-full border-r" type="text" placeholder="Filtrar por localização..." value={buscaLocal} onChange={(e) => setBuscaLocal(e.target.value)} />
                            </div>
                            <div id="input-text" className="hidden md:flex flex-row justify-between min-w-64 lg:min-w-80 items-center pl-3 rounded-r-lg">

                                <div className="relative flex flex-row ">
                                    <input onClick={mostraCheck} type="checkbox" id="meuCheckbox" className="" />
                                    <label htmlFor="meuCheckbox" className="label-checkbox">Favoritos</label>
                                    <CheckIcon className={`hidden ${checkVisual} w-4 -mr-4 absolute mt-1 pointer-events-none`} />
                                </div>
                                <button className="rounded bg-[#00D286] h-9 lg:h-10 w-20 lg:w-28 mr-5 text-white" onClick={buscar}>search</button>
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden flex flex-row justify-between ml-10 mr-10 items-center" style={{ marginTop: "-32px" }}>
                        <input id="input-text" className="p-4 rounded w-full pr-24" type="text" placeholder="Filter by title..." value={buscaTipo} onChange={(e) => setBuscaTipo(e.target.value)} />
                        <div className="flex items-center ml-[-120%] mr-5">
                            <button onClick={clickIconFiltro} className="mr-2"><img src="assets/mobile/icon-filter.svg" alt="" /></button>
                            <button className="rounded-md bg-[#00D286] h-8 w-8"><MagnifyingGlassIcon className="mx-auto h-8 w-8 text-white" onClick={buscar}></MagnifyingGlassIcon></button>
                        </div>
                    </div>
                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-8 md:ml-10 lg:ml-20 ${eventoPonteiro}`}>
                        {IDlist.map((id) => (
                            <Card key={id} id={id}/>
                        ))}
                    </div>
                </div>
                <div className={viFiltro}>
                    <button className="m-10 fixed mx-auto w-full h-full top-0" onClick={clickIconFiltro}></button>




                    <div>
                        <div className="m-10 absolute mx-auto w-full top-56">
                            <div className="flex flex-col mx-auto mr-10 ml-10">
                                <div className="">
                                    <input className="rounded-none rounded-t w-full h-12 border-b pl-12" type="text" name="" id="input-text" value={buscaLocal} onChange={(e) => setBuscaLocal(e.target.value)} />
                                    <img className="-mt-9 ml-6 mb-4" src="/assets/desktop/icon-location.svg" alt="" />
                                </div>
                                <div>
                                    <div id="input-text" className="flex flex-col justify-between p-6 rounded-b-lg">
                                        <div className="flex flex-row">
                                            <input type="checkbox" id="checkbox-mobile" className="flex my-auto mr-2" onClick={mostraCheck} />
                                            <label htmlFor="meuCheckbox" className="">Full</label>
                                            <p className="ml-1">time</p>
                                            <p className="ml-1">only</p>
                                        </div>
                                        <button className="mt-2 rounded bg-[#02B075] h-10 w-full" onClick={buscar}>search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div id="snackbar" className={showSnackbar}>
                    <p className="my-auto mx-auto text-2xl" style={{ color: "#5964E0" }}>Illustrative button</p>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                carregando...
            </div>
        )
    }

}