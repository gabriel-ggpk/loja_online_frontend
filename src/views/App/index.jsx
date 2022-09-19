//react imports
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from '../../shared/globalStyles';
import LogIn from "../Login"
import Register from "../SignUp"
import Search from "../Search"
import Cart from "../Cart"

export default function App(){

    return (
        <>
        <GlobalStyle/>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />}></Route>
          <Route path="/sign-up/" element={<Register />}></Route>
          <Route path="/search/" element={<Search />}></Route>
          <Route path="/cart/" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
        </>
        
    )
}
