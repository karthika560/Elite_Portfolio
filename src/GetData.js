import {React,useState,useEffect} from 'react'
import axios from 'axios'

const GetData = () => {
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.get("https://dummyjson.com/c/ead0-2771-4bf2-9105")
        .then((res)=>{setData(res.data)})
    },[])
    

  return (
    <>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                
            </tr>
        </thead>
    </table>
    {data.map((i)=>{
       return(
        <>
            <tbody>
                <tr>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.email}</td>
                </tr>
            </tbody>
        </>
       )    
    })}
    </>
  )
}

export default GetData