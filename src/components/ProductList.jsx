import { useState } from "react";

export default function ProductList(){
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/produtos`)
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