import { useImmer } from "use-immer";
import AddToDo from "./AddToDo";
import TaskList from "./TaskList";

let nextId = 3;
const initialList = [
  { id: 0, title: "Buy milk", done: false },
  { id: 1, title: "Buy milk", done: true },
  { id: 2, title: "Buy milk", done: true },
];

export default function ToDo() {
  const [todos, updateTodos] = useImmer(initialList);

  function handleAddToDo(title) {
    updateTodos((draft) => {
      draft.push({ id: nextId++, title: title, done: false });
    });
  }
  function handleChangeToDo(nextTodo) {
    updateTodos((draft) => {
      const todo = draft.find((t) => t.id === nextTodo.id);
      todo.title = nextTodo.title;
      todo.done = nextTodo.done;
    });
  }
  function handleDeleteToDo(todoId) {
    updateTodos((draft) => {
      const index = draft.findIndex((t) => t.id === todoId);
      draft.splice(index, 1);
    });
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
