import "../App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import ReactTable from "react-table";
import Contact from "../pages/Contact";
import Footer from "./Footer";
import Nav from "./Nav";
import SlideImage from "../components/SlideImage";
import DataGrid from "@material-ui/data-grid";
import ListProduct from "./ListProduct";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

const styleh4 = {
  color: "black",
  padding: "10px 10px 10px 10px",
  margin: "auto",
  display: "block-inline",
  textDecoration: "none",
};

const img = {
  padding: "20px 20px 15px 15px",
  width: "500px",
  height: "300px",
};
const stylediv = {
  float: "left",
  padding: "30px 30px 30px 30px",
};
const styleimg = {
  width: "100%",
  margin: "25px 0px",
};

function Shop() {
  const [items, setItems] = useState([]);
  const [renderItems, setRenderItems] = useState([]);
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
  console.log(items);
  console.log("renderitem", renderItems);
  const [value, setValue] = React.useState(null);
  const top100Films = items.map((item) => ({
    name: item.productName,
    id: item.productId,
    img: item.thumb,
  }));
  const filter = createFilterOptions();
  return (
    <div class="shop">
      <Nav />
      <SlideImage />
      <ListProduct />
      <div>
        <img
          src="https://glab.vn/storage/uploads/advert/5ee88f140efd4.jpg"
          style={styleimg}
        ></img>
      </div>
      <div style={{ height: "500px", textAlign: "center" }}>
        <h1>
          <i>News</i>{" "}
        </h1>
        <br></br>
        <div
          style={{
            width: "33.33%",
            float: "left",
            padding: "20px 100px 50px 80px",
          }}
        >
          <img
            src="https://file.hstatic.net/200000289033/article/14671241e7642a3a7375_79b7bcc877b34755b84556541e71e458_grande.jpg"
            style={{ width: "100%" }}
          ></img>
          <h3>CƠN NÓNG GIẬN CỦA MỘT CÔ GÁI</h3>
          Trong cơn nóng giận, Cô gái thẳng tay lấy kéo cắt đôi giày Jordan 1
          Travis Fragment của bạn trai ✂️Cô gái Hàn gây chú ý khi đăng bài
          cầu...
        </div>
        <div
          style={{
            width: "33.33%",
            float: "left",
            padding: "20px 100px 20px 20px",
          }}
        >
          <img
            src="https://file.hstatic.net/200000289033/article/7f770fc1fce431ba68f5_8b066e8e2772426caf3b654725d2933a_grande.jpg"
            style={{ width: "100%" }}
          ></img>
          <h3>Tiffany & Co x Supreme</h3>
          Tiffany & Co x SupremeMới đây Supreme đã khiến các fan của thời trang
          phải bất ngờ vì màn hợp tác với hãng trang sức đến từ cùng thành
          phố...
        </div>
        <div
          style={{
            width: "33.33%",
            float: "left",
            padding: "20px 100px 20px 20px",
          }}
        >
          <img
            src="https://file.hstatic.net/200000289033/article/805d972e0ef1c7af9ee0_6fb920a15de042be82d80d036450aaae_grande.jpg"
            style={{ width: "100%" }}
          ></img>
          <h3>Jordan 1 Low Bred Toe & Green Toe</h3>
          𝗝𝗼𝗿𝗱𝗮𝗻 𝟭 𝗟𝗼𝘄 𝗕𝗿𝗲𝗱 𝗧𝗼𝗲 & 𝗚𝗿𝗲𝗲𝗻 𝗧𝗼𝗲 Trong năm 2021 này Nike không còn
          cho ra mắt quá nhiều phối màu Jordan 1 Low thay vào đó là sự xuất...
        </div>
      </div>
      <div style={{ width: "100%", float: "left", paddingLeft: "45px" }}>
        <h1>
          <i>FeedBacks</i>{" "}
        </h1>
        <div
          style={{
            width: "16.67%",
            float: "left",
            padding: "20px 5px 20px 20px",
          }}
        >
          <img
            src="https://theme.hstatic.net/200000289033/1000684389/14/gallery_item_1.jpg?v=131"
            style={{ width: "100%" }}
          ></img>
        </div>
        <div
          style={{
            width: "16%",
            float: "left",
            padding: "20px 5px 20px 20px",
          }}
        >
          <img
            src="https://theme.hstatic.net/200000289033/1000684389/14/gallery_item_5.jpg?v=131"
            style={{ width: "100%" }}
          ></img>
        </div>
        <div
          style={{
            width: "16%",
            float: "left",
            padding: "20px 5px 20px 20px",
          }}
        >
          <img
            src="https://theme.hstatic.net/200000289033/1000684389/14/gallery_item_3.jpg?v=131"
            style={{ width: "100%" }}
          ></img>
        </div>
        <div
          style={{
            width: "16%",
            float: "left",
            padding: "20px 5px 20px 20px",
          }}
        >
          <img
            src="https://theme.hstatic.net/200000289033/1000684389/14/gallery_item_6.jpg?v=131"
            style={{ width: "100%" }}
          ></img>
        </div>
        <div
          style={{
            width: "16%",
            float: "left",
            padding: "20px 5px 20px 20px",
          }}
        >
          <img
            src="https://theme.hstatic.net/200000289033/1000684389/14/gallery_item_4.jpg?v=131"
            style={{ width: "100%" }}
          ></img>
        </div>
        <div
          style={{
            width: "16%",
            float: "left",
            padding: "20px 5px 20px 20px",
          }}
        >
          <img
            src="https://theme.hstatic.net/200000289033/1000684389/14/gallery_item_2.jpg?v=131"
            style={{ width: "100%" }}
          ></img>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
