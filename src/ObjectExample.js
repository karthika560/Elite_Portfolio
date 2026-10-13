import React  from "react";
const ObjectExample=()=>{
    const student=[{
        id:1,
        name:"Arun",
        age:21,
        department:"MCA",
        marks:95
    },
    {
        id:2,
        name:"riya",
        age:22,
        department:"CSE",
        marks:67
    }
]
    //const topstudent=student.filter((i)=>i.marks>90);

    // const data=student.map((i)=>{
    //     return (<>
    //     {console.log(i.name)}
    //     </>
    //     )
    // })

    const numbers=[1,2,3,4,5,6];
    
    console.log("pop",numbers.pop(),numbers)
     console.log("push",numbers.push(7),numbers)
     console.log("shift",numbers.shift(),numbers)
    console.log("unshift",numbers.unshift(0),numbers)


//     const filtered=numbers.filter(
//     function (x) {
//         return x>2
//     }
// )
 //console.log(filtered)

 const names=["karthi","kowsi","lokesh","gopika"]
 const result=names.slice(1,3)
 console.log("result",result)

 //const spliceresult=names.splice(1,2,"added")//start from 1 till the count 2 add the value(index,count,add)
 //const spliceresult=names.splice(2,1)
const spliceresult=names.splice(3,0,"jay")
 console.log(">>>>>",spliceresult)
 console.log(names)

// const datamark=student.filter(
//     function(i){
//         return i.marks>90
//     }
// )
//console.log(datamark)
const datamark =student.filter((i)=>i.marks>90)
//console.log(datamark)
    return(
        <>
        
       <>
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>age</th>
                            <th>marks</th>
                        </tr> 
                    </thead>
                    <tbody>
                      <tr>
                        <td>karthika</td>
                        <td>20</td>
                        <td>99</td>
                      </tr>
                      <tr>
                        <td>riya</td>
                        <td>22</td>
                        <td>78</td>
                      </tr>
                    </tbody>
                </table>
                {datamark.map((i)=>{
                    return (
                        <>
                        {i.name}
                        </>
                    )
                })}
                </>

        
        {/* {student[0].id}<br />
        {student[0].name} */}
        </>
    )
}
export default ObjectExample