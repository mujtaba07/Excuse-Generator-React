import React, { useState,useEffect } from "react";
import Axios from "axios";
import './app.css'
import { User } from "./User";

const App = () => {
        const [generatedExcuse,setGeneratedExcuse] = useState("")
    //
   

        const fetchExcuse = (excuse)=>{
          Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}`).then((res)=>{
            setGeneratedExcuse(res.data[0].excuse);
            })
        }
    
  return (
    <div className='App'>
      <div className="container">

      <h1>Generate Excuse</h1>
      <button  className="btn btn-primary mx-2 my-2" onClick={()=>{fetchExcuse('party')}}>Party</button>
      <button className="btn btn-primary mx-2" onClick={()=>{fetchExcuse('family')}}>family</button>
      <button className="btn btn-primary mx-2" onClick={()=>{fetchExcuse('office')}}>office</button>
      <button className="btn btn-primary mx-2" onClick={()=>{fetchExcuse('children')}}>children</button> <br />
      <button className="btn btn-primary mx-2" onClick={()=>{fetchExcuse('college')}}>college</button>
      <button className="btn btn-primary mx-2" onClick={()=>{fetchExcuse('funny')}}>funny</button>
      <button className="btn btn-primary mx-2" onClick={()=>{fetchExcuse('unbelievable')}}>unbelievable</button>
      <button className="btn btn-primary mx-2"onClick={()=>{fetchExcuse('gaming')}}>gaming</button>
      <button className="btn btn-primary mx-2" onClick={()=>{fetchExcuse('developers')}}>developers</button>
      <h1 className="excuse">{generatedExcuse}</h1>
      </div>
    </div>
  );
};

export default App;
