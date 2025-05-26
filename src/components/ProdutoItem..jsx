import { useCarrinho } from "@/context/CarrinhoContext"

export default function ProdutoItem({ produto }){
    const { adicionarAoCarrinho } = useCarrinho();
    return (
        <div>
            <h3>{produto.nome}</h3>
            <p>R${produto.preco}</p>
            <button onClick={() => adicionarAoCarrinho(produto, 1)}>Adicionar Ao Carrinho</button>
            
        </div>
    )
}