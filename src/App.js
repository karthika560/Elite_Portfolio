import logo from './logo.svg';
import './App.css';
//import Spread from './Spread';
 //import  Header from './Header';
 //import ArrowFunction from './ArrowFunction';
 //import ObjectExample from './ObjectExample';
 //import Project from './Project';
 //import Task from './Task';
 //import Accordion from './Accordion';
 //import Modalbox from './ModalBox';
 //import Spread from './Spread';
 //import Test from './Test';
 //import Manager from './Manager';
 //import Managament from './Management'
 //import Counter from './Counter'
// import { BrowserRouter } from 'react-router-dom';
// import Home_Task from './Task/Home_Task.js';

// //import GetData from './GetData';
// //import ErrorHandling from './ErrorHandling'
// {/*import Login from './Login.js'
// import Product from './Product'
// import Home from './Home'
// import Counter from './Counter
// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';

// import adidas from "./adidas.jpeg";
// import puma from "./puma.jpeg";
// import nike from "./nike.jpeg";
// import cotton from "./cotton.jpeg";
// import linen from "./linen.jpeg";
// import velvet from "./velvet.jpeg";*/}



// function App() {
//      /*const productShoes = [{
//     name: "Adidas",
//     price: "3000",
//     strikePrice: "5000",
//     image: adidas
//   },
//   {
//     name: "Puma",
//     price: "2500",
//     strikePrice: "3500",
//     image: puma
//   },
//   {
//     name: "Nike",
//     price: "4000",
//     strikePrice: "6000",
//    image: nike
//   }]
//   const productSocks = [{
//     name: "Cotton SOCKS",
//     price: "3000",
//     strikePrice: "5000",
//    image: cotton
//   },
//   {
//     name: "LINEN",
//     price: "2500",
//     strikePrice: "3500",
//     image: linen

//   },
//   {
//     name: "VELVET",
//     price: "4000",
//     strikePrice: "6000",
//    image: velvet
//   }]*/
//   return (
//     <>
//     {/*<Managament/>*/}
//       {/*<Manager/>*/}
//      {/*<Header/> 
//   {/*<ArrowFunction/>*/}
//   {/*<ObjectExample/>*/}
//   {/*<Project/>*/}
//    {/*<Test/>*/}
//   {/*<Accordion/>*/}
//   {/*<Modalbox/>*/}
//   {/*<Spread/>*/}
//    {/*<Task/>*/}
//    {/*<ErrorHandling data={obj}/>*/}
//     {/*<Product productObj={productObj} />
//     <Product productObj={productSOCK} />*/}
//     {/*<Counter/>*/}
//     {/*<GetData/>*/}

//   {/*<BrowserRouter>*/}

//     {/*<Routes>*/}
      
//     <BrowserRouter>
//       <Home_Task />
//     </BrowserRouter>


//       {/*<Route path='/product/shoes' element={<Product productObj={productShoes}nextPath="/product/socks"
//       nextLabel="View Socks"/>}/>
//       <Route path='/product/socks' element={<Product productObj={productSocks}nextPath="/product/shoes"
//       nextLabel="View Shoes"/>}/>*/}
//       {/*<Route path='/login' element={<Login/>}/>
//       <Route path='/home' element={<Home/>}/>*/}
//     {/*</Routes>*/} 
   
//    {/* </BrowserRouter>*/}
//   </>
//   );
// }
// export default App;
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home_Task from './Task/Home_Task.js';

function App() {
  return (
    <BrowserRouter>
      <Home_Task />
    </BrowserRouter>
  );
}

export default App;

