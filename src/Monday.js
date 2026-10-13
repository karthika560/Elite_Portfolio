
import {React,useState} from 'react'
const Theme = () => {
    const[value,setValue]=useState(false)
    
    setValue(value===0?1:0)

    if(value==0){
        setValue(1)
   }
   else{
        setValue(0)
        }
  return (
    
        <div style={{backgroundColor:value?"#23272f":"white",height:"100vh"}}>
        {value}<br/>
        <center><span style={{cursor:"pointer"}} onClick={value}>{value?"☀️":"🌙"}</span></center>
        </div>
    
  )
}

export default Monday