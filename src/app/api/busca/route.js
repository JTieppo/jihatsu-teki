import { NextResponse } from "next/server";
import Fuse from "fuse.js";
import { data } from "@/app/data";

export const POST = async (req) => {
    const searchPattern = await req.json();

    if(searchPattern.fullTime){
        var jsonFile = data.filter(dados => dados.contract === "Full Time");
        
    } else {
        var jsonFile = data.map(dados => dados)
    }
    const fuseOptions = {
        keys: [
            "location",
            "company",
            "position"
        ]
    };


    if(searchPattern.buscaLocal == ''){
        if(searchPattern.buscaTipo == ''){
            var ids = jsonFile.map(item => item.id);
        }else{
            const fuse = new Fuse(jsonFile, fuseOptions);
    
            var buffer = fuse.search(searchPattern.buscaTipo);
            var teste = buffer.map(item => item.item);

            var ids = teste.map(item => item.id);
        }
    } else {
        if(searchPattern.buscaTipo == ''){
            const fuse = new Fuse(jsonFile, fuseOptions);
    
            var buffer = fuse.search(searchPattern.buscaLocal);
            var teste = buffer.map(item => item.item);

            var ids = teste.map(item => item.id);
        
        }else {
            const fuse = new Fuse(jsonFile, fuseOptions);
    
            var buffer = fuse.search(searchPattern.buscaLocal);
            var teste = buffer.map(item => item.item);
            
            const fusedois = new Fuse(jsonFile, fuseOptions);

            var bufferdois = fusedois.search(searchPattern.buscaTipo)
            var testedois = bufferdois.map(item => item.item)
        
            var ids = testedois.map(item => item.id);
        }
    }
    
    
    return NextResponse.json({ids});
}