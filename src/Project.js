import{React,use,useState} from 'react';
import "./Project.css";
const Project=()=>{

  const[form,setForm]=useState({
    id:0,
    name:"kowsi",
    age:45,
    department:"eee",
    marks:98
 })
 
 const[value,setValue]=useState({
    id:1,
    name:"karthika",
    age:20,
    department:"cse",
    marks:89
 });

 function change(event){
 setValue({
  ...value,
  [event.target.name]:event.target.value,
 })
 }
 
 function submit(event){
  event.preventDefault();
    setForm({
      ...form,
      name:value.name,
      age:value.age,
      department:value.department
    })
 }
 
 return(
  <div>
    {form.name}<br/>
    {form.department}<br/>
    {form.age}
  
    <form onSubmit={submit}>
      <label>Name:</label><br/><input onChange={change} name={"name"} placeholder="enter your name"/><br/>
      <label>department:</label><br/><input onChange={change} name={"department"} /><br/>
      <label>Age:</label><br/><input onChange={change} name={"age"}/><br/>
      <button type="submit">Submit</button>
    </form>
  </div>
 )

}
export default Project














   {/*const[value,setValue]=useState(false)
    const[input,setInput]=useState("your data will be visible here")
    const[email,setEmail]=useState("")
    const[age,setAge]=useState(0)
  
   {/*function inc(){
    setValue(!value)




  //toggle 0 or 1
    //setValue(value===0?1:0)

    //    if(value==0){
    //     setValue(1)
    //    }
    //    else{
    //     setValue(0)
    //    }

}}


   //getting value from input box
   function register(event){
   setInput(event.target.value)
   }
   function emaily(event){
      setEmail(event.target.value);
    }
    function ageof(event){
      setAge(event.target.value);
    }
    function handleSubmit(event){
      event.preventDefault();
      alert(input);
      alert(email);
      alert(age);
    }*/}
    


    {/*return(
        <div style={{backgroundColor:value?"#23272f":"white",height:"100vh"}}>
        {value}<br/>
        <center><span style={{cursor:"pointer"}} onClick={inc}>{value?"☀️":"🌙"}</span></center>*/}
        {/*<p onClick={inc}>test7</p>*/}
     // <center>
             {/*<input onChange={inc} />*/}
         {/* <form onSubmit={handleSubmit}>   
            Name:<input onChange={register} /><br /><br/>
            Email:<input onChange={emaily} /><br/><br/>
            Age:<input onChange={ageof}/><br/><br />
            <button type="submit">Submit</button>
          
      
        </form>
          </center>
      
        </div>

    )
}*/}
//export default Project
