import { useState } from "react";

export default function SyncedInput(){
    const [text, setText] = useState('');
    function handleChange(e){
        setText(e.target.value);
    }
    return(
        <>
        <Input text label="First input" onChange={handleChange}/>
        <Input text label = "Second input" onChange={handleChange}/>
        </>
    );
}

function Input({text, label, onChange}){
  
    return(
        <>
            {label}
            <input value={text} onChange={onChange}/>
            <input value={text} onChange={onChange}/>
        </>
    );
}