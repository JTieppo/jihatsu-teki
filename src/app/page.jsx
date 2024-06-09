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
import Navbar from "./ui/navbar";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <section className="bg-[#002B21]">
        {/* COLOCAR O COMPONENTE */}
        <Navbar/>        
        {/*Conteúdo principal da home*/}
        <section className="grid grid-cols-2 grid-rows-1 p-16 gap-16">
          <div className="flex flex-col justify-center items-start gap-10">
            <h1 className="text-[46px] font-extrabold leading-[48.76px] tracking-[1.84px]">
              TRANSFORME SUA <br />
              VONTADE EM AÇÃO E <br />
              PARTICIPE DA{" "}
              <span className="border-b-4 border-green-700 italic">
                MUDANÇA!
              </span>
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
            <div></div>
            <p>Mais detalhes</p>
          </div>
        </div>
      </section>

      {/* Sobre a Jihatsu-teki da home */}
      <section className="flex flex-row justify-center px-48 py-16 gap-4 bg-[#001b12] border-t-2 border-green-700">

        {/* Card esquerdo */}
        <div className="w-[440px] h-auto flex flex-col gap-4">

          <div className="w-full h-2/6 flex flex-row justify-start items-center gap-3 p-6 bg-card-gradient rounded-2xl border border-[#008A6533]">
            <div className="flex justify-center items-center w-10 h-10 bg-[#009F66] rounded-full p-2.5">
              <p className="text-2xl/normal font-extrabold">自</p>
            </div>
            <div className="">
              <p className="text-white text-base/[20.8px] font-extrabold italic">自 (ji)</p>
              <p className="text-white text-xs/[15.6px] font-light italic">significa "auto" ou "próprio"</p>
            </div>
          </div>

          <div className="w-full h-2/6 flex flex-row justify-start items-center gap-3 p-6 bg-card-gradient rounded-2xl border border-[#008A6533]">
            <div className="flex justify-center items-center w-10 h-10 bg-[#009F66] rounded-full p-2.5">
              <p className="text-2xl/normal font-extrabold">発</p>
            </div>
            <div className="">
              <p className="text-white text-base/[20.8px] font-extrabold italic">発 (hatsu)</p>
              <p className="text-white text-xs/[15.6px] font-light italic">significa "partir", "iniciar" ou "emitir"</p>
            </div>
          </div>

          <div className="w-full h-2/6 flex flex-row justify-start items-center gap-3 p-6 bg-card-gradient rounded-2xl border border-[#008A6533]">
            <div className="flex justify-center items-center w-10 h-10 bg-[#009F66] rounded-full p-2.5">
              <p className="text-2xl/normal font-extrabold">的</p>
            </div>
            <div className="">
              <p className="text-white text-base/[20.8px] font-extrabold italic">的 (teki)</p>
              <p className="text-white text-xs/[15.6px] font-light italic">significa "partir", "iniciar" ou "emitir"</p>
            </div>
          </div>
        </div>

        {/* Card direito */}
        <div className="max-w-[440px] h-auto flex flex-col gap-6 p-6 bg-card-gradient rounded-2xl border border-[#008A6533]">
          <div className="">
            <p className="bg-white-gradient white-gradient text-2xl/none font-bold">自発的</p>
            <p className="bg-white-gradient white-gradient text-6xl/none font-black ">Jihatsu-teki</p>
          </div>
          <div>
            <p className="text-white text-xs/normal font-light leading-[15.6px] italic">Algo feito de manaira espontânea ou voluntária</p>
          </div>
          <div className="text-[#D0D0D0] text-sm/normal font-light leading-[16.8px] tracking-[0.98px]">
            A jihatsu-teki surgiu com o objetivo de pipipi popopo e tal coisa e
            nao sei o que lá A jihatsu-teki surgiu com o objetivo de pipipi
            popopo e tal coisa e nao sei o que láA jihatsu-teki surgiu com o
            objetivo de pipipi popopo e tal coisa e nao sei o que láA
            jihatsu-teki surgiu com o objetivo de pipipi popopo e tal coisa e
            nao sei o que lá
          </div>
        </div>
      </section>
    </main>
  );
}
