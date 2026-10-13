import {React,useState} from 'react'
const Accordion=()=>{
    const[open,setOpen]=useState(null)
    const accor=[
        {id:1,title:"Accordion-1",para:"paragraph 1"},
        {id:2,title:"Accordion-2",para:"paragraph 2"}
    ]

function handleId(id) {
  console.log(id);
  setOpen(open===id?null:id)
}
return(
<>
   {
            accor.map((res)=>{
                return(
                    <>   
                    <p className='head' onClick={()=>handleId(res.id)}>{res.title}</p>
                    {open ==res.id? <p>{res.para}</p> : ""}
                    </>
                )
            }
            )
        }
        //{open}
        </>
   
  )

}

export default Sample