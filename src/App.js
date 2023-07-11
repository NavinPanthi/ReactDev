import "./App.css";
import { useState } from "react";
// import { sculptureList } from "./data";

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

// function Button({ onClick, children }) {
//   return <button onClick={onClick}>{children}</button>;
// }

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [show, setShow] = useState(false);
//   const [isDisabled, setIsDisabled] = useState(false);

//   let sculpture = sculptureList[index];

//   function handleNext() {
//     if (index < sculptureList.length - 1) {
//       setIndex(index + 1);
//       console.log(index);
//     } else {
//       setIsDisabled(!isDisabled);
//     }
//   }
//   function handlePrevious() {
//     if (index>0 ) {
//       setIndex(index - 1);
//       console.log(index);
//     } else {
//       setIsDisabled(!isDisabled);
//     }
//   }
//   function showMore() {
//     setShow(!show);
//   }

//   return (
//     <div>
//       <div>
//         <Button onClick={handleNext} disabled={isDisabled}>
//           Next
//         </Button>
//         <Button onClick={handlePrevious} disabled={isDisabled}>
//           Previous
//         </Button>
//       </div>
//       <h2>
//         {sculpture.name} by {sculpture.artist}
//       </h2>
//       <h3>
//         {index + 1} of {sculptureList.length}
//       </h3>
//       <Button onClick={showMore}>{show ? "Hide" : "Show"} Details</Button>
//       <img src={sculpture.url} alt={sculpture.alt} />
//       {show && <p>{sculpture.description}</p>}
//     </div>
//   );
// }

//using useState in form
export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }
  function handleSecondNameChange(e) {
    setSecondName(e.target.value);
  }
  function handleReset(){
    setFirstName("");
    setSecondName("");
  }
  return (
    <>
      <input
        value={firstName}
        placeholder="FirstName"
        onChange={handleFirstNameChange}
      />
      <input
        value={secondName}
        placeholder="FirstName"
        onChange={handleSecondNameChange}
      />
      <p>Hi {firstName + secondName} </p>
      <button onClick={handleReset}>
        Reset
      </button>
    </>
  );
}
