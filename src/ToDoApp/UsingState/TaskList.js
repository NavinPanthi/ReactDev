import { useState } from "react";

export default function TaskList({ todos, onChangeToDo, onDeleteToDo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task todo={todo} onChange={onChangeToDo} onDelete={onDeleteToDo} />
        </li>
      ))}
    </ul>
  );
}
function Task({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let toDoContent;
  if (isEditing) {
    toDoContent = (
      <>
        <input
          type="text"
          value={todo.title}
          onChange={(e) => {
            onChange({ ...todo, title: e.target.value });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    toDoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChange({ ...todo, done: e.target.checked });
        }}
      />
      {toDoContent}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </label>
  );
}
