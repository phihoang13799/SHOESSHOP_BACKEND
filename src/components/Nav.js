import "../App.css";
import React from "react";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SvgIcon from "@mui/material/SvgIcon";
import CallIcon from "@mui/icons-material/Call";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import InfoIcon from "@mui/icons-material/Info";
import { Search } from "@mui/icons-material/Search";
import SearchIcon from "@mui/icons-material/Search";
import SearchIconWrapper from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import StyledInputBase from "@mui/icons-material/Style";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { useState, useEffect, useHistory } from "react";
import { createSvgIcon } from "@mui/material/utils";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import { removeUserSession } from "../utils/Common";

function Nav(props) {
  const styleh4 = {
    padding: "0px 20px 0px 20px",
    margin: "auto",
    display: "block-inline",
    textDecoration: "none",
  };
  console.log(props.numberCart);
  const [images, setImages] = useState({});
  const [item, setItem] = useState({ name: "", icon: " " });
  const [items, setItems] = useState([]);
  // const history = useHistory();
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

  const top100Films = items.map((item) => ({
    name: item.productName,
    id: item.productId,
    img: item.thumb,
  }));

  // console.log(top100Films);
  const filter = createFilterOptions();
  const [value, setValue] = React.useState(null);
  const HomeIcon = createSvgIcon(
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
    "Home"
  );
  const navStyle = {
    color: "black",
  };
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    color: "black",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));
  console.log(localStorage.getItem("token"));
  const showUser = localStorage.getItem("user");
  const showUser1 = JSON.parse(showUser);
  const Logout = () => {
    removeUserSession();
  };
  return (
    <nav
      className="navbar-dark bg-dark"
      style={{ height: "50px", paddingTop: "20px" }}
    >
      <div className="row col-md-8  ">
        <nav
          class="navbar navbar-expand-lg navbar-dark bg-dark"
          style={{ height: "50px" }}
        >
          <a class="navbar-brand" href="#"></a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            style={{ fontSize: "20px" }}
            class="collapse navbar-collapse "
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav ">
              <a class="nav-item nav-link " href="/">
                HOME <span class="sr-only">(current)</span>
              </a>
              <a class="nav-item nav-link" href="/about">
                ABOUT
              </a>
              <a class="nav-item nav-link" href="/contact">
                CONTACT
              </a>
            </div>
          </div>
        </nav>
        <span
          className=""
          style={{ marginTop: "20px", paddingRight: "10px", color: "white" }}
        >
          <i>What are you looking for?</i>
        </span>
        <Autocomplete
          style={{ marginTop: "10px" }}
          value={value}
          size="small"
          onChange={(event, newValue) => {
            if (typeof newValue === "string") {
              setValue({
                name: newValue,
              });
            } else if (newValue && newValue.inputValue) {
              setValue({
                name: newValue.inputValue,
              });
            } else {
              setValue(newValue);
            }
          }}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);
            const { inputValue } = params;
            const isExisting = options.some(
              (option) => inputValue === option.name
            );
            if (inputValue !== "" && !isExisting) {
              filtered.push({
                inputValue,
                name: `Add "${inputValue}"`,
              });
            }

            return filtered;
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          id="free-solo-with-text-demo"
          options={top100Films}
          getOptionLabel={(option) => {
            if (typeof option === "string") {
              return option;
            }
            if (option.inputValue) {
              return option.inputValue;
            }
            return option.name;
          }}
          renderOption={(props, option) => (
            <Link {...props} to={`/${option.id}`}>
              {option.name}
            </Link>
          )}
          sx={{ width: 280, height: "30px", backgroundColor: "white" }}
          freeSolo
          renderInput={(params) => (
            <TextField {...params} label="Search Product" />
          )}
        />
      </div>
      <div 
      // style={{marginLeft:"20px"}}
       className="col-md-2  offset-3">
        <Link to="/cart">
          <IconButton style={{ marginBottom: "15px", color: "#fff" }}>
            <AddShoppingCartIcon style={{ color: "#fff" }} fontSize="large" />
            <h6 style={{ color: "#fff" }}>({props.numberCart})</h6>
          </IconButton>
        </Link>
        {/* <div className="dropdown"> */}
        <IconButton
          style={{marginBottom: "15px"}}
          className=" dropdown"
          type="button"
          id="dropdownMenu2"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {localStorage.getItem("token") !== null ? (
            <Avatar fontSize="large" alt="Loading" src={showUser1.avatar} option="abc" />
          ) : (
            <Avatar
              style={{ color: "#fff" }}
              alt="Loading"
              src=""
              option="abc"
            />
          )}
        </IconButton>
        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button className="dropdown-item" type="button">
            View profiles
          </button>
          <Link to="/signin">
            <button onClick={Logout} className="dropdown-item" type="button">
              Logout
            </button>
          </Link>
        </div>
        {/* </div> */}
        {/* <Link to="/signin" >
          <IconButton
            aria-label="add to shopping cart"
            onClick={Logout}
          >
            {localStorage.getItem("token") !== null ? (
              <Avatar alt="Loading" src={showUser1.avatar} option="abc" />
            ) : (
            <Avatar
              style={{ color: "#fff" }}
              alt="Loading"
              src=""
              option="abc"
            />
            )}
          </IconButton>
        </Link> */}
      </div>
    </nav>
  );
}
const mapStateToProps = (state) => {
  return {
    numberCart: state._todoProduct.numberCart,
  };
};
export default connect(mapStateToProps, null)(Nav);
