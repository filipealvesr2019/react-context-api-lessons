import { useCarrinho } from "@/context/CarrinhoContext"

export default function Carrinho(){
    const { carrinho, removerDoCarrinho } = useCarrinho();
    return (
        <div>
            <h2>Carrinho</h2>
            <ul>
                {carrinho.map(item => (
                    <li key={item.produtoId}>
                       {item.nome} - {item.quantidade} x R${item.preco}
                       <button onClick={() => removerDoCarrinho(item.produtoId)}>Remover</button>
                    </li>
                ))}
            </ul>
            <h3>Total: R${carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0).toFixed(2)}</h3>
        </div>
    )
}