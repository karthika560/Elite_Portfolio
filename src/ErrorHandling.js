import React,{useState} from 'react'
function ErrorHandling({data}) {
    console.log(data)
const[value,setValue]=useState(
    {
        name:"",
        email:"",
        mobile:""
    }
)
const [error,setError]=useState({
    nameError:"",
    emailError:"",
    mobileError:""
})
function change(event){
   setValue(
    {
        ...value,
    [event.target.name]:event.target.value}
)
}
function handleSubmit(event){
   event.preventDefault();
   if(value.name==""){
    setError({
        ...error,
        nameError:"Field is required"
    })
   }
   else if(value.name.length<3){
    setError({
        ...error,
        nameError:"less than 3 letters"
        //alert("name should be more than 3 letters")
    })
   }
}
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" onChange={change}/><br/><br/>
        <span style={{color:'red'}}>{error.nameError}</span>
        <input type="email" placeholder="Email" name="email" onChange={change}/><br/><br/>
        <input type="number" placeholder="mobile" name="mobile" onChange={change}/><br/><br/>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ErrorHandling