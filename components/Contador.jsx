import Button from "./Button";
import { useState } from "react";

export default function Contador() {

    const [count, setCount] = useState(0);

    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh",
        fontSize: "50px"
    }

    const aumentar = () => setCount(count + 1)
    const reduzir = () => setCount(count - 1)

    return (
        <div style = {estilo}>
            <h2>{count}</h2>
            <div>
                <Button evento={aumentar} nome="Adicionar"/>
                <Button evento={reduzir} nome="Reduzir"/>
            </div>
        </div>
        
    )
}