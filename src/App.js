import "./App.css";
// import { useState } from "react";
import {useImmer} from "use-immer";
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
// let nextId = 0;

// export default function Artists() {
//   const [name, setName] = useState("");
//   const [artists, setArtists] = useState([]);

//   return (
//     <>
//       <h2>Artists</h2>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <button
//         onClick={() => setArtists([...artists, { id: nextId++, name: name }])}
//       >
//         Add
//       </button>
//       <ul>
//         {artists.map((artist) => (
//           <li key={artist.id}>
//             {" "}
//             {artist.name} {""}
//             <button
//               onClick={() => {
//                 setArtists(artists.filter((a) => a.id !== artist.id));
//               }}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

//TRANSFORMING AN ARRAY

// let initialShapes = [
//   { id: 0, type: "circle", x: 50, y: 100 },
//   { id: 1, type: "square", x: 150, y: 100 },
//   { id: 2, type: "circle", x: 250, y: 100 },
// ];

// export default function ShapeEditor() {
//   const [shapes, setShapes] = useState(initialShapes);

//   function handleClick() {
//     const nextShapes = shapes.map((shape) => {
//       if (shape.type === "square") {
//         return {
//           ...shape,
//           x: shape.x + 5,
//         };
//       } else {
//         return {
//           ...shape,
//           y: shape.y + 5,
//         };
//       }
//     });
//     setShapes(nextShapes);
//   }

//   return (
//     <>
//       <button onClick={handleClick}> Move circle down.</button>
//       {shapes.map((shape) => (
//         <div
//           key={shape.id}
//           style={{
//             background: "purple",
//             position: "absolute",
//             left: shape.x,
//             top: shape.y,
//             borderRadius: shape.type === "circle" ? "50%" : "",
//             width: 20,
//             height: 20,
//           }}
//         />
//       ))}
//     </>
//   );
// }

// Replacing items in an array
// let initialCounters = [0, 0, 0];
// // Initial state of counters is zero for all three buttons initially
// export default function CounterList() {
//   const [counters, setCounters] = useState(initialCounters);
//   function handleClick(index) {
//     const nextCounters = counters.map((counter, i) => {
//       if (index === i) {
//         return counter + 1;
//       } else {
//         return counter;
//       }
//     });
//     setCounters(nextCounters);
//   }
//   return (
//     <>
//       <ul>
//         {counters.map((counter, i) => (
//           <li key={i}>
//             {counter}
//             <button onClick={()=>{handleClick(i)}}>+1</button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

//Inserting to an array
// let nextID = 3;
// const initialArtists = [
//   { id: 0, name: "Ram" },
//   { id: 1, name: "Shyam" },
//   { id: 2, name: "Hari" },
// ];
// export default function Lists() {
//   const [name, setName] = useState("");
//   const [artists, setArtists] = useState(initialArtists);
//   function handleClick() {
//     const insertAt = 1;
//     const nextArtists = [
//       ...artists.slice(0,insertAt),
//       {id:nextID++, name:name},
//       ...artists.slice(insertAt)
//     ];
//     setArtists(nextArtists);
//     setName('');
//     console.log(artists);

//   }
//   return (
//     <>
//       <h2>Artists Lists:</h2>
//       <br />
//       <input value={name} onChange={e => setName(e.target.value)} />
//       <button onClick={handleClick}>Insert</button>
//       <ul>
//         {artists.map((artist) => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

//Updating objects inside array.
// let nextId = 3;
// const initialList = [
//   { id: 0, title: "ram", seen: false },
//   { id: 1, title: "hari", seen: true },
//   { id: 2, title: "shyaam", seen: false },
// ];

// export default function BucketList() {
//   const [myList, setMyList] = useState(initialList);
//   const [yourList, setYourList] = useState(initialList);
//   function handleToggleMyList(artworkID, nextSeen) {
//     setMyList(
//       myList.map((artwork) => {
//         if (artwork.id === artworkID) {
//           return { ...artwork, seen: nextSeen };
//         }
//         return artwork;
//       })
//     );
//   }
//   function handleToggleYourList(artworkID, nextSeen) {
//     setYourList(
//       yourList.map((artwork) => {
//         if (artwork.id === artworkID) {
//           return { ...artwork, seen: nextSeen };
//         }
//         return artwork;
//       })
//     );
//   }
//   return (
//     <>
//       <h2>My art of list</h2>
//       <ItemList artworks={myList} onToggle={handleToggleMyList} />
//       <h2>Your art of list</h2>
//       <ItemList artworks={yourList} onToggle={handleToggleYourList} />
//     </>
//   );
// }

// function ItemList({ artworks, onToggle }) {
//   return (
//     <ul>
//       {artworks.map((artwork) => (
//         <li key={artwork.id}>
//           <label>
//             <input
//               type="checkbox"
//               checked={artwork.seen}
//               onChange={(e) => {
//                 onToggle(artwork.id, e.target.checked);
//               }}
//             />
//             {artwork.title}
//           </label>
//         </li>
//       ))}
//     </ul>
//   );
// }

//Updating objects inside arrays with immer.

const initialList = [
  { id: 0, title: "ram", seen: false },
  { id: 1, title: "hari", seen: true },
  { id: 2, title: "shyaam", seen: false },
];

export default function BucketList() {
  const [myList, updateMyList] = useImmer(initialList);
  const [yourList, updateYourList] = useImmer(initialList);
  function handleToggleMyList(artworkID, nextSeen) {
    updateMyList((draft) => {
      const artwork = draft.find((a) => a.id === artworkID);
      artwork.seen = nextSeen;
    });
  }

    //update yourlist using the same approach as above but for different state variable `yourList`
    function handleToggleYourList(artworkID, nextSeen) {
      updateYourList((draft)=>{
        const artwork = draft.find((a) => a.id === artworkID);
        artwork.seen = nextSeen;
      });
    }
  
  return (
    <>
      <h2>My art of list</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2>Your art of list</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </>
  );
  }

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
