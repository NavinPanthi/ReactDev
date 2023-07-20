import { useState } from "react";
import AddToDo from "./AddToDo";
import TaskList from "./TaskList";

let nextId = 3;
const initialList = [
  { id: 0, title: "Buy milk", done: false },
  { id: 1, title: "Buy milk", done: true },
  { id: 2, title: "Buy milk", done: true },
];

export default function ToDo() {
  const [todos, setTodos] = useState(initialList);

  function handleAddToDo(title) {
    const nextTodos = [...todos, { id: nextId++, title: title, done: false }];
    setTodos(nextTodos);
  }
  function handleChangeToDo(nextTodo) {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        }
        return t;
      })
    );
  }
  function handleDeleteToDo(todoId) {
    setTodos(todos.filter((t) => t.id !== todoId));
  }
  return (
    <div>
      <AddToDo onAddToDo={handleAddToDo} />
      <TaskList
        todos={todos}
        onChangeToDo={handleChangeToDo}
        onDeleteToDo={handleDeleteToDo}
      />
    </div>
  );
}
