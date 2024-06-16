export default function CreateInstitution(paramGeral) {
    return (
        <div className={`${paramGeral.open ? 'opacity-100' : 'pointer-events-none opacity-0'} flex fixed transition duration-300 z-10`}>
            <button className="w-screen h-screen fixed blur bg-[#0000005e] inset-0" onClick={() => paramGeral.set(false)}></button>
            <div className="w-[450px] h-fit p-6 bg-emerald-900 rounded-lg fixed mx-auto inset-0 my-auto">
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
                            <img src="/assets/images/material-symbols_image.png" alt="" className="h-12 w-12 my-auto mr-4" />
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
                    <button className="w-56 px-6 py-4 bg-button-green rounded-xl">
                        Criar projeto
                    </button>
                </div>
            </div>
        </div>
    )
};
