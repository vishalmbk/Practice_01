import React,{useState} from "react";

const Form = () => {
    const [name,setName]= useState("");
    const [tnc,setTnc]= useState(false);
    const [interest,setInterest]= useState("");
    const [LastN,setLastN]= useState("");
function getFormData(e){
    console.log(name,LastN,interest,tnc)
    e.preventDefault()
}
    return (<div>
        <h1>Handle Form in React</h1>
        <form onSubmit={getFormData}>
            <input type="text" placeholder="First Name" onChange={(e)=>setName(e.target.value)} /><br /> <br />
           <input type="text" placeholder="Last Name" onChange={(e)=>setLastN(e.target.value)}/><br/><br/>
            <select onChange={(e)=>setInterest(e.target.value)}>
                <option>Select Option</option>
                <option>Marvel
                </option>
                <option>DC</option>
            </select><br/><br/>
            <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Accept Term and Condition</span><br/><br/>
            <button>Submit</button>


        </form>
    </div>

    )
}
export default Form;