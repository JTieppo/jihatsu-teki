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
      <section className="bg-[#002B21]" >
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

        <div className="">
          <h1 className="h-[150px]">
            Transforme sua vontade e ação e participe da mudança!
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
            temporibus ut! Aspernatur, porro nisi. Iste maxime similique omnis
            aspernatur commodi voluptatem natus minima harum, illum, id sequi
            quibusdam, eaque odio.
          </p>
        </div>
      </section>
    </main>
  );
}
