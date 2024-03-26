"use client"
import { usePathname } from "next/navigation";
import { data } from "../../../../../data";
import { useState } from "react";

export default function Company() {
    const path = usePathname();
    var companyID = path.slice(1);
    const companyData = data.find(dados => dados.id == +companyID);
    var urlParts = companyData?.website.split('com/');
    const site = urlParts?.[1] ?? ' ';

    const [showSnackbar, setShowSnackbar] = useState('');
    const botaoDesativado = () => {
        setShowSnackbar('show');
        setTimeout(() => {
            setShowSnackbar('');
        }, 3000);
    };

    return (
        <div className="absolute flex-col">
            <div className="ml-[10%] lg:ml-[20%] mt-[-30px] md:mt-[-65px] w-[80%] lg:w-[60%]">
                <div className="flex flex-col md:flex-row rounded-md" id="card">
                    <div className="mx-auto flex mt-[-40px] md:mt-0 w-20 h-20 rounded md:min-w-32 md:min-h-32 items-center md:rounded-bl" style={{ backgroundColor: companyData?.logoBackground }}>
                        <img className="mx-auto" src={companyData?.logo} alt="" />
                    </div>

                    <div className="flex flex-col text-center md:text-start md:flex-row items-center justify-between p-6 w-full">
                        <div>
                            {companyData?.company}
                            <p className="text-sm mt-2 md:mt-0" style={{ color: "#6E8098" }}>{site}.com</p>
                        </div>
                        <button className="min-w-32 h-10 rounded pl-2 pr-2 mt-5 md:mt-0" id="companyButtonSite" style={{color:"#5964E0"}} onClick={botaoDesativado}>{companyData?.company} site</button>
                    </div>

                </div>
                <div className=" flex flex-col md:flex-row justify-between items-center relative rounded-t-md p-10 mt-20" id="card">
                    <div>
                        <div className="flex flex-row items-baseline text-sm" style={{ color: "#6E8098" }}>
                            <p>{companyData?.postedAt}</p>
                            <div className="h-1 w-1 rounded-full ml-3" style={{ backgroundColor: "#6E8098" }}></div>
                            <p className="ml-3">{companyData?.contract}</p>
                        </div>
                        <p className="mt-2 text-lg md:text-2xl">{companyData?.position}</p>
                        <p className="mt-2 text-sm" style={{ color: "#5964E0" }}>{companyData?.location}</p>
                    </div>
                    <button className="rounded mt-12 h-10 w-full md:mt-0 md:w-32 text-center" style={{ backgroundColor: "#5964E0" }} onClick={botaoDesativado}>Apply Now</button>
                </div>
                <div id="card" className="pl-10 pr-10 pb-10 mb-20 rounded-b">
                    <div style={{ color: "#9DAEC2" }}>
                        {companyData?.description}
                    </div>
                    <div className="mt-10">
                        <p className="text-2xl mb-6">Requirements</p>
                        <p className="text-sm mb-10" style={{ color: "#9DAEC2" }}>{companyData?.requirements.content}</p>
                        {companyData?.requirements.items.map((items) => (
                            <div className="text-sm mt-4 flex flex-row items-center" style={{ color: "#9DAEC2" }} key={items}><div className="min-h-1 min-w-1 ml-4 mr-4 rounded" style={{ backgroundColor: "#5964E0" }}></div><p>{items}</p></div>
                        ))}
                    </div>
                    <div className="mb-4">
                        <p className="text-2xl mt-14 mb-6">What You Will Do</p>
                        <p className="text-sm mb-10" style={{ color: "#9DAEC2" }}>{companyData?.role.content}</p>
                        {companyData?.role.items.map((items, num) => (
                            <div className="text-sm mt-4 flex flex-row items-center" style={{ color: "#9DAEC2" }} key={items}><p className="ml-4 mr-4" style={{ color: "#5964E0" }}>{num + 1}</p><p>{items}</p></div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="h-20 w-full flex flex-row justify-between items-center pl-[20%] pr-[20%]" id="card">
                <div className="hidden md:flex flex-col">
                    <p className="text-lg">{companyData?.position}</p>
                    <p className="text-sm" style={{color:"#9DAEC2"}}>So Digital Inc.</p>
                </div>
                <button className="p-2 rounded w-full md:w-32" id="" style={{backgroundColor:"#5964E0"}} onClick={botaoDesativado}>Apply Now</button>
            </div>
            <div id="snackbar" className={showSnackbar}>
                <p className="my-auto mx-auto text-2xl" style={{ color: "#5964E0" }}>Illustrative button</p>
            </div>
        </div>
    );
}