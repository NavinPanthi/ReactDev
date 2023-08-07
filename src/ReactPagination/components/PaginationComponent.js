import { useState, useEffect } from "react";

const renderData = (data) => {
  return (
    <ul className="p-2 rounded text-sm">
      {data.map((todo, index) => {
        return <li className="border-b leading-7" key={index}>{todo.title}</li>;
      })}
    </ul>
  );
};
const PaginationComponent = () => {
  const [data, setData] = useState([]);
  const  [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState()
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div className="container">
      <h1 className="pb-2 p-2 rounded-xl font-bold text-3xl bg-slate-200 mb-2">To do list</h1>
      {renderData(data)}
    </div>
  );
};
export default PaginationComponent;
