import React, { useState } from 'react'

const Textform = (props) => {
  const[text,setText]=useState();
  const ontextchange=(e)=>{
    setText(e.target.value)
  }
  const handleclick=()=>{

    const newtext=text.toUpperCase();
    setText(newtext);
  }
  const handleclear=()=>{
    setText("");
  } 
  const handlecopy=()=>{    
    var text=document.getElementById("myBox");    
    text.select();     
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpaces=()=>{    
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
  }
  return (
    <div>
        <h1>{props.heading}</h1>
      <div className="mb - 3">
        <label htmlFor="myBox" className='form-label'>Example Text Here</label>
        <textarea className='form-control' id="myBox" value={text} onChange={ontextchange} rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleclick}>Convert To Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleclear}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handlecopy}>Copy Text</button>  
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>  
       </div>
  )
}

export default Textform
