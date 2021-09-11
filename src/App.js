import React, { useState } from 'react';
import './App.css'


const App = () => {
  const [result, setResult] = useState (0);
  
  var click = false;
  
  const handleClick = (e) => {
    //setResult(result.concat(e.target.name));
    console.log(result + e.target.name);
    setResult(result + parseInt(e.target.name));

  }

  const Clear = () => {
    setResult("");

  }
  const calculate = () => {
    setResult(eval(result).toString());
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
