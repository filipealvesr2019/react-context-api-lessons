"use client"
import { useEffect, useState } from "react";
import ProdutoItem from "./ProdutoItem.";

export default function ProductList(){
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/produtos`)
        .then(response => {
            if(!response.ok){
                throw new Error("Erro ao buscar produtos")
            }
            return response.json()
        })
        .then(setProdutos)
        .catch(error => console.log('Error ao buscar produtos', error))

    }, [])
    console.log(produtos)
    return (
        <div>
            <h2>Produtos</h2>
            {produtos.map((produto) => (
                <ProdutoItem key={produto._id}  produto={produto}/>
            ))}
        </div>
    )
}