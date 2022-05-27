import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import {
  GetAllProduct,
  GetNumberCart,
  DecreaseQuantity,
  IncreaseQuantity,
  DeleteCart,
  AddCart,
  UpdateCart,
} from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
function Order({ items }) {
  //   const [sumProduct, setSumProduct] = useState[{}];

  let ListCart = [];
  let TotalCart = 0;
  let navigate = useNavigate();

  Object.keys(items.Carts).forEach(function (item) {
    TotalCart += items.Carts[item].quantity * items.Carts[item].price;
    ListCart.push(items.Carts[item]);
    // setSumProduct(setSumProduct);
  });
  console.log("items",items)
  function TotalPrice(price, tonggia) {
    return Number(price * tonggia);
    // return Number(price * tonggia).toLocaleString("en-US");
  }
  const userStr = localStorage.getItem("user");
  const userId = JSON.parse(userStr);
  // console.log("This is customerId",userId.customerId);
  // console.log("this is totalCart",TotalCart)
  // console.log("this is Carts", ListCart);
  // console.log("this is length", ListCart.length);

  const [order, setOrder] = useState({
    customerId: userId.customerId,
    orderDate: "",
    shipDate: "",
    transactionStatusId: null,
    paid: null,
    paymentDate: null,
    note: "",
    totalOrder: TotalCart,
  });
  const {
    customerId,
    orderDate,
    shipDate,
    transactionStatusId,
    paid,
    paymentDate,
    note,
    totalOrder,
  } = order;
  const onInputChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    // e.preventDefault();
    console.log("Your order", order);
    await axios
      .post(`https://localhost:44380/api/Orders`, order)
      // contentType: "application/json"
      .catch((err) => {
        console.log("Err: ", err);
      });
    navigate.push("/");
  };
  console.log("Your order", order);

  let i = 0;
  for (i = 0; i < ListCart.length; i++) {
    // console.log(ListCart[i]);
    let orderDetail = {
      orderId: null,
      productId: ListCart[i].id,
      orderNumber: ListCart[i].quantity,
      discount: null,
      totalDetail: null,
    };
    console.log("Your orderDetail", i, orderDetail);
    const onSubmit1 = async (orderDetail) => {
      await axios
        .post(`https://localhost:44380/api/OrderDetails`, orderDetail)
        .catch((err) => {
          console.log("Err: ", err);
        });

      navigate.push("/");
    };
  }
  return (
    <div className="container">
      <Nav />
      <div className="main">
        <form className="Login-form" onSubmit={(e) => onSubmit(e)}>
          <h3 className="form-title">ORDER NOW</h3>
          <div className="Login-form-group">
            <label>OrderDate</label>
            <input
              className="Login-form-control"
              value={orderDate}
              type="date"
              name="orderDate"
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <label>ShipDate</label>
            <input
              className="Login-form-control"
              value={shipDate}
              type="date"
              name="shipDate"
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="Login-form-group">
            <label>Note</label>
            <input
              className="Login-form-control"
              value={note}
              type="text"
              name="note"
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <button className="Login-form-submit" type="submit">
              Order Now
            </button>
          </div>
          <hr />
        </form>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  //  console.log(state)
  return {
    items: state._todoProduct,
  };
};
export default connect(mapStateToProps, {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
})(Order);
