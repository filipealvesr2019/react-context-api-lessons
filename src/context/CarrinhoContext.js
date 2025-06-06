"use client";

const { createContext, useState, useContext } = require("react");

const CarrinhoContext = createContext();

export const useCarrinho = () => useContext(CarrinhoContext);

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);

    const AdicionarAoCarrinho = async (produto, quantidade) => {
        const produtoExistente = carrinho.find(item => item.produtoId === produto._id);
        if(produtoExistente){
            produtoExistente.quantidade += quantidade;
            setCarrinho([...carrinho])
        } else {
            setCarrinho([...carrinho, {...produto, quantidade}])
        }

        try {
            await fetch(`http://localhost:3001/carrinho/adicionar/${produto._id}/${quantidade}`, {
                method: 'POST'
            })
        } catch (error){
            console.log(error)
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