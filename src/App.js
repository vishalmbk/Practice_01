import ParentComponent from './components/Parent_component';
import React, { useState } from 'react';
import './App.css';
import Stundent from './components/Props_Student_info';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/Header_Nav';
import GetInput from './components/Get_InputValue';
import Footer from './components/Footer';
import HideShow from './components/Hide_Show_Button';
import Toggle from './components/Toggle';
import E_H_Parent from './components/E_H_Parent';
import Form from './components/Basic_Form';
import NewForm from './components/Form';
import HideBtn from './components/Hide_Show_Ccomp';


function App() {

function Foot() {
  return(
    <div><Footer/></div>
  )
}

  const [name, setName] = useState("Vishal")
  const [naam, setNaam] = useState("Lucky")
  

  
  return (
    <div className="App">
       <NavbarComp />
       <hr/>
      <HideBtn/>



      <NewForm/>
       <hr/>
      <h1>React Props</h1>
      <Stundent name={name} email="vishalmbk@exmple.com" age="30" nationality="Indian" state="Maharastra" city="Jalna" />
      <button onClick={() => setName("Vmbk")}>Update Name</button>

      <hr />
      <Form/>
      <hr/>

      <GetInput/>
      <hr/>
      <HideShow/>
      <hr/>
      <Toggle/>

      <hr />

      <Stundent name={naam} email="smbk@exmple.com" age="25" nationality="U.S." state="New Jersey" city="New York" />
      <button onClick={() => setNaam("Lucky_MBK")}>New Name</button>
       <hr/>

       <E_H_Parent/>

      <hr />
       
      <ParentComponent/>

      <hr/>
       <Foot/> 
    </div>
      
  );
}

export default App;
