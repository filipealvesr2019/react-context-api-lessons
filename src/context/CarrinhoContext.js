"use Client";

const { createContext } = require("react");

const CarrinhoContext = createContext();

export const useCarrinho = () => useContext(CarrinhoContext);

export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);

    const AdicionarAoCarrinho = (produto, quantidade) => {
        const produtoExistente = carrinho.find(item => item.produtoId === produto._id);
        if(produtoExistente){
            produtoExistente.quantidade += quantidade;
        } else {
            
        }
    }

    
}