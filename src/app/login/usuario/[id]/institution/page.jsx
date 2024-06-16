export default function Projects() {
  return (
    <div className="flex flex-row  w-full">
      <main className="flex flex-row w-full pt-14 pr-16">
        <section className="flex flex-col gap-4 w-full">
          <div className="flex flex-row justify-between">
            <div>
              <h1 className="text-2xl font-black">Instituição</h1>
            </div>
            <div className="flex flex-row gap-[10px]">
              <button className="w-48 h-10  bg-button-green rounded-xl">
                Criar instituição
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-8 p-16 bg-[#012b22] rounded-xl">
            <div className="">
              <p>
              Para cadastrar um projeto ou uma ação, você precisa ter uma instituição cadastrada.{" "}
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <button className="w-48 h-10  bg-button-green rounded-xl">
                Criar instituição
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
