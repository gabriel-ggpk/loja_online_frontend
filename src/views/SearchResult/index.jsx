import styled from "styled-components";



export default function SearchResult({searchResult}) {
    searchResult = searchResult || [
        {
            name: "Bompreço",
            products: [
        {"url": "https://www.bompreco.com.br/feijao-de-corda-tipo-1-kicaldo-pacote-1kg-7896116901347/p", "name": "Feij\u00e3o de Corda Tipo 1 Kicaldo Pacote 1kg", "price": "R$\u00a07,99"},
        {"url": "https://www.bompreco.com.br/feijao-carioca-tipo-1-kicaldo-1kg-7896116900029/p", "name": "Feij\u00e3o Carioca Kicaldo Pacote 1Kg", "price": "R$\u00a09,29"},
        {"url": "https://www.bompreco.com.br/feijao-carioca-tipo-1-turquesa-1kg-7898272919082/p", "name": "Feij\u00e3o Carioca Turquesa 1kg", "price": "R$\u00a08,99"},
        {"url": "https://www.bompreco.com.br/feijao-preto-tipo-1-camil-1kg-7896006751113/p", "name": "Feij\u00e3o Preto Camil Pacote 1kg", "price": "R$\u00a08,59"},
        {"url": "https://www.bompreco.com.br/feijao-preto-tipo-1-turquesa-1kg-7898272919129/p", "name": "Feij\u00e3o Preto Turquesa 1kg", "price": "R$\u00a08,19"},
        {"url": "https://www.bompreco.com.br/feijao-preto-tipo-1-turquesa-1kg-7898272919129/p", "name": "Feij\u00e3o Preto Turquesa 1kg", "price": "R$\u00a08,19"},
        {"url": "https://www.bompreco.com.br/feijao-preto-tipo-1-turquesa-1kg-7898272919129/p", "name": "Feij\u00e3o Preto Turquesa 1kg", "price": "R$\u00a08,19"},
       ]},
        {
            name: "Extra",
            products: [
        {"url": "https://www.bompreco.com.br/feijao-de-corda-tipo-1-kicaldo-pacote-1kg-7896116901347/p", "name": "Feij\u00e3o de Corda Tipo 1 Kicaldo Pacote 1kg", "price": "R$\u00a07,99"},
        {"url": "https://www.bompreco.com.br/feijao-carioca-tipo-1-kicaldo-1kg-7896116900029/p", "name": "Feij\u00e3o Carioca Kicaldo Pacote 1Kg", "price": "R$\u00a09,29"},
        {"url": "https://www.bompreco.com.br/feijao-carioca-tipo-1-turquesa-1kg-7898272919082/p", "name": "Feij\u00e3o Carioca Turquesa 1kg", "price": "R$\u00a08,99"},
        {"url": "https://www.bompreco.com.br/feijao-preto-tipo-1-camil-1kg-7896006751113/p", "name": "Feij\u00e3o Preto Camil Pacote 1kg", "price": "R$\u00a08,59"},
        {"url": "https://www.bompreco.com.br/feijao-preto-tipo-1-turquesa-1kg-7898272919129/p", "name": "Feij\u00e3o Preto Turquesa 1kg", "price": "R$\u00a08,19"},   ]},
        {
            name: "Pão de Açúcar",
            products: [
        {"url": "https://www.bompreco.com.br/feijao-de-corda-tipo-1-kicaldo-pacote-1kg-7896116901347/p", "name": "Feij\u00e3o de Corda Tipo 1 Kicaldo Pacote 1kg", "price": "R$\u00a07,99"},
        {"url": "https://www.bompreco.com.br/feijao-carioca-tipo-1-kicaldo-1kg-7896116900029/p", "name": "Feij\u00e3o Carioca Kicaldo Pacote 1Kg", "price": "R$\u00a09,29"},
        {"url": "https://www.bompreco.com.br/feijao-carioca-tipo-1-turquesa-1kg-7898272919082/p", "name": "Feij\u00e3o Carioca Turquesa 1kg", "price": "R$\u00a08,99"},
        {"url": "https://www.bompreco.com.br/feijao-preto-tipo-1-camil-1kg-7896006751113/p", "name": "Feij\u00e3o Preto Camil Pacote 1kg", "price": "R$\u00a08,59"},
        {"url": "https://www.bompreco.com.br/feijao-preto-tipo-1-turquesa-1kg-7898272919129/p", "name": "Feij\u00e3o Preto Turquesa 1kg", "price": "R$\u00a08,19"},   ]}]
    return (
        <Container>
            {searchResult.map((market) => {
                return (
                    <ListContainer>
                        <h1>{market.name}</h1>
                        {market.products.map((product) => {
                            return (
                            <a href={product.url} target="_blank" rel="noreferrer" style={{width:100+"%"}}><ProductContainer>
                                {/*<img src={product.image} />*/}
                                <p className="name">{product.name}</p>
                                <p className="price">{product.price}</p>
                            </ProductContainer></a>
                            )
                        })}
        </ListContainer>
                )})}
        
        </Container>
        
    )
}

//styled component that is a list that holds the search results
const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;
    height: 100%;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
`;
const ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: gray;
    padding: 5px 15px 5px 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid darkgrey;
    color: #ff4791;
    &:hover{
        background-color: lightgray;
    }
    .name{
        color: black;
        text-decoration: none;
    }
`;
const Container = styled.div`
    position: relative;
    top: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    `