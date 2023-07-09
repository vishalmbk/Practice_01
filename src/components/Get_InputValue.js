import React,{useState} from "react";

function GetInput(){
    const[data,setData] = useState(null)
    const [Print,setPrint] = useState(false)
    function getData(val) {
        console.log(val.target.value)
        setData(val.target.value)
        setPrint(false)
      }
    return(<div>
{ 
    Print?<h1>{data}</h1>:null
} 
    <h1>Get Input Box Data</h1>
    {/* <h1>{data}</h1> */}
  <input type="text"onChange={getData}>
  </input>
       <button onClick={()=>setPrint(true)} >Print Data</button> 
    </div>
    )
}
       
export default GetInput;