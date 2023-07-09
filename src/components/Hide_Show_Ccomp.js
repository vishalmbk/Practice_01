import React from "react";

class HideBtn extends React.Component {
    constructor(){
        super();
        this.state={
            show:true
        }
    }
    render(){
        return(<div>
            {
                this.state.show?
                <h1>hide & show</h1>:null
            }
            <button onClick={()=>{this.setState({show:!this.state.show})}}>hide show</button>
        </div>)
    }
}
export default HideBtn;