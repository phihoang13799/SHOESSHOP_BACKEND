import React from 'react';
import {Link} from 'react-router-dom'
import './Product.css'
const styleh4 = {
  color: "black",
  padding: "10px 10px 10px 10px",
  margin: "auto",
  display: "block-inline",
  textDecoration: "none",
};

const img = {

  padding: "20px 20px 15px 15px",
  width: "400px",
  height: "300px",
  
};
const stylediv = {
  float: "left",
  padding: "5px",
};

const Products = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="" >
        <table 
        // style={{border: "1px solid #ddd",}}
        >
        <tr>
          <div 
          // style={{ width: "200%" }}
          >
            {posts.map((item, index) => (
              <div 
              style={stylediv}
              >
                <Link 
                // style={styleh4}
                 to={`/${item.productId}`}>
                  <img src={item.thumb} alt="Loading" 
                  className="hover zoom"
                  style={img}
                  ></img>
                </Link>
                <p key={item.productId} 
                // style={styleh4}
                >
                  {item.productName}
                </p>
                <p>Price: {item.price.toLocaleString("en-US")} VNĐ</p>
              </div>
            ))}
          </div>
        </tr>
      </table>
    </div>
    
  );
};

export default Products;
