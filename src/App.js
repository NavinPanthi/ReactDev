import "./App.css";

// PASSING EVENT HANDLERS AS PROPS .
function Button({ onClick, children }) {
  return <button className="p-3 m-3 btn btn-dark btn-lg" onClick={onClick}>{children}</button>;
}
function PlayButton({ movieName }) {
  function handlePlay() {
    alert(`Playing ${movieName}`);
  }
  return <Button onClick={handlePlay}>Play "{movieName}"</Button>;
}
function UploadButton() {
  return <Button onClick={() => alert("Uploading!")}>Upload image</Button>;
}
function Toolbar() {
  return (
    <div>
      <PlayButton movieName="ramsita" />
      <UploadButton />
    </div>
  );
}
export default function App() {
  return(
  <div className="App">
    <Toolbar />
  </div>
  );
}
