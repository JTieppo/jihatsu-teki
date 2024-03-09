export default function Sobre() {
    return (
        <div className="flex min-h-screen flex-col items-center ">
            <img src="/inicio-desktop.jpeg" className="hidden lg:block min-h-screen max-h-screen min-w-full absolute" alt="" />
            <img src="/inicio-mobile.jpeg" className="lg:hidden min-h-screen max-h-screen min-w-full absolute" alt="" />
            <div className="flex flex-col w-full h-screen items-center z-10">
                <div className="flex flex-col mx-auto my-auto p-4 items-center bg-[#383838f5] max-w-80 text-md rounded-2xl text-white">
                    <h1 className="my-auto text-2xl mb-4">Sobre Nós</h1>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quo quam necessitatibus ipsa animi, unde dolorem alias veniam sunt maiores enim deserunt voluptatibus doloribus modi deleniti soluta. Error, assumenda ipsa.</p>
                </div>
            </div>
        </div>
    )
}