"use client"
import Link from "next/link";
import { data } from "../../data";
import { usePathname } from "next/navigation";


export default function Card(id) {
    var componentData = data.find(component => component.id == id);
    const idPath = usePathname().split('/')[3];
    console.log("id, idpath: ",id, idPath)

    return (
        <Link href={`/login/usuario/${idPath}/voluntario/${id.id}`} id="card-company" className="relative mt-20 rounded-lg p-8 mr-10 lg:mr-20 ">
            <div className="absolute flex w-12 h-12 rounded-2xl items-center" style={{ backgroundColor: componentData?.logoBackground, marginTop: "-55px" }}>
                <img className="mx-auto" src={componentData?.logo} alt="" />
            </div>
            <div>
                <div className="flex flex-row items-baseline mt-4 text-sm" style={{ color: "#6E8098" }}>
                    <p>{componentData?.postedAt}</p>
                    <div className="h-1 w-1 rounded-full ml-3" style={{ backgroundColor: "#6E8098" }}></div>
                    <p className="ml-3">{componentData?.contract}</p>
                </div>
                <p className="mt-2">{componentData?.position}</p>
                <p className="mt-2 text-sm" style={{ color: "#6E8098" }}>{componentData?.company}</p>
                <p className="mt-8 text-sm" style={{ color: "#5964E0" }}>{componentData?.location}</p>
            </div>
        </Link>
    );
}