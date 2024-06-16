"use client";
export default function Config() {
  return (
    <div className="flex flex-row  w-full">
      <main className="flex flex-row w-full pt-14 pr-16">
        <section className="flex flex-col gap-4 w-full">
          <div className="flex flex-row justify-between">
            <div>
              <h1 className="text-2xl font-black">Meus dados</h1>
            </div>
            <div className="flex flex-row gap-[10px]">
              <button className="w-48 h-10  bg-button-green rounded-xl">
                Criar instituição
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-4">
              <input type="text" placeholder="Nome completo" className="w-96 px-4 py-3 bg-transparent border border-darker-white rounded-xl"/>
              <input type="mail" placeholder="Email" className="w-96 px-4 py-3 bg-transparent border border-darker-white rounded-xl"/>
              <input type="text" placeholder="Crie sua senha" className="w-96 px-4 py-3 bg-transparent border border-darker-white rounded-xl"/>
            </div>
            <div className="flex flex-col gap-4">
              <input type="text" placeholder="Sexo" className="w-96 px-4 py-3 bg-transparent border border-darker-white rounded-xl"/>
              <input type="text" placeholder="Data de nascimento" className="w-96 px-4 py-3 bg-transparent border border-darker-white rounded-xl"/>
              <input type="text" placeholder="Selecione sua cidade" className="w-96 px-4 py-3 bg-transparent border border-darker-white rounded-xl"/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
