"use Client";

const { createContext } = require("react");

const CarrinhoContext = createContext();

export const useCarrinho = () => useContext(CarrinhoContext);

export const CarrinhoProvider = ({ children }) => {
    const produtoExistente = carrinho.find(item => item.produtoId === produtoExistente._id);

    
}