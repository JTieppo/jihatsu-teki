"use client";
import Link from "next/link";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import Card from "./ui/card";
import "./globals.css";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <section className="bg-[#002B21]">
        {/* Cabeçalho da home */}
        <header className="flex flex-row justify-between items-center px-16 w-full h-[86px] border-b border-green-700">
          <div className="flex gap-3">
            <img
              className="w-[47px] h-[50px]"
              src="assets/images/logo.png"
              alt="Logo da Jihatsu-teki"
            />
            <div className="flex">
              <div className="flex flex-col">
                <Link href={"/"} className="text-base font-bold text-[#D0D0D0]">
                  自発的
                </Link>
                <Link
                  href={"/"}
                  className="text-2xl font-extrabold text-[#D0D0D0]"
                >
                  Jihatsu-teki
                </Link>
              </div>
            </div>
          </div>
          <div className="flex gap-x-4 items-center">
            <Link href={"/signup"} className="text-xs px-6 py-3 text-[#D0D0D0]">
              Criar conta
            </Link>
            <Link
              href={"/login"}
              className="text-xs font-black leading-[14.4px] tracking-[1.44px] px-6 py-3 bg-[#009F66] text-white rounded-xl"
            >
              Login
            </Link>
          </div>
        </header>

        {/*Conteúdo principal da home*/}
        <section className="grid grid-cols-2 grid-rows-1 p-16 gap-16">
          <div className="flex flex-col justify-center items-start gap-10">
            <h1 className="text-[46px] font-extrabold leading-[48.76px] tracking-[1.84px]">
              TRANSFORME SUA <br />
              VONTADE EM AÇÃO E <br />
              PARTICIPE DA{" "}
              <span className="border-b-4 border-green-700">MUDANÇA!</span>
            </h1>
            <p className="text-sm text-[#D0D0D0] leading-[19.6px] tracking-[1.12px]">
              A Jihatsu-teki conecta ações de limpeza comunitárias e voluntários{" "}
              <br />
              para construir um mundo melhor! Encontre projetos perto de você ou{" "}
              <br />
              busque voluntários para auxiliar na sua causa.
            </p>
            <div className="flex gap-4">
              <Link href={"/"} className="py-4 px-6 bg-[#009F66] rounded-xl">
                Quero ser voluntário
              </Link>
              <Link
                href={"/"}
                className="py-4 px-6 text-[#D0D0D0] border rounded-xl"
              >
                Preciso de voluntário
              </Link>
            </div>
          </div>
          <div class="bg-white opacity-15 border border-dashed border-[#009F66] p-4"></div>
        </section>
      </section>
        {/* Carrossel da home */}
        <section>

        </section>

        {/* Sobre a Jihatsu-teki da home */}
        <section className="bg-[#001012]">
            <div>
                <div>
                    <p>ENCONTRE UMA AÇÃO PERTO DE VOCÊ</p>
                </div>
                <div>
                    <p>Procurar cidade</p>
                    <button>Ver tudo</button>
                </div>
            </div>
            
            <div>
                <div>
                    <img src="" alt="" />
                    <h2>Limpeza do Hospital Universiário</h2>
                    <div>
                        <img src="" alt="" />
                        <p>Dia 20/06/2024 às 17:00</p>
                        <p>Av. Mandacaru, 1590 - Parque das Laranjeiras, Maringa - PR</p>
                    </div>
                    <div>

                    </div>
                    <p>Mais detalhes</p>
                </div>
            </div>

        </section>
      
    </main>
  );
}
