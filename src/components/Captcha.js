// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

function Captcha() {
  const [user, setUser] = useState({
    username: "",
  });
  const characters = "abc123";
  function generateString(length) {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  const captcha = generateString(6); 
  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    user[name] = value;
    setUser(user);
  };
  const onSubmit = (e) => {
    var element = document.getElementById("succesBTN");
    var inputData = document.getElementById("inputType");
    element.style.cursor = "wait";
    element.innerHTML = "Checking...";
    inputData.disabled = true;
    element.disabled = true;
    var myFunctions = function () {
      if (captcha == user.username) {
        element.style.backgroundColor = "green";
        element.innerHTML = "Captcha Verified";
        element.disabled = true;
        element.style.cursor = "not-allowed";
        inputData.style.display = "none";
      } else {
        element.style.backgroundColor = "red";
        element.style.cursor = "not-allowed";
        element.innerHTML = "Not Matched";
        element.disabled = true;
        //  element.disabled = true;
        var myFunction = function () {
          element.style.backgroundColor = "#007bff";
          element.style.cursor = "pointer";
          element.innerHTML = "Verify Captcha";
          element.disabled = false;
          inputData.disabled = false;
          inputData.value = "sssss";
        };
        setTimeout(myFunction, 5000);
      }
    };
    setTimeout(myFunctions, 5000);
  };

  return (
    <div class="container">
      <div class="row mt-4">
        <div class="col-md-4"></div>
        <div class="col-md-8">
        <h4 id="captcha" style={{ float: "right" }}>
              {captcha}
            </h4>
          <div class="form-group row">
            <img src="" className="mt-3 mb-3" height="50" />
          </div>
          <div class="form-group row">
            
            <TextField
              type="text"
              id="inputType"
              className="form-control"
              placeholder="Enter Captcha"
              name="username"
              onChange={handleChange}
              autocomplete="off"
              style={{ width: "40%"}}
            />

            <button
              type="button"
              id="succesBTN"
              onClick={onSubmit}
              class="btn btn-primary ml-1"
              style={{padding: "5px 5px 5px 5px"}}
            >
              Verify Captcha
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Captcha;
