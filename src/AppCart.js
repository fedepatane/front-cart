import Header from './components/Header';
import ProductsStore from './components/ProductsStore';
import Basket from './components/Basket';
import data from './data';
import { useState , useEffect } from 'react';
import axios from "axios";
import React, { Component } from 'react'


function AppCart(props)  {

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    const getApi = async () => {
        const url = "https://fakestoreapi.com/products";
        const resp = await fetch(url);
        const result = await resp.json();
        console.log(result);
        setProducts(result.slice(0, 7));
    }
    getApi();
  }, []);



  const function_onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const function_onDiscount = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const function_onRemoveProduct = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  };

//return ("<div>hola</div>");
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <ProductsStore products={products} onAdd={function_onAdd}></ProductsStore>
        <Basket
          cartItems={cartItems}
          onAdd={function_onAdd}
          onRemove={function_onDiscount}
          onRemoveProduct={function_onRemoveProduct}
        ></Basket>
      </div>
    </div>
  );
}

export default AppCart;
