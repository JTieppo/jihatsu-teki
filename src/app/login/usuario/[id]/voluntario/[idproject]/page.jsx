import { usePathname } from "next/navigation";


export default function () {
    const idProjeto = usePathname().split('/')[5]
    console.log(idProjeto)
};
