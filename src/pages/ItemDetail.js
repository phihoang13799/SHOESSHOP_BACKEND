import "../App.css";
import React, { useState, useEffect } from "react";
import { AiFillCrown } from "react-icons/ai";
import Cart from "./Cart";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { CardActions } from "@mui/material";
import ShopApp from "../reducers";
import {AddCart} from "../actions/index";
import {connect} from 'react-redux';
import './details.css'
function ItemDetail(props) {
  const pathname = window.location.pathname;
  const id = pathname.split("/", pathname.length);
  useEffect(() => {
    fetchItems();
    console.log(id);
  }, []);

  const [item, setItem] = useState({ name: "", icon: " " });

  const fetchItems = async () => {
    const data1 = await fetch(`https://localhost:44380/api/Products/${id[1]}`)
      .then((res) => res.json())
      .then((json) => {
        setItem(json);
      });
  };
  
  const addCart = () => {
    props.AddCart(item);
  };
  console.log(item);

  return (
    <div>
      <Nav />
      <div style={{textAlign:'center', color: "rgb(190, 37, 49, 1)"}}>
        <h1>CHOOSE YOUR PRODUCT</h1>
      </div>
      <div className="row">
      <div 
      className="col-md-5" 
      >
        <img
          src={item.thumb}
          alt="Loading"
          style={{
            width: "600px",
            height: "450px",
          }}
        ></img>
      </div>
      <div
        className="col-md-6 offset-1"
        style={{
          paddingRight: "50px",
          paddingTop: "0px",
        }}
      >
        <Link to="/">
        <button style={{marginBottom: "20px"}} className="btn btn-danger offset-8">
          Back to List Product
        </button>
        </Link>
        
        <h3 style={{color: "rgb(190, 37, 49, 1)", fontSize: "24px"}}>{item.productName}</h3>
        <button className="btn btn-danger" onClick={addCart}>
          Add To Cart
        </button>
        <p style={{paddingTop: "30px"}} className="info">Price: {item.price} VNĐ</p>
        <p className="info">Tittle: {item.title}</p>
        <p className="info">Total: {item.sumproduct}</p>
        <p className="info">Description: {item.description}</p>
        
      </div>
      
      </div>
    </div>
  );
}
const mapStateToProps = state =>{
  return {
       _products: state._todoProduct,
     };
}
function mapDispatchToProps(dispatch){
  return{
      AddCart:item=>dispatch(AddCart(item))
   
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemDetail)
