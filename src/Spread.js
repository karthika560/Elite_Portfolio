import React from 'react'
function Spread(){
    const cars={
     name:"tata",
     price:"10000",
     city:"salem",
     color:"red",
     modal:"2026",
     variant:"shine",
     capacity:"45L",
    suspension:"mac",
    sunroof:"yes",
    wheelbase:"255mm",
    wheelsize:"15inch",
    dualtone:"yes"
    }

const{name,price,city,color,...remains}=cars
const updateCars={
    ...cars,
    model:"2027"
}
console.log(updateCars)

return(
    <>
    <div>
        {price}</div></>
)
}
    /*const student=[{
        id:1,
        name:"karthika",
        dept:"cse",
        marks:84
    },
    {
        id:2,
        name:"ramya",
        dept:"ece",
        marks:78
    },
    {
        id:3,
        name:"swathi",
        dept:"mech",
        marks:45
    },
    {
        id:4,
        name:"kowsi",
        dept:"civil",
        marks:67
    },
    {
        id:5,
        name:"gopika",
        dept:"eee",
        marks:89
    },
    {
        id:6,
        name:"mouni",
        dept:"it",
        marks:50
    },
    {
        id:7,
        name:"sandhiya",
        dept:"ece",
        marks:67
    },{
        id:8,
        name:"dhivya",
        dept:"aiml",
        marks:89
    },
    {
        id:9,
        name:"akshya",
        dept:"cse",
        marks:67
    },
    {
        id:10,
        name:"selva",
        dept:"cse",
        marks:91
    }   
]*/



export default Spread
