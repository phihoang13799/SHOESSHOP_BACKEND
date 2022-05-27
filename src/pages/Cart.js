import React, { useState, useEffect, Component } from "react";
import Nav from "../components/Nav";
import CartComponent from "../components/CartComponent";

export default function Cart() {
  const [renderArray, setRenderArray] = useState([]);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data1 = await fetch(`https://localhost:44380/api/Products`)
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      });
  };

  return (
    <div>
      <Nav />
      
      <CartComponent 
      renderArray = {renderArray}
      items = {items}
      setRenderArray ={setRenderArray}
      />
    </div>
  );
}
