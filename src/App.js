import { useSelector, useDispatch } from "react-redux";
import { actions } from "./ReduxTutorial";
const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const addBy = () => {
    dispatch(actions.addBy(10));
  };
  return (
    <div className="flex flex-column items-center justify-center h-screen">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button className="rounded w-28 bg-green-300 mb-5" onClick={increment}>increment</button>
      <button className="rounded w-28 bg-rose-300 mb-5" onClick={decrement}>decrement</button>
      <button className="rounded w-28 bg-slate-400 mb-5" onClick={addBy}>Add by</button>
    </div>
  );
};
export default App;
