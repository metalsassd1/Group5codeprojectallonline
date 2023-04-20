import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Head from "./Chachaphong/header/Head"
import Header from "./Chachaphong/header/Header"
import LoginAdmin from "./Metha/loginAdmin";
import Pages from "./Chachaphong/pages/Pages"
import Data from "./Chachaphong/Data"
import Cart from "./Chachaphong/Cart/Cart"
import Footer from "./Chachaphong/footer/Footer"
import Register from "./Metha/register"
import MainTypeproduct from "./Metha/fashionFiles";
import Login from "./Admin_component/Login";
import UserUpdate from "./Admin_component/UserUpdate";
import UserCreate from "./Admin_component/UserCreate";
import UsersProducts from "./Admin_component/UsersProducts";
import ProductsCreate from "./Admin_component/ProductsCreate";
import ProductsUpdate from "./Admin_component/ProductsUpdate";
import Users from './Admin_component/Users';
import AllProduct from "./ALLproduct/AllProduct"
import PaymentEach from "./installmentPayment/MethaTOP/From"
import Payment from "./Metha/payment"
import ProductType from "./Metha/eachPro";
import SearchResults from "./Chachaphong/MainPage/searchResult"
import PaymentForm from "./installmentPayment/MethaTOP/PaymentForm"


//////Metha
function App() {


  return (
    <>
    <Head />
      <Router>
        {/* <Header CartItem={CartItem} /> */}
        <Switch>
        <Route path='/paya'>
            <PaymentEach/>
          </Route>
          <Route path='/pays'>
            <PaymentForm/>
          </Route>
        <Route path='/Allpro' exact>
            <AllProduct/>
          </Route>
          <Route path='/login' >
            <Login/>
          </Route>
          <Route path='/' exact>
            <Pages />
          </Route>
          <Route path='/register' >
            <Register productType="mom_and_kids"/>
          </Route>
          <Route path='/admin'>
            <Users/>
          </Route>
          <Route path="/results" >
              <SearchResults/>
            </Route>
          <Route path="/mainType/IT_and_computer" >
            <MainTypeproduct productType="IT_and_computer"/>
          </Route>
          <Route path="/mainType/pet">
            <MainTypeproduct productType="pet"/>
          </Route>
          <Route path="/mainType/beauty">
            <MainTypeproduct productType="beauty"/>
          </Route>
          <Route path="/mainType/electronic" >
            <MainTypeproduct productType="electronic"/>
          </Route>
          <Route path="/mainType/mom_and_kids" >
            <MainTypeproduct productType="mom_and_kids"/>
          </Route>
          <Route path="/mainType/HnG" >
            <MainTypeproduct productType="HnG"/>
          </Route>
          <Route path="/mainType/fashionW" >
            <MainTypeproduct productType="fashionW" />
          </Route>
          <Route path="/mainType/fashionM" >
            <MainTypeproduct productType="fashionM"/>
          </Route>
          <Route path="/mainType/book_and_office">
            <MainTypeproduct productType="book_and_office"/>
          </Route>
          <Route path="/mainType/SME_product" >
            <MainTypeproduct productType="SME_product"/>
          </Route>
          <Route path="/mainType/healthy" >
            <MainTypeproduct productType="healthy"/>
          </Route>
          <Route path="/login!" >
            <LoginAdmin/>
          </Route>
          <Route path="/Products" >
              <UsersProducts/>
            </Route>
            <Route path="/productsU/:id" >
               <ProductsUpdate/>
            </Route>
            <Route path="/productsC" >
              <ProductsCreate/>
            </Route>
            <Route path="/update/:id" >
              <UserUpdate/>
            </Route>
            <Route path="/create" >
              <UserCreate/>
            </Route>
            <Route path="/produc/:id" >
              <ProductType />
            </Route>
          <Route path='/cart' exact>
            <Cart  />
          </Route>
          <Route path="/payments" >
            <Payment/>
          </Route>
        </Switch>
      </Router>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <Footer />
    </>
  )
}

export default App