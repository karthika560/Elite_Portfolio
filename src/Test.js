import React,{useState } from "react";
import "./Test.css";
function Test(){
  // Object State
  const [product, setProduct] = useState({
    name: "",
    price: ""
  });
  // Array State
  const [products, setProducts] = useState([""]);
  // Theme
  const [dark, setDark] = useState(false);
  // Accordion
  const [open, setOpen] = useState(false);
  // Modal
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  // Form handling
  function handleChange(e) {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  }
  // Add product
  function addProduct(e) {
    e.preventDefault();
    if (product.name === "" || product.price === "")
       {
      alert("Please enter all details");
      return;
    }
    const newProduct = {
      id: Date.now(),
      name: product.name,
      price: Number(product.price),
      quantity: 1
    };

    setProducts([...products, newProduct]);
    setProduct({
      name: "",
      price: ""
    });
  }

  // Increase quantity
  function increase(id) {
    setProducts(
      products.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  // Decrease quantity
  function decrease(id) {
    setProducts(
      products.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }
  // Open modal
  function openModal(item) {
    setSelectedProduct(item);
    setShowModal(true);
  }
  // Remove product
  function removeProduct() {
    setProducts(
      products.filter(
        (item) => item.id !== selectedProduct.id
      )
    );
    setShowModal(false);
  }
  // Filter below 1000
  const below1000 = products.filter(
    (item) => item.price < 1000
  );
  return (
    <div className={dark ? "test dark" : "test"}>
      <h2>Shopping Cart</h2>
      {/* Theme Button */}
      <button
        className="theme-btn"
        onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
      {/* Form */}
      <div className="form-box">
        <h2>Add Product</h2>

        <form onSubmit={addProduct}>
          <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} />
          <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} />
          <button type="submit">Add Product</button>
        </form>
      </div>

      {/* Products */}
      <h2>All Products</h2>

      <div className="products">
        {products.length === 0 ? (
          <p>No products added.</p>
        ) : (
          products.map((item) => (
            <div className="product-card" key={item.id}>
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <div className="quantity">
                <button onClick={() => decrease(item.id)}>− </button>
                <span>{item.quantity}</span>
                <button onClick={() => increase(item.id)}>+</button>
              </div>
              <button
                className="remove-btn" onClick={() => openModal(item)}>Remove </button>
                </div>
          ))
        )}
      </div>

      {/* Filter */}
      <div className="filter-box">
        <h2>Products Below ₹1000</h2>
        {below1000.length === 0 ? (
          <p>No products below ₹1000.</p>
        ) : (
          below1000.map((item) => (
            <p key={item.id}>
              {item.name} - ₹{item.price}
            </p>
          ))
        )}
      </div>

      {/* Accordion */}
      <div className="accordion">
        <h2 onClick={() => setOpen(!open)}>
          Shopping Rules {open ? "👆" : "👇"}
        </h2>
        {open && (
          <div className="rules">
            <p>1. Check the product before purchasing.</p>
            <p>2. Check the price before adding.</p>
            <p>3. Products depend on availability.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-bg">
          <div className="modal">
            <h2>Confirm Remove</h2>
            <p>Do you want to remove{" "}
              <b>{selectedProduct?.name}</b>?
            </p>

            <button className="confirm-btn" onClick={removeProduct}> yes,Remove</button>
            <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Test;

{/*import{React,useState} from 'react';
import './Test.css';
const Test=()=>{
const [product,setProduct]=useState(null)
const accor=[
   { id: 1,name:'Notebook',price: 450,},
   { id: 2, name: 'vegetables', price:100,}
];
function acc(id)//we passing parameter id for which id we are working
    {    
       console.log(id)
       setProduct(product===id?null:id)
    }


const[inr,setInr]=useState(0);
 function increment(){
    setInr(inr+1);
 }

 
//theme changer
const[theme,setTheme]=useState(false)
function Test() {
    setTheme(!theme);
}
  
  //theme changer
  return (
    <>
    <center>
     <h2>{inr}</h2>
     <button onClick={inr}>Increment</button>
      <button onClick={() => setInr(inr - 1)}> Decrement</button>
      </center>
     <div style={{backgroundColor:theme?"black":"white",height:"100vh"}}>{theme}<br/>
        <center><span  onClick={Test}>{theme?"☀️":"🌙"}</span></center>
    </div>
    
    </>
  )
}

export default Test*/}