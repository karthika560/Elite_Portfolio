import React, { useState } from 'react';
const Theme_Task = () => {
  const [Dark, setDark] = useState(false);
const [text, setText] = useState(''); 
  const [num,setNum]=useState(0);
  return (
<center>
<div> <h2>Theme changer</h2></div>
<div style={{ backgroundColor: Dark ?"black":"white", color: Dark ?"white" :"black",height:"100vh",padding: "20px" }}>
<button onClick={()=>setDark(!Dark)}>{Dark? "☀️ Light Mode" : "🌙 Dark Mode"}</button>

<div> <h2>Live Character Counting</h2></div>
<div style={{marginTop:"50px"}}>
  <textarea placeholder="enter here" value={text}onChange={(e)=>setText(e.target.value)} />
<p>Character Count:{text.length}</p>

<div> <h2>Random number Generator</h2></div>
<div style={{marginTop:"30px"}}>
<button >Generate Number</button>
<p>Random Number:{num}</p></div>
 </div>
    </div>
    </center>
    
  );
};

export default Theme_Task;
