import {React,useState} from'react'
import './Accordion.css'
const Accordion=()=>{
    const[open,setOpen]=useState(null) //for Accordion
    
    // function expand(){
    //     setOpen(!open)
    // }
    const accor=[
        {id:1,title:"accordion 1",para:"paragraph 1"},
        {id:2,title:"accordion 2",para:"paragraph 2"},
    ]
    function handleId(id)//we passing parameter id for which id we are working
    {    
       console.log(id)
       //setOpen(id)
       //  //here it stores the id value
       setOpen(open===id?null:id)
    }
    
    return(
        <>
        {/*<p className='head' onClick={expand}>Accordion 1</p>
        {open ?
        <p>The sun is vital to life on Earth, providing the necessary light and heat. Rising in the east and setting in the west, it warms the planet and helps plants grow. All living things depend on it for survival.A family of four consisting of a father, mother, sister, and the author shares daily routines like evening meals and weekend activities, reflecting a close-knit bond.</p>
        : ""}
        <p className='head'> Accordion 2</p>
        <p>Village life offers a calm, nature-filled environment surrounded by green fields and tight-knit, supportive communities away from city noise.A family of four consisting of a father, mother, sister, and the author shares daily routines like evening meals and weekend activities, reflecting a close-knit bond.</p>*/}
        {
            accor.map((res)=>{
                return(
                    <>   {/*the setopen open and close the accordion then the res.title along with res.para*/}
                    <p className='head' onClick={()=>handleId(res.id)}>{res.title}</p>
                    {open ==res.id? <p>{res.para}</p> : ""}{/*here it check null==1 or 2 and prints the para */}
                    </>
                )
            }
            )
        }
        //{open}
        </>
    )
}
export default Accordion