import React,{useState} from "react";
import GetInput from './Get_InputValue'
const Toggle = ()=>{
    const[status,setToggle]= useState(true)
    return(<div>
        {
            status?<GetInput/>:<h1 style={{color:"tomato"}}>Input Component Is Hide</h1>
        }
        <button onClick={()=>setToggle(!status)}>Toggle</button>

    </div>

    )
}
export default Toggle;