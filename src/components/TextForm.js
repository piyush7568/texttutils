import React, {useState} from 'react'



export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked:" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  }

  const handleLoClick = ()=>{
    // console.log("Lowercase was clicked:" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  }

  const handleClearClick = ()=>{
    let newText ='';
    setText(newText);
    props.showAlert("Text was Cleared!", "success");
  }

  const handleOnChange = (event)=>{
    // console.log("OnChange");
    setText(event.target.value);
  }

  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to Clipboard!", "success");
    }

  const handleExtraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }

  const [text, setText] = useState('');
  // setText("New text");

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace} >Remove Extra Spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear</button>
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}} >
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter somthing in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
