import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Tic Tac Tutorial Game</header>
      <hr />
      <Board />
    </div>
  );
}
function Board() {
  return(
  <div  className="d-flex flex-column">
    <div className="d-flex flex-row">
      <Square value={1} />
      <Square value={2} />
      <Square value={3} />
    </div>
    <div className="d-flex flex-row">
      <Square value={4} />
      <Square value={5} />
      <Square value={6} />
    </div>
    <div className="d-flex flex-row">
      <Square value={7} />
      <Square value={8} />
      <Square value={9} />
    </div>
     
  </div> 
  );
}
function Square({value}){
  function handleClick(){
    console.log('clicked!');
  }
  return(
      <button className="square"
      onClick={handleClick}>{value}</button> 
  );
}

export default App;
