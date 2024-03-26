"use client"
import { useState } from "react";
export default function Dashboard(){
    const [nomeProjeto, setNomeProjeto] = useState();
    
    return(
        <div>
            Página inicial do usuário
            <form action="">
                <input type="text" />
                <input type="submit" value="" />
            </form>
            
        </div>
    )
}