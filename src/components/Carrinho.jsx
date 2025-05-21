import { useCarrinho } from "@/context/CarrinhoContext"

export default function Carrinho(){
    const { carrinho, removerDoCarrinho } = useCarrinho();
    return (
        <div>
            <h2>Carrinho</h2>
            <ul>
                {carrinho.map(item => (
                    <li>
                        
                    </li>
                ))}
            </ul>
        </div>
    )
}