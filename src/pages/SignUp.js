// import React from 'react';
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";
import { Link } from "react-router-dom";

const AddCustomers = () => {
  let navigate = useNavigate();
  const [customer, setCustomer] = useState({
    fullname: "",
    phone: "",
    address: "",
    birthday: "",
    avatar: null,
    email: "",
    active: null,
    createDate: null,
    roleId: null,
    password: "",
  });

  const {
    createDate,
    email,
    password,
    active,
    roleId,
    phone,
    address,
    avatar,
    birthday,
    fullname,
  } = customer;
  const onInputChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    // e.preventDefault();
    console.log(customer);
    await axios
      .post(`https://localhost:44380/api/Customers`, customer)
      // contentType: "application/json"
      .catch((err) => {
        console.log("Err: ", err);
      });

    navigate.push("/");
    // fetchCategories();
  };
  return (
    <div className=" row" style={{ paddingTop: "10px" }}>
      <form
        className="form col-md-4 offset-2 border"
        onSubmit={(e) => onSubmit(e)}
      >
        <h3 className="form-title">Sign  <span style={{color: 'red'}}>Up</span></h3>
        <div className="form-group">
          <label>Fullname</label>
          <input
            className="form-control"
            value={fullname}
            type="text"
            name="fullname"
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            className="form-control"
            value={address}
            type="text"
            name="address"
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <label>Phone</label>
            <input
              className="form-control"
              value={phone}
              type="text"
              name="phone"
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group col-md-6">
            <label>Birthday</label>
            <input
              className="form-control "
              value={birthday}
              type="date"
              name="birthday"
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            value={email}
            type="email"
            name="email"
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            value={password}
            type="text"
            name="password"
            onChange={(e) => onInputChange(e)}
          />
        </div>
        {/* <div className="Login-form-group">
                  <label>active</label>
                  <input className="form-control" value={active} type='text'  name="active" onChange={e => onInputChange(e)}/>
              </div>
              <div className="Login-form-group">
                  <label>createDate</label>
                  <input className="form-control" value={createDate} type='date'  name="createDate" onChange={e => onInputChange(e)}/>
              </div>
              <div className="Login-form-group">
                  <label>roleId</label>
                  <input className="form-control" value={roleId} type='text'  name="roleId" onChange={e => onInputChange(e)}/>
              </div>
              <div className="Login-form-group">
                  <label>avatar</label>
                  <input className="form-control"  type='file'  name="avatar" onChange={e => onInputChange(e)}/>
              </div> */}
        
        <div  className=" col-md-12 ">
          <Link style={{ color:"#3333"}} to="/signin">
            If you have any account, please sign in here!
          </Link>
        </div>
        <div  className="col-5 offset-4">
          <button style={{marginTop:"20px"}} className="btn btn-danger" type="submit">
            Sign Up
          </button>
        </div>
      </form>
      <div style={{ paddingLeft: "0px" }} className="col-md-4 ">
        <img
          style={{ width: "500px", height: "600px" }}
          src="https://img.freepik.com/free-psd/shoe-banner_221638-586.jpg?w=2000"
        ></img>
      </div>
    </div>
  );
};

export default AddCustomers;
