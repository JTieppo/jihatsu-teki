"use client"
import { useState, useEffect } from "react";


export default function Filtro(viFiltro) {
    
    return (
        <div>
            <div className="m-10 absolute mx-auto w-full top-56">
                <div className="flex flex-col mx-auto mr-10 ml-10">
                    <div className="">
                        <input className="rounded-none rounded-t w-full h-12 border-b pl-12" type="text" name="" id="input-text" />
                        <img className="-mt-9 ml-6 mb-4" src="/assets/desktop/icon-location.svg" alt="" />
                    </div>
                    <div>
                        <div id="input-text" className="flex flex-col justify-between p-6 rounded-b-lg">
                            <div className="flex flex-row">
                                <input type="checkbox" id="checkbox-mobile" className="flex my-auto mr-2" />
                                <label htmlFor="meuCheckbox" className="">Full</label>
                                <p className="ml-1">time</p>
                                <p className="ml-1">only</p>
                            </div>
                            <button className="mt-2 rounded bg-[#00D286] h-10 w-full">search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}