export default function Login() {
    function Login(){
        
    }
    return (
        <div className="flex min-h-screen flex-col items-center ">
            <img src="/login-desktop.jpeg" className="hidden lg:block min-h-screen max-h-screen min-w-full absolute" alt="" />
            <img src="/login-mobile.jpeg" className="lg:hidden min-h-screen max-h-screen min-w-full absolute" alt="" />
            <div className="flex flex-col z-10 w-full items-center my-auto bg-[#38383861] rounded-xl max-w-80 p-8">
                <h1 className="text-green-200 text-4xl mb-10">Login</h1>
                <input className="text-black p-2 px-4 rounded-full w-64" type="mail" />
                <input className="mt-4 text-black p-2 px-4 rounded-full w-64" type="password" />
                <button className="mt-4 bg-green-200 text-black p-2 px-4 rounded-full w-64" >Login</button>
            </div>
        </div>
    )
}