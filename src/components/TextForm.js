import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success")
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success")
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared successfully!!!","success")

  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy =() =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!!!","success")

  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces has been removed successfully!!!","success")

  };

  return (
    <>
    <div className="container"style={{color: props.mode==='dark'?'white':'black'}} >
      <h1>{props.heading}</h1>
      <div className="my-3">
        <textarea
          className="form-control border-dark"
          id="myBox"
          value={text}
          rows="8"
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==='dark'?'grey':'#ddd6e7', color: props.mode==='dark'?'white':'black'}}
          ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert To UpperCase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>
        Convert To LowerCase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>
        Clear
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>
        Copy
      </button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>
    </div>


    <div className="container my-3 " style={{color: props.mode==='dark'?'white':'black'}} >
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview"}</p>
    </div>

    </>
  );
}
