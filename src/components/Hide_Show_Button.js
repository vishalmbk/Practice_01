import React,{useState} from "react";

const HideShow = ()=>{
    const [status,setStatus]=useState(true)
    return (<div>
        {
            status?<h1>Hello World !</h1>:null
        }
        

        <button onClick={()=>setStatus(false)}>Hide</button> 

        <button onClick={()=>setStatus(true)}>Show</button>
    </div>

    )
}
export default HideShow;