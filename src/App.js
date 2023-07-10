import "./App.css";
import { useState } from "react";
import { sculptureList } from "./data";

// PASSING EVENT HANDLERS AS PROPS .
// function Button({ onClick, children }) {
//   return <button className="p-3 m-3 btn btn-dark btn-lg" onClick={onClick}>{children}</button>;
// }
// function PlayButton({ movieName }) {
//   function handlePlay() {
//     alert(`Playing ${movieName}`);
//   }
//   return <Button onClick={handlePlay}>Play "{movieName}"</Button>;
// }
// function UploadButton() {
//   return <Button onClick={() => alert("Uploading!")}>Upload image</Button>;
// }
// function Toolbar() {
//   return (
//     <div>
//       <PlayButton movieName="ramsita" />
//       <UploadButton />
//     </div>
//   );
// }

// STOPPING PROPAGATION i.e. auto event handler pass to parent element.
// function Button({ onClick, children }) {
//   return (
//     <button
//       onClick={(e) => {
//         e.stopPropogation();
//         onClick();
//       }}
//     >
//       {children}
//     </button>
//   );
// }

// function Toolbar() {
//   return (
//     <div
//       className="container bg-primary"
//       onClick={() => alert("Toolbar is clicked.")}
//     >
//       <Button onClick={() => alert("Playing movie.")}>Play movie.</Button>
//       <Button onClick={() => alert("Playing music.")}> Play Song.</Button>
//     </div>
//   );
// }
// GIVING A COMPONENT MULTIPLE STATE VARIABLES

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  let sculpture = sculptureList[index];

  function handleNext() {
    setIndex(index + 1);
  }
  function showMore() {
    setShow(!show);
  }
  return (
    <div>
      <Button onClick={handleNext}>Next</Button>
      <h2>
        {sculpture.name} by {sculpture.artist}
      </h2>
      <h3>
        {index + 1} of {sculptureList.length}
      </h3>
      <Button onClick={showMore}>{show ? "Hide" : "Show"} Details</Button>
      {show && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </div>
  );
}
