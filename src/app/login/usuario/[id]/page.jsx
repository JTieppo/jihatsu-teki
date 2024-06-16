import Link from "next/link";
export default function Dashboard() {
  return (
    <div className="flex flex-row  w-full">
      <main className="flex flex-row w-full pt-16 pr-16">
        <section className="flex flex-col gap-4 w-full">
          <div className="flex flex-row justify-between">
            <div>
              <h1 className="text-2xl bg-white-gradient white-gradient font-black">Meus projetos</h1>
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

          {/*This is the form 1 de 3*/}
          <div className="w-[427px] h-full p-6 bg-red-800">
            <h1 className="text-[32px] font-extrabold">Criar projeto</h1>
            <p className="my-6 text-base/[19.6px] text-darker-white">
              Precisamos saber algumas coisas sobre o seu projeto para exibi-lo
              para os voluntários:
            </p>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nome do projeto"
                className="w-full p-3 bg-transparent border border-darker-white rounded-xl"
              />
              <input
                type="text"
                placeholder="Cidade do projeto"
                className="w-full p-3 bg-transparent border border-darker-white rounded-xl"
              />
              <input
                type="text"
                placeholder="Endereço / ponto de encontro"
                className="w-full p-3 bg-transparent border border-darker-white rounded-xl"
              />
              <input
                type="text"
                placeholder="Responsável pelo projeto"
                className="w-full p-3 bg-transparent border border-darker-white rounded-xl"
              />
            </div>
            <div className="flex flex-row justify-between mt-16">
              <div>
                <p className="mb-2 text-darker-white">Etapa 1 de 3</p>
                <img src="/assets/images/1de3.png" alt="Etapa 1 de 3" />
              </div>
              <div>
                <button className="w-56 px-6 py-4 bg-button-green rounded-xl">
                  Próximo
                </button>
              </div>
            </div>
          </div>

          {/*This is the form 2 de 3*/}
          <div className="w-[427px] h-full p-6 bg-red-800">
            <h1 className="text-[32px] font-extrabold">Criar projeto</h1>
            <p className="my-6 text-base/[19.6px] text-darker-white">
              Precisamos saber algumas coisas sobre o seu projeto para exibi-lo
              para os voluntários:
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-2">
                <input
                  type="text"
                  placeholder="Data de início"
                  className="w-full p-3 bg-transparent border border-darker-white rounded-xl"
                />
                <input
                  type="text"
                  placeholder="Hora de início"
                  className="w-full p-3 bg-transparent border border-darker-white rounded-xl"
                />
              </div>
              <div className="flex flex-row gap-2">
                <input
                  type="text"
                  placeholder="Data de encerramento"
                  className="w-full p-3 bg-transparent border border-darker-white rounded-xl"
                />
                <input
                  type="text"
                  placeholder="Hora de encerramento"
                  className="w-full p-3 bg-transparent border border-darker-white rounded-xl"
                />
              </div>
              <div>
                <textarea
                  type="text"
                  placeholder="Nome do projeto"
                  className="w-full h-20 p-3 bg-transparent border border-darker-white rounded-xl"
                />
              </div>
            </div>
            <div className="flex flex-row justify-between mt-16">
              <div>
                <p className="mb-2 text-darker-white">Etapa 2 de 3</p>
                <img src="/assets/images/2de3.png" alt="Etapa 2 de 3" />
              </div>
              <div>
                <button className="w-56 px-6 py-4 bg-button-green rounded-xl">
                  Próximo
                </button>
              </div>
            </div>
          </div>

          {/*This is the form 3 de 3*/}
          <div className="w-[427px] h-full p-6 bg-red-800">
            <h1 className="text-[32px] font-extrabold">Criar projeto</h1>
            <p className="my-6 text-base/[19.6px] text-darker-white">
              Precisamos selecionar uma entidade para ser responsável pelo seu
              projeto
            </p>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nome da instituição"
                className="w-full p-3 bg-transparent border border-darker-white rounded-xl"
              />
              <input
                type="text"
                placeholder="Responsável"
                className="w-full p-3 bg-transparent border border-darker-white rounded-xl"
              />
              <input
                type="text"
                placeholder="Telefone de contato"
                className="w-full p-3 bg-transparent border border-darker-white rounded-xl"
              />
              <div className="flex flex-row p-4 border border-dashed border-darker-white rounded-xl">
                <div>
                  <img src="/assets/images/material-symbols_image.png" alt="" />
                </div>
                <div>
                  <p className="font-xs text-darker-white">
                    Logo da insituiçāo
                  </p>
                  <p className="text-[10px]/[10px] font-light text-darker-white">
                    Envie ou arraste uma imagem
                  </p>
                  <p className="text-[10px] font-light text-darker-white">
                    Recomendamos uma imagem 250px*250px
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between mt-16">
              <div className="">
                <p className="mb-2 text-darker-white">Etapa 3 de 3</p>
                <img src="/assets/images/3de3.png" alt="Etapa 3 de 3" />
              </div>
              <div>
                <button className="w-56 px-6 py-4 bg-button-green rounded-xl">
                  Próximo
                </button>
              </div>
            </div>
          </div>

          {/*Create institution*/}
          <div className="w-[427px] h-full p-6 bg-red-800">
            <h1 className="text-[32px] font-extrabold">Criar instituição</h1>
            <p className="my-6 text-base/[19.6px] text-darker-white">
              Precisamos selecionar uma entidade para ser responsável pelo seu
              projeto
            </p>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nome da instituição"
                className="w-full p-3 bg-transparent border border-darker-white rounded-xl"
              />
              <input
                type="text"
                placeholder="Responsável"
                className="w-full p-3 bg-transparent border border-darker-white rounded-xl"
              />
              <input
                type="text"
                placeholder="Telefone de contato"
                className="w-full p-3 bg-transparent border border-darker-white rounded-xl"
              />
              <div className="flex flex-row p-4 border border-dashed border-darker-white rounded-xl">
                <div>
                  <img src="/assets/images/material-symbols_image.png" alt="" />
                </div>
                <div>
                  <p className="font-xs text-darker-white">
                    Logo da insituiçāo
                  </p>
                  <p className="text-[10px]/[10px] font-light text-darker-white">
                    Envie ou arraste uma imagem
                  </p>
                  <p className="text-[10px] font-light text-darker-white">
                    Recomendamos uma imagem 250px*250px
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-end mt-16">
              <div>
                <button className="w-56 px-6 py-4 bg-button-green rounded-xl">
                  Próximo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
