"use client"
import { useEffect, useState } from "react";
import ProdutoItem from "./ProdutoItem.";

export default function ProductList(){
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/produtos`)
        .then(response => response.json())
        .then(setProdutos)

    }, [])
    return (
        <div>
            <h2>Produtos</h2>
            {produtos.map((produto) => (
                <ProdutoItem key={produto._id}  produto={produto}/>
            ))}
        </div>
    )
}