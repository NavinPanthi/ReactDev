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
  let pageIncrementButton = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementButton = (
      <li onClick={handleNext} className="p-2 mx-1">
        &hellip;
      </li>
    );
  }
  let pageDecrementButton = null;
  if (minPageNumberLimit !== 0) {
    pageDecrementButton = (
      <li onClick={handlePrev} className="p-2 mx-1 ">
        &hellip;
      </li>
    );
  }
  const handleLoadMore = () => {
    setItemsPerPage(itemsPerPage + 10);
  };
  const handleLoadLess = () => {
    if (itemsPerPage > 10) {
      setItemsPerPage(itemsPerPage - 10);
    }
  };

  const renderPageNumbers = () => {
    return (
      <>
        <ul className="flex shadow-lg text-indigo-900 flex-row mt-9 mx-auto w-50 rounded-xl divide-x  divide-gray-300 overflow-hidden text-sm">
          <button
            className={`p-2  ${
              currentPage === pages[0] ? "opacity-50" : "active:bg-gray-300"
            }`}
            onClick={handlePrev}
            disabled={currentPage === pages[0]}
          >
            Prev
          </button>
          {pageDecrementButton}
          {pages.map((number) => {
            if (
              number < maxPageNumberLimit + 1 &&
              number > minPageNumberLimit
            ) {
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

          {pageIncrementButton}
          <button
            className={`p-2  ${
              currentPage === pages[pages.length - 1]
                ? "opacity-30"
                : "active:bg-gray-300"
            }`}
            onClick={handleNext}
            disabled={currentPage === pages[pages.length - 1]}
          >
            Next
          </button>
        </ul>
        <button
          onClick={handleLoadMore}
          className="shadow-lg p-2 mt-5 rounded-xl  hover:bg-gray-300 text-indigo-900 mx-auto text-sm  w-40 flex justify-center"
        >
          Load more
        </button>
        <button
          onClick={handleLoadLess}
          className="shadow-lg p-2 mt-5 rounded-xl  hover:bg-gray-300 text-indigo-900 mx-auto text-sm  w-40 flex justify-center"
        >
          Load Less
        </button>
      </>
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
