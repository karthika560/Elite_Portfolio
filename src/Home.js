
import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
  <div>
    <center>
    <h1 style={{justifyContent: "center",textAlign: "center"}}>Home Page</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
      
      <br /><br />
      <Link to="/product/shoes">
        <button>Shop Shoes</button>
      </Link>

      <br /><br />

      <Link to="/product/socks">
        <button>Shop Socks</button>
      </Link>
      </center>
    </div>
  );
}

export default Home;