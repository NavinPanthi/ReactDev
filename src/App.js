import "./App.css";
import { useState } from "react";
// import { sculptureList } from "./data";

// PASSING EVENT HANDLEChange AS PROPS .
// function Button({ onClick, children }) {
//   return <button className="p-3 m-3 btn btn-dark btn-lg" onClick={onClick}>{children}</button>;
// }
// function PlayButton({ movieName }) {
//   function handleChange() {
//     alert(`Playing ${movieName}`);
//   }
//   return <Button onClick={handleChange}>Play "{movieName}"</Button>;
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

// STOPPING PROPAGATION i.e. auto event handleChange pass to parent element.
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

//   function handleChange() {
//     if (index < sculptureList.length - 1) {
//       setIndex(index + 1);
//       console.log(index);
//     } else {
//       setIsDisabled(!isDisabled);
//     }
//   }
//   function handleChange() {
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
//         <Button onClick={handleChange} disabled={isDisabled}>
//           Next
//         </Button>
//         <Button onClick={handleChange} disabled={isDisabled}>
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
//   function handleFirstChange(e) {
//     setFirstName(e.target.value);
//   }
//   function handleSecondChange(e) {
//     setSecondName(e.target.value);
//   }
//   function handleResetChange(){
//     setFirstName("");
//     setSecondName("");
//   }
//   return (
//     <>
//       <input
//         value={firstName}
//         placeholder="FirstName"
//         onChange={handleFirstChange}
//       />
//       <input
//         value={secondName}
//         placeholder="FirstName"
//         onChange={handleSecondChange}
//       />
//       <p>Hi {firstName + secondName} </p>
//       <button onClick={handleResetChange}>
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

//   function handleChange(e) {
//     e.preventDefault();
//     setTimeout(() => {
//       alert(`You said ${message} to  ${to}  .`);
//     }, 3000);
//   }

//   return (
//     <>
//       <form onSubmit={handleChange}>
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
// export default function Form() {
//   const [person, setPerson] = useState({
//     firstName: "Navin",
//     lastName: "Panthi",
//     email: "panthinabin341@gmail.com",
//   });

//   function handleChange(e) {
//     setPerson({
//       ...person,
//       [e.target.name]: e.target.value,
//     });
//   }

//   return (
//     <>
//       <form>
//         <h4>First Name: </h4>
//         <input
//           value={person.firstName}
//           name="firstName"
//           onChange={handleChange}
//         />
//         <h4>last Name: </h4>
//         <input
//           value={person.lastName}
//           name="lastName"
//           onChange={handleChange}
//         />
//         <h4>Email: </h4>
//         <input
//           type="Email"
//           value={person.email}
//           name="email"
//           onChange={handleChange}
//         />
//       </form>
//       <p>
//         <h2 className="mt-4">
//           {person.firstName} {''} {person.lastName} {person.email}{" "}
//         </h2>
//       </p>
//     </>
//   );
// }

// ADDING AN ITEM TO ARRAY USING STATE and removing too
let nextId = 0;

export default function Artists() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h2>Artists</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => setArtists([...artists, { id: nextId++, name: name }])}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {" "}
            {artist.name} {""}
            <button
              onClick={() => {
                setArtists(artists.filter((a) => a.id !== artist.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
