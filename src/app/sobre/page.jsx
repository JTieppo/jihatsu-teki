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
              <Link
                href={"/"}
                className="text-base font-bold text-darker-white"
              >
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

      <main className="flex flex-row px-16 py-8">
        <nav className="flex flex-col gap-2">
          <Link
            href={"/"}
            className="w-40 pr-4 py-2 text-right hover:bg-custom-gradient-hover"
          >
            Meus projetos
          </Link>
          <Link
            href={"/"}
            className="w-40 pr-4 py-2 text-right hover:bg-custom-gradient-hover"
          >
            Instituições
          </Link>
          <Link
            href={"/"}
            className="w-40 pr-4 py-2 text-right hover:bg-custom-gradient-hover"
          >
            Dados pessoais
          </Link>
        </nav>

        <section className="flex flex-col gap-4 w-full pl-6 border-l-1 border-solid border-gradient-left">
          <div className="flex flex-row justify-between">
            <div>
              <h1 className="text-2xl font-black">Meus projetos</h1>
            </div>
            <div className="flex flex-row gap-[10px]">
              <button className="w-48 h-10  border border-white rounded-xl">
                Procurar projetos
              </button>
              <button className="w-48 h-10  bg-button-green rounded-xl">
                Criar projeto
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-8 p-16 bg-[#012b22] rounded-xl">
            <div className="">
              <p>
                Você ainda não está participando de nenhum projeto, escolha uma
                opção abaixo para começar:{" "}
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <button className="w-48 h-10  border border-white rounded-xl">
                Quero ser voluntário
              </button>
              <button className="w-48 h-10  bg-button-green rounded-xl">
                Criar projeto
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
