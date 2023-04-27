import React from 'react'
import { useState } from 'react'
import '../Css/Form.css'

function Form() {

    const[text,setText]=useState("");
    const[flag,setFlag]=useState(false);
    const[Color,setColor]=useState('black')
  
    const handleChange=(event)=>{

        setText(event.target.value);
        

    }

    const handletext=()=>{
        setText('');
    }

    const handleUpperCase=()=>{

      
        const newText=text.toUpperCase();

        setText(newText);

    }
    const handleLowerCase=()=>{
     const newText=text.toLowerCase();
        setText(newText)

    }

    const handleDark=()=>{
      setColor('white')
        setFlag(true);
        

    
        
       


    }

    const handleWhite=()=>{
      setColor('black')
        setFlag(false);
        

    }
    const handleCopy=()=>{
      var text=document.getElementById('my-box')
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const removeSpace=()=>{
      let newText=text.split(/[ ]+/) ;
      setText(newText.join(" "));
    }
     const capital=()=>{
        var strArr=text.split(" ");
        for(let i=0;i<strArr.length;i++)
        {
          strArr[i]=strArr[i].charAt(0).toUpperCase()+strArr[i].slice(1);
        }
        setText(strArr.join(" "));


     }
     const capitalFirst=()=>{
      var newText=text.charAt(0).toUpperCase()+text.slice(1);
      setText(newText);
     }
  return (
    <div>

   <div className='container my-4 mb-4' >
    <div className="form-outline w-100 mb-4 ">

    <h1>Enter Your Text Here &nbsp;...</h1>
     <textarea className={flag===false?'form-control background-white' :'form-control background-black '} style={flag===false?{color:Color}:{color:Color}} id="my-box" rows="8"  value={text} onChange={handleChange} ></textarea>
    
  
 
  <button type="button" className="btn btn-success my-2" onClick={handleUpperCase}>Convert to UpperCase</button>
  <button type="button" className="btn btn-success mx-2" onClick={handleLowerCase}>Convert to LowerCase</button>
    <button type="button" className="btn btn-success mx-2" onClick={handletext}>Clear your text</button>
    <>{flag===false?<button type="button" className="btn btn-success mx-2 " onClick={handleDark}>Enable Dark Mode</button>
    :<button type="button" className="btn btn-success mx-2 " onClick={handleWhite}>Disable DarkMode</button>
    }</>
    <button className='btn btn-success mx-2' onClick={handleCopy}>Copy text</button>
    <button className='btn btn-success mx-2 ' onClick={removeSpace}>Remove space</button>
     <button className='btn btn-success mx-2' onClick={capital}> Every First Letter capital</button>
     <button className='btn btn-success mx-2' onClick={capitalFirst}>First Capital</button>
  
  </div>

   </div>
   <div className='container'>
    <h3>Total Words={text.split(' ').length-1}</h3>
    <h3>Total Characters={text.length}</h3>
    <h3>minimum reading time ={text.length/300} minuts</h3>
    <h4>Description ......... &nbsp; &nbsp; {text}</h4>
    
    
   </div>
    
    </div>
  )
}

export default Form