import React from "react";
import { Link } from "react-router-dom";
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

function CartComponent({
  items,
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
}) {
  let ListCart = [];
  let TotalCart = 0;
  Object.keys(items.Carts).forEach(function (item) {
    TotalCart += items.Carts[item].quantity * items.Carts[item].price;
    ListCart.push(items.Carts[item]);
  });
  function TotalPrice(price, tonggia) {
    return Number(price * tonggia).toLocaleString("en-US");
  }
  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table" style={{ width: "100%", float: "left" }}>
          <thead>
            <tr 
            // style={{ background: "rgb(190, 37, 49, 1)" }}
            >
              <th></th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody style={{ width: "100%" }}>
            {ListCart.map((item, key) => {
              return (
                <tr key={key}>
                  <th>
                    <button
                      className="badge badge-danger"
                      onClick={() => DeleteCart(key)}
                    >
                      X
                    </button>
                  </th>
                  <th>{item.name}</th>
                  <th>
                    <img
                      src={item.image}
                      style={{ width: "115px", height: "80px" }}
                    />
                  </th>
                  <th>{item.price.toLocaleString("en-US")} VNĐ</th>
                  <th>
                    <button
                      className="btn btn-primary"
                      style={{ margin: "5px" }}
                      onClick={() => DecreaseQuantity(key)}
                    >
                      -
                    </button>
                    <span className="btn btn-info">{item.quantity}</span>
                    <button
                      className="btn btn-primary"
                      style={{ margin: "5px" }}
                      onClick={() => IncreaseQuantity(key)}
                    >
                      +
                    </button>
                  </th>
                  <th>{TotalPrice(item.price, item.quantity)} VNĐ </th>
                </tr>
              );
            })}
            <tr 
            // style={{ background: "rgb(190, 37, 49, 1)" }}
            >
              <th colSpan="5">Total Carts</th>
              <th>{Number(TotalCart).toLocaleString("en-US")} VNĐ </th>
            </tr>
            <tr>
            <th colSpan="4"></th>
            <th>
            <Link to="/">
          <button
            style={{
               marginBottom: "5px",marginTop: "5px"
            }}
            className="btn btn-danger"
          >
            Back to List Product
          </button>
        </Link>
            </th>
              {/* <th colSpan="3"></th> */}
              <th>
                <Link to="/order">
                  <button
                    className="btn btn-danger"
                    style={{
                      width: "100px",
                     
                    }}
                  >
                    Order
                  </button>
                </Link>
              </th>
            </tr>
          </tbody>
        </table>
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
})(CartComponent);
