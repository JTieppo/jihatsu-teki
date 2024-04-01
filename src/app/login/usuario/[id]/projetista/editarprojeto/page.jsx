"use client"
import { useEffect } from "react"


export default function EditarProjeto(){
    useEffect(() => {
        fetch('/api/meusprojetos',{
            method: "POST",
            body: JSON.stringify({idUser: idUser})
        })
    },[])
    
    return(
        <div>
            editar projeto
        </div>
    )
}