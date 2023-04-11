import React , {useState} from 'react'

function Textform(props) {
  const [text,setText] = useState('');

const handleOnChange = (event)=>{
  setText(event.target.value);
}

const handleUpClick = ()=>{
   let newText = text.toUpperCase();
   setText(newText);
   props.showAlert("Converted to uppercase!", "success");
}

const handleLoClick = ()=>{
  let newText1 = text.toLowerCase();
  setText(newText1);
  props.showAlert("Converted to lowercase!", "success");
}

const handleClearClick = ()=>{
  const first = ' ';
  setText(first);
  props.showAlert("Text Cleared!", "success");
}

const handleCopyClick = ()=>{
  var texted = document.getElementById("my-box");
  texted.select();
  navigator.clipboard.writeText(texted.value);
  document.getSelection().removeAllRanges();
  props.showAlert("Copied to Clipboard!", "success");
}

const handleExtraClick = () =>{
  let newTexted = text.split(/[ ]+/);
  setText(newTexted.join(" "));
  props.showAlert("Extra spaces removed!", "success");
}

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" style={{backgroundColor: props.mode==='dark' ? '#13466e': 'white', color:props.mode=== 'dark'?'white': '#042743'}} onChange={handleOnChange} value={text} id="my-box"  cols="150" rows="8"></textarea>
        <button disabled={text.length===0} type="button" onClick={handleUpClick} className="btn btn-primary mx-3 my-3">Convert to upperCase</button>
        <button disabled={text.length===0} type="button" onClick={handleLoClick} className="btn btn-primary mx-3 my-3">Convert to lowerCase</button>
        <button disabled={text.length===0} type="button" onClick={handleClearClick} className="btn btn-primary mx-3 my-3">Clear Text</button>
        <button disabled={text.length===0} type="button" onClick={handleCopyClick} id="my-box" className="btn btn-primary mx-3 my-3">Copy Text</button>
        <button disabled={text.length===0} type="button" onClick={handleExtraClick} id="my-box" className="btn btn-primary mx-3 my-3">Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} letters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}  Minutes to Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
    </div>
    </>
  )
}

export default Textform;