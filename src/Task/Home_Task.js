
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// /*import background from './background1.avif';*/
// import {Routes,Route} from 'react-router-dom';

// import Theme_Task from './Theme_Task.js'
// /*import Login_Task from './Login_Task.js';
// import About_Task from './About_Task.js';
// import Contact_Task from './Contact_Task.js';
// import Projects_Task from './Projects_Task.js';
// import Skills_Task from './Skills_Task.js';
// import Accordion_Task from './Accordion_Task.js';
// import Layout_Task from './Layout_Task.js';*/
// const Home_Task = () => {
//    {/*const [data, setData] = useState(null);
//    const [error, setError] = useState('');*/}

// /*useEffect(() => {
//   axios.get('https://dummyjson.com/c/5d75-a9a0-4c76-b7b7')
//     .then((res) => setData(res.data))
//       .catch(() => setError('Unable to load Home information.'));
//   }, []);
// */
// return (
//   <Routes>
//     <Route path="/Monday" element={<Theme_Task/>}/>
//     </Routes>
// )
// };
//   {/*<Route path="/" element={<Login_Task />} />
//    <Route path="/login" element={<Login_Task />} />
//     <Route element={<Layout_Task />}>
//      <Route
//    path="/home"
//     element={
//       <section className="home-hero" style={{backgroundImage: `url(${background})`}}>
//        {error ? (
//           <p>{error}</p>
//      ) : !data ? (
//      <h2>Loading...</h2>
//     ) : (
//         <>
//      <p>{data.eyebrow}</p>
//      <h1>
//      Hi, I'm <span>{data.name}</span>
//          </h1>
//        <h2>{data.role}</h2>
//      <p>{data.intro}</p>
//                 </>
//               )}
//             </section>
//           }
//   />
    
//   <Route path="/about" element={<About_Task />} />
//    <Route path="/projects" element={<Projects_Task />} />
//    <Route path="/skills" element={<Skills_Task />} />
//    <Route path="/accordion" element={<Accordion_Task />} />
//    <Route path="/contact" element={<Contact_Task />} />
//    </Route>

//       <Route path="*" element={<Navigate to="/" replace />} />*/}
  


// export default Home_Task;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Theme_Task from './Theme_Task.js';
const Home_Task = () => {
  return (
    <Routes>
     
      <Route path="/" element={<Theme_Task />} />
    </Routes>
  );
};

export default Home_Task;

