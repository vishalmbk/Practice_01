import React from "react";


const ChildComponent = (props)=>{
    return(<div>
        <h1>Building Event Handler</h1>
<button onClick={()=>props.greetHandler('vishal')}>Greet Parent</button>
    </div>

    )
}
export default ChildComponent;