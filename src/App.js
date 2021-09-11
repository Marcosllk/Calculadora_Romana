import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [result, setResult] = useState (0);

  const [numeroUm, setnumeroUm] = useState (0);
  const [numeroDois, setnumeroDois] = useState (0);
  const [op, setOp] = useState ("");

  const handleClick = (e) => {
    if (e.target.name == "-" || e.target.name == "+"){
      if(op == ""){
        setnumeroUm(result); 
        setOp(e.target.name);
        setResult(result + " " + e.target.name + " ");
      }
    }else {
      if(numeroUm != 0){
        if(numeroDois == 0 && op != ""){
          setnumeroDois(parseInt(e.target.name));
          setResult(numeroUm + " " + op + " " + e.target.name);  
        }else if(op != ""){
          setnumeroDois(numeroDois + parseInt(e.target.name));
          setResult(numeroUm + " " + op + " " + (numeroDois + parseInt(e.target.name)));  
        }
      }else{
        setResult(parseInt(result) + parseInt(e.target.name));
      }
    }


  }

  const Clear = () => {
    setResult(0);
    setnumeroDois(0);
    setnumeroUm(0);
    setOp(0);
  }

  const calculate = () => {
    setResult(eval(result).toString());
    setnumeroDois(0);
    setOp("");
  }

  return (
      
      <div className="container">
            <form>
              <h1>Calculdora Romana</h1>
              <input type= "text" value= {result} /> 
           </form>  

      <div className="keypad">
             <button className="highlight" onClick={Clear} id="Clear" >Clear</button>
             <button name= "5" onClick={handleClick}>V</button>
             <button name= "10" onClick={handleClick}>X</button>
             <button name="50" onClick={handleClick}>L</button>
             <button name="100" onClick={handleClick}>C</button>
             <button name= "500" onClick={handleClick}>D</button>
             <button name= "1000" onClick={handleClick}>M</button>
             <button name= "1" onClick={handleClick}>I</button>
             <button className="highlight" name="+" onClick={handleClick}>+</button>
             <button className="highlight" name="-" onClick={handleClick}>-</button>
             <button className="highlight" onClick={calculate} id="result">=</button>

     </div>

        </div>
      
    );

 }
  


export default App;
