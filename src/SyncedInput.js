import { useState } from "react";

export default function SyncedInput() {
  const [text, setText] = useState("");
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <Input value={text} label="First input" onChange={handleChange} />
      <Input value={text} label="Second input" onChange={handleChange} />
    </>
  );
}

function Input({ value, label, onChange }) {
  return (
    <label>
      {label}
      {" "}
      <input value={value} onChange={onChange} />
    </label>
  );
}
