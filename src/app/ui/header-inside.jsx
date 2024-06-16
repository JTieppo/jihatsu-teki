import Link from "next/link"



export default function HeaderInside() {
    return (
        <header className="flex flex-col px-16 w-full">
            <div className="flex flex-row justify-between items-center px-16 w-full h-20">
                <div className="flex gap-3">
                    <img
                        className="h-12"
                        src="/assets/images/logo.png"
                        alt="Logo da Jihatsu-teki"
                    />
                    <div className="flex">
                        <div className="flex flex-col justify-center">
                            <Link href={"/"} className="text-xs font-bold bg-white-gradient white-gradient">
                                自発的
                            </Link>
                            <Link
                                href={"/"}
                                className="text-xl font-extrabold bg-white-gradient white-gradient"
                            >
                                Jihatsu-teki
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex gap-8 items-center">
                    <Link href={"/signup"} className="text-xs p-2 px-4 border border-stone-400 rounded-lg">
                        Meus projetos
                    </Link>
                    <Link
                        href={"/"}
                        className=""
                    >
                        sair
                    </Link>
                </div>
            </div>

            <div className="h-[1px] bg-gradient-to-l from-transparent via-emerald-600 to-transparent"></div>
        </header>
    )
}