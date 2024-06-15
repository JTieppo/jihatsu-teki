"use client";
import Link from "next/link";

export default function Sobre() {
  return (
    <div className="bg-card-gradient min-h-screen">
      {/*header que pode ser um component */}
      <header className="flex flex-row justify-between items-center px-16 w-full h-[86px]">
        <div className="flex gap-3">
          <img
            className="w-[47px] h-[50px]"
            src="assets/images/logo.png"
            alt="Logo da Jihatsu-teki"
          />
          <div className="flex">
            <div className="flex flex-col">
              <Link href={"/"} className="text-base font-bold text-darker-white">
                自発的
              </Link>
              <Link
                href={"/"}
                className="text-2xl font-extrabold text-darker-white"
              >
                Jihatsu-teki
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 border border-white rounded-xl text-xs/[14.4px] tracking-[1.44px]">
            User name
          </button>
          <button className="px-6 py-3 border border-white rounded-xl text-xs/[14.4px] tracking-[1.44px]">
            Meus projetos
          </button>
          <Link
            href={"/"}
            className="px-6 py-3 text-xs/[14.4px] tracking-[1.44px]"
          >
            Sair
          </Link>
        </div>
      </header>

      <div className="bg-gradient-to-r h-[1px] from-[#ffffff00] via-green-600 to-[#ffffff00]"></div>

      <main className="flex flex-row mt-3">
        <nav className="flex flex-col border-r-4 border-solid border-gradient-right">
          <Link href={"/"} className="hover:bg-custom-gradient-hover px-4 py-2">Meus projetos</Link>
          <Link href={"/"} className="hover:bg-custom-gradient-hover px-4 py-2">Instituições</Link>
          <Link href={"/"} className="hover:bg-custom-gradient-hover px-4 py-2">Dados pessoais</Link>
        </nav>

        
      </main>
    </div>
  );
}
