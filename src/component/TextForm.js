import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
      //  console.log("Uppercase was clicked" + text);....just for understanding using inspect
        let newText = text.toUpperCase();
        setText (newText)
        props.showAlert("Coverted To UpperCase", "success")
    }

    const handleLoClick = ()=>{
      //  console.log("Loweercase was clicked" + text);....just for understanding using inspect
        let newText = text.toLowerCase();
        setText (newText)
        props.showAlert("Coverted To LowerCase", "success")
    }

    const handleClearClick = ()=>{
        let newText = ''
        setText (newText)
        props.showAlert("Text Cleared", "success")
    }

    const handleinverseclick = () => {
      console.log("inverse click is triggered");
      let newtext = "";
      for (let i = text.length - 1; i >= 0; i--) {
        newtext += text[i];
      }
      setText(newtext);
      props.showAlert("Text Inversed", "success")
    };

    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showAlert("Text By Voice", "success")
    }

    const handleCapitalize = () => {
      let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
      setText(newText);
      props.showAlert("Text Capitalized", "success")
 }

 const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Text Removed Extra Spaces", "success")
}

    const handleOnChange = (event)=>{
       // console.log("On change");....just for understanding using inspect
        setText(event.target.value);
    }

    const [text, setText]= useState('');
    //text = 'enter the name'; // wrong way to write
    //setText = ("enter new text"); // correct way to write 
  return (
    <>
    <div className='container' style={{color: props.mode ==='dark'?'white':'#4e7689'}}>
     <h1>{props.heading}</h1>
     <div className="mb-3">
     <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8" 
     style={{backgroundColor: props.mode ==='dark'?'#0000002d':'white', color: props.mode ==='dark'?'white':'#4e7689'}}></textarea>
     </div>
     <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
     <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
     <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Click</button>
     <button className='btn btn-primary mx-1' onClick={handleinverseclick}>Inversec Click</button>
     <button className='btn btn-primary mx-1' onClick={speak}>Speak</button>
     <button className='btn btn-primary mx-1' onClick={handleCapitalize}>Capitalize</button>
     <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
     </div>

     <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#4e7689' }}>
      <h2>Your text summery</h2>
      <p> {text.split(" ").length} words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").length }minutes read</p>
      <h2>Preveiw</h2>
      <p>{text.length>0?text:"Enter in the textbox above to preview it here"}</p>

     </div>
     </>
  )
}
