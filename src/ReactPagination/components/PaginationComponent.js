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
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const pages = [];
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexofFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexofFirstItem, indexOfLastItem);

  let listClassName = "p-2 text-center w-full cursor-pointer ";
  let listClassNameActive = listClassName + " bg-gray-300";
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };
  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const renderPageNumbers = () => {
    return (
      <ul className="flex flex-row shadow-md mt-9 mx-auto w-50 rounded-xl divide-x  divide-gray-300 overflow-hidden text-sm">
        <button className="p-2 active:bg-gray-300" onClick={handlePrev}>
          Prev
        </button>

        {pages.map((number) => {
          if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
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
          } else {
            return null;
          }
        })}
        <button className="p-2 active:bg-gray-300" onClick={handleNext}>
          Next
        </button>
      </ul>
    );
  };

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
