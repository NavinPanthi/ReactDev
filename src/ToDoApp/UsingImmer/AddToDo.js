import { useState } from "react";

export default function AddToDO({ onAddToDo }) {
  const [title, setTitle] = useState('');
  return (
    <div>
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setTitle("");
          onAddToDo(title);
        }}
      >
        Add
      </button>
    </div>
  );
}
