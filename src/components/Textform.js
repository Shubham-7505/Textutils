import React, {useState} from 'react'

export default function Textform(props) {
    const [text, settext]= useState('Enter your text here')
    const handleUpclick= ()=>{
        let newtext= text.toUpperCase();
        settext(newtext);
        props.showAlert("Converted to uppercase", "success");

    }
    const handleloclick= ()=>{
        let newtext= text.toLowerCase();
        settext(newtext);
        props.showAlert("Converted to lowercase", "success");
    }
    const handleclearclick= ()=>{
        let newtext= "";
        settext(newtext);
        props.showAlert("Text cleared", "success")
    }
    const handleonchange=(event)=>{
        settext(event.target.value);
    }
    const handlecopyclick=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success")
    }
    return (
        <>
         <div className="container my-3">
            <h1 className='heading' style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
             <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#0dcaf0':'white', color:props.mode==='dark'?'white':'black'}} value ={text} onChange={handleonchange} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloclick}>Convert to lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearclick}>Clear text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopyclick}>Copy Text</button>
        </div>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h3>Text Summay</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p> 
        </div>
        </>
    )
}
