import React from 'react'
import { useState} from 'react';
import './Calculator.css';

//  dynamic method by using usestate hook

function Calsi() {

    const[result,setResult] = useState('');

    const clickhandler =(event) => {
        setResult(result.concat(event.target.value));
    };    

    const cleardisplay = () => {
        setResult('');
         
    };
    
    const calculate = () => {
        setResult(eval(result).toString());
    };
    
  return (
    <div className='cal'>
        <input type='text' placeholder='Latha_matthe' id='answer' value={result} />

        <input 
          type='button' 
          value="AC" 
          className='button'
          onClick={cleardisplay}
        />

        <input 
          type='button' 
          value="clear" 
          className='button'
          onClick={cleardisplay}
        />
         <input 
          type='button' 
          value="%" 
          className='button '
          onClick={clickhandler}
        />
          <input 
          type='button' 
          value="/" 
          className='button '
          onClick={clickhandler}
        />

        <input 
          type='button' 
          value="7" 
          className='button '
          onClick={clickhandler}
        />
         <input 
          type='button' 
          value="8" 
          className='button '
          onClick={clickhandler}
        />
         <input 
          type='button' 
          value="9" 
          className='button '
          onClick={clickhandler}
        />
         <input 
          type='button' 
          value="*" 
          className='button '
          onClick={clickhandler}
        />

        <input 
          type='button' 
          value="4" 
          className='button '
          onClick={clickhandler}
        />
         <input 
          type='button' 
          value="5" 
          className='button '
          onClick={clickhandler}
        />
         <input 
          type='button' 
          value="6" 
          className='button'
          onClick={clickhandler}
        />
         <input 
          type='button' 
          value="-" 
          className='button '
          onClick={clickhandler}
        />

        <input 
          type='button' 
          value="1" 
          className='button '
          onClick={clickhandler}
        />
         <input 
          type='button' 
          value="2" 
          className='button '
          onClick={clickhandler}
        />
         <input 
          type='button' 
          value="3" 
          className='button '
          onClick={clickhandler}
        />
         <input 
          type='button' 
          value="+" 
          className='button '
          onClick={clickhandler}
        />

        <input 
          type='button' 
          value="rotate" 
          className='button '
          onClick={clickhandler}
        />
         <input 
          type='button' 
          value="0" 
          className='button '
          onClick={clickhandler}
        />
         <input 
          type='button' 
          value="." 
          className='button '
          onClick={clickhandler}
        />
         <input 
          type='button' 
          value="=" 
          className='button '
          onClick={calculate}
        />
      
    </div>
  )
}

export default Calsi;
