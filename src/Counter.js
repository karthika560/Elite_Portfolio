import {React,useEffect,useState} from'react'

const Counter=()=>{
    const[count,setCount]=useState(0)

    const btn={
        padding:"10px",
        borderRadius:"10px",
        backgroundColor:"blue",
        border:"none",
        margin:"5px",
        cursor:"pointer"
    }
    //without dependency
//     useEffect(()=>{
//         console.log("USeEffect rendered")
//     },[])
// //with dependency
//     useEffect(()=>{
//         console.log("counter button is pressed")
//     },[count])
// //empty dependency
//     useEffect(()=>{
//        console.log("every time")
//     },)

//without dependency
// useEffect(()=>{
//     document.title="count"
//  })
// //with dependency
//  useEffect(()=>{
//      document.title=count
// },[count])
//empty dependency
 //useEffect(()=>{
   // setCount(42)
 //})

function timeout(){
    setTimeout(()=>{
      console.log("test")
    },6000

    )
}

function interval(){
    setInterval(()=>{
        console.log("interval test")
    },1000)
}


    return(
        <div>
            <h1>count:{count}</h1>
            <button  style={btn}onClick={()=>setCount(count+1)}>INCREMENT</button>
            <button  style={btn}onClick={()=>setCount(count-1)}>DECREMET</button>
            <button  style={btn}onClick={()=>setCount(0)}>RESET</button>
            
            <button  onClick={timeout}>time</button>
            <button  onClick={interval}>interval</button>

        </div>
    )

}
export default Counter