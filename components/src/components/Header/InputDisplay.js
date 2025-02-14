import { useState } from "react"

const InputDisplay = () =>{
    const[text, setText] = useState("");
    return(
        <div>
            <h2>Input Here</h2>
            <input className="Input" value={text} onChange={(e) => setText(e.target.value)}/>  
            <h2>Display: {text}</h2>     
            
            </div>
    );
};
export default InputDisplay;

