import { useState, useEffect } from "react";

const renderData = (data) => {
  return (
    <ul className="p-2 rounded text-sm">
      {data.map((todo, index) => {
        return (
          <li className="border-b leading-7" key={index}>
            {todo.title}
          </li>
        );
      })}
    </ul>
  );
};

const PaginationComponent = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }
  let listClassName = "p-2 text-center w-full cursor-pointer ";
  let listClassNameActive = "p-2 text-center w-full cursor-pointer bg-gray-300";
  const renderPageNumbers = () => {
    return (
      <ul class="flex flex-row shadow-md mt-2 rounded-xl divide-x  divide-gray-300 overflow-hidden text-sm">
        <button className="p-2 active:bg-gray-300">Prev</button>
        {pages.map((number) => {
          return (
            <li
              key={number}
              id={number}
              className={
                currentPage === number ? listClassNameActive : listClassName
              }
              onClick={handleClick}
            >
              {number}
            </li>
          );
        })}
        <button className="p-2 active:bg-gray-300">Next</button>
      </ul>
    );
  };

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexofFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexofFirstItem, indexOfLastItem);

  return (
    <div className="container">
      <h1 className="pb-2 p-2 rounded-b-xl font-bold text-3xl mb-2">
        To do list
      </h1>
      {renderData(currentItems)}
      {renderPageNumbers()}
    </div>
  );
};
export default PaginationComponent;
