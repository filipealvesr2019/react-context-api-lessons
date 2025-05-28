"use client";

const { createContext, useState } = require("react");

const CarrinhoContext = createContext();

export const useCarrinho = () => useContext(CarrinhoContext);

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);

    const AdicionarAoCarrinho = (produto, quantidade) => {
        const produtoExistente = carrinho.find(item => item.produtoId === produto._id);
        if(produtoExistente){
            produtoExistente.quantidade += quantidade;
            setCarrinho([...carrinho])
        } else {
            setCarrinho([...carrinho, {...produto, quantidade}])
        }
    }

    const removerDoCarrinho = (id) => {
        setCarrinho(carrinho.filter(item => item.produtoId !== id))
    }

    return (
        <CarrinhoContext.Provider value={{ carrinho, AdicionarAoCarrinho, removerDoCarrinho}}>
            {children}
        </CarrinhoContext.Provider>
    )
    
}