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
//       <h4>
//         {index + 1} of {sculptureList.length}
//       </h4>
//       <Button onClick={showMore}>{show ? "Hide" : "Show"} Details</Button>
//       <img src={sculpture.url} alt={sculpture.alt} />
//       {show && <p>{sculpture.description}</p>}
//     </div>
//   );
// }

//USING USESTATE IN FORM
// export default function Form() {
//   const [firstName, setFirstName] = useState("");
//   const [secondName, setSecondName] = useState("");
//   function handleFirstNameChange(e) {
//     setFirstName(e.target.value);
//   }
//   function handleSecondNameChange(e) {
//     setSecondName(e.target.value);
//   }
//   function handleReset(){
//     setFirstName("");
//     setSecondName("");
//   }
//   return (
//     <>
//       <input
//         value={firstName}
//         placeholder="FirstName"
//         onChange={handleFirstNameChange}
//       />
//       <input
//         value={secondName}
//         placeholder="FirstName"
//         onChange={handleSecondNameChange}
//       />
//       <p>Hi {firstName + secondName} </p>
//       <button onClick={handleReset}>
//         Reset
//       </button>
//     </>
//   );
// }

// SETTING THE SET FUNCTION MULTIPLE TIMES INSIDE A RETURN JSX.
// export default function Counter() {
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h1>{number}</h1>
//       <button
//         onClick={() => {
//           setNumber(number + 1);
//           setTimeout(() => {
//             alert(number);
//           }, 3000);
//         }}
//       >
//         +3
//       </button>
//     </>
//   );
// }

// STATE AS A SNAPSHOT
// export default function Form() {
//   const [to, setTo] = useState("Alice");
//   const [message, setMessage] = useState("Hello");

//   function handleSubmit(e) {
//     e.preventDefault();
//     setTimeout(() => {
//       alert(`You said ${message} to  ${to}  .`);
//     }, 3000);
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label>
//           TO:{""}
//           <select value={to} onChange={(e) => setTo(e.target.value)}>
//             <option value="Alice">Alice</option>
//             <option value="Bob">Bob</option>
//           </select>
//         </label>
//         <textarea
//           placeholder="Messge"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         ></textarea>
//         <button type="submit">Send</button>
//       </form>
//     </>
//   );
// }

//Copying objects with spread Syntax
export default function Form() {
  const [person, setPerson] = useState({
    firstName: "Navin",
    lastName: "Panthi",
    email: "panthinabin341@gmail.com",
  });

  function handleFirstName(e) {
    setPerson({
      ...person,
      firstName : e.target.value
    });
  }
  function handleLastName(e) {
    setPerson({
      ...person,
      lastName : e.target.value
    });
  }
  function handleEmail(e) {
    setPerson({
      ...person,
      email : e.target.value
    });
  }
  return (
    <>
      <form>
        <h4>First Name: </h4>
        <input value={person.firstName} onChange={handleFirstName} />
        <h4>last Name: </h4>
        <input value={person.lastName} onChange={handleLastName} />
        <h4>Email: </h4>
        <input type="Email" value={person.email} onChange={handleEmail} />
      </form>
      <p>
        <h2 className="mt-4">
          {person.firstName} {person.lastName} {person.email}{" "}
        </h2>
      </p>
    </>
  );
}
