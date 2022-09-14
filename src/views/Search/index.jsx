import Input from "../../shared/Input";
import styled from "styled-components";
import Button from "../../shared/Button";
import SearchResult from "../SearchResult";
import axios from "axios";
import { useState } from "react";
import {BsCart2} from "react-icons/bs"
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Search() {
    const [search, setSearch] = useState()
    const [searchResult, setSearchResult] = useState()
    function handleForm(event) {
        setSearch({ ...search, [event.target.name]: event.target.value });
        event.preventDefault();
      }
    function searchProducts(){
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/products?name=${search.search}`)
        promise.then((res) => {
            setSearchResult(res.data)
        })
    }
    return(
        <>
    <Container>
      <SearchContainer><Input
          name="Busca"
          type="text"
          placeholder="Buscar por produtos"
          value={search}
          onChange={handleForm}
          small = {true}
        ></Input>
        <Button type="submit" onClick={searchProducts} small={true}>
          <p>Buscar</p> 
        </Button></SearchContainer>
        
        <BsCart2 size={35}/>
    </Container>
      <SearchResult></SearchResult>
      </>
      )
    
}
//styled component that sticks to the left side of the screen and has a fixed width 
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 15px 10px 5px;
  background-color: gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  z-index: 10;
`;
const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;


`;

