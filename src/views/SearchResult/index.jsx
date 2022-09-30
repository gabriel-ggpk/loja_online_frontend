import styled from "styled-components";



export default function SearchResult({searchResult}) {
    
    return (
        <Container>
            {searchResult ? searchResult.map((market) => {
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
                )}): <p>Nenhum resultado encontrado</p>}
            
        
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