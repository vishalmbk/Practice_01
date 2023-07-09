import React, { useState } from "react";
import './Form.css';
const NewForm =()=>{
    const [place,setPlace]=useState("");
    const [from,setFrom]=useState("");
    const [date,setDate]=useState("");
    const [tnc,setTnc]=useState(false);
    function getNewFormData(e){
        console.log(place,from,date,tnc)
     e.preventDefault()
    }
    return(<div id="Form_div">
        <h1>New Journey Form</h1><br/>
        <form onSubmit={getNewFormData}>
            <input onChange={(e)=>setPlace(e.target.value)} value={place} className="input" type="text" placeholder="place"/><br/><br/>
            <input onChange={(e)=>setFrom(e.target.value)} className="input" type="text" placeholder="From"/><br/><br/>
            <input onChange={(e)=>setDate(e.target.value)} className="input" type="date"/><br/><br/>
            <input onChange={(e)=>setTnc(e.target.checked)} type="checkbox"/><span>Accept Terms & condition</span><br/><br/>
            <button id="btn" type="submit">Book</button>
            

        </form>
    </div>)
}
export default NewForm;