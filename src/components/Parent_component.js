import React, { Component } from 'react';
import ChildComponent from './P_Child_Component';

class ParentComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            parentName: 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent(Vname){
    alert(`Hello ${this.state.parentName} From ${Vname}` )
    }
    render(){
        return(<div>
             <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}
export default ParentComponent;