import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
     //  console.log("Upper Case was clicked" + text)
       let newText = text.toUpperCase();
       setText(newText)
       props.showAlert("Converted to UpperCase!", "success")
    }

    const handleLowerClick = () => {
          let newText1 = text.toLowerCase();
          setText(newText1)
          props.showAlert("Converted to LowerCase!", "success")
       }
    
    const handleOnChange = (event) => {
       // console.log("On Change")
       setText(event.target.value)
     }

    const [text, setText] = useState('');

    return (
    <>
        <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{background: props.mode==='light'?'white':'#13466e' , 
            color: props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                <button className="btn btn-primary my-3 mx-3" disabled={text.length===0} style={{background: '#d215e1' , border: '1px solid black', 
            color: 'white'}} onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary my-3 mx-3" disabled={text.length===0} style={{background: '#eb5018' , border: '1px solid black', 
            color: 'white'}} onClick={handleLowerClick}>Convert to LowerCase</button>
            </div>
        </div>
        <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
            <h1>Your text summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter your text in textbox above to preview it here"}</p>
        </div>
    </>
  );
}
