import React from "react";

function Stundent({name,email,state,nationality,city}) {
    // console.log(Props)
    return (
        <div style={{backgroundColor:"tomato", margin:10,color:"black"}} >
            <h1>Hello {name} !</h1>
           <h2>Email :{email} </h2>
           <h3>State :{state}</h3>
           <h2>nationality :{nationality}</h2>
           <p>City :{city}</p>
        </div>)



}
export default Stundent;