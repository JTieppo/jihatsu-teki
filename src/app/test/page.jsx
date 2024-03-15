"use client"
import { useState, useEffect } from "react"


export default function Test() {
const [response, setResponse] = useState([]);
    useEffect(() => {
        fetch('/api', {
            method: "GET",
        })
            .then(response => response.json())
            .then(response => setResponse(response))
    }, [])
    console.log(response)
    return (
        <div>
            
        </div>
    )
}