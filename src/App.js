import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Toolbar />
    </div>
  );
}

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
function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropogation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

function Toolbar() {
  return (
    <div
      className="container bg-primary"
      onClick={() => alert("Toolbar is clicked.")}
    >
      <Button onClick={() => alert("Playing movie.")}>Play movie.</Button>
      <Button onClick={() => alert("Playing music.")}> Play Song.</Button>
    </div>
  );
}
