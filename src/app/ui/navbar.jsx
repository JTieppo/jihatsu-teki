import Link from "next/link";
export default function Navbar(){
    return(
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
    )

}