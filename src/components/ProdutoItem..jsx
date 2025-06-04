import { useCarrinho } from "@/context/CarrinhoContext"

export default function ProdutoItem({ produto }){
    const { AdicionarAoCarrinho } = useCarrinho();
    
    return (
        <div>
            <h3>{produto.nome}</h3>
            <p>R${produto.preco}</p>
            <button onClick={() => AdicionarAoCarrinho(produto, 1)}>Adicionar Ao Carrinho</button>
            
        </div>
    )
}