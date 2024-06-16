import Link from "next/link"


export default function Header() {
    return (
        <header className="flex flex-col">
            <div className="flex flex-row justify-between items-center px-16 w-full h-[86px]">
                <div className="flex gap-3">
                    <img
                        className="w-[47px] h-[50px]"
                        src="assets/images/logo.png"
                        alt="Logo da Jihatsu-teki"
                    />
                    <div className="flex">
                        <div className="flex flex-col">
                            <Link href={"/"} className="text-base font-bold bg-white-gradient white-gradient">
                                自発的
                            </Link>
                            <Link
                                href={"/"}
                                className="text-2xl font-extrabold bg-white-gradient white-gradient italic w-40"
                            >
                                Jihatsu-teki
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex gap-x-4 items-center">
                    <Link href={"/signup"} className="text-xs px-6 py-3 text-[#D0D0D0] hover:text-sm transform transition-all duration-200 ease-in-out">
                        Criar conta
                    </Link>
                    <Link
                        href={"/login"}
                        className="text-sm font-medium px-6 py-2 bg-[#009F66] text-white rounded-xl tracking-[1.14px] hover:bg-transparent hover:border transition duration-300"
                    >
                        Login
                    </Link>
                </div>
            </div>
            <div className="h-[1px] bg-gradient-to-r from-transparent via-emerald-600 to-transparent"></div>
        </header>
    )
}