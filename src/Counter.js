import { useState } from "react";

export default function Counter() {
  const [isFancy, setIsFancy] = useState(false);
  return (
    <>
      <div className="d-flex flex-row">
        {isFancy ? <CountDiv isFancy={true} /> : <CountDiv isFancy={false} />}
      </div>
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={(e) => {
            setIsFancy(e.target.checked);
          }}
        />
        Set fancy
      </label>
    </>
  );
}

function CountDiv({isFancy}) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "card bg-primary";
  if (hover) {
    className += "bg-light";
  }
  if(isFancy){
    className+=" border-danger";
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <div class="card-body">
        <h5 class="card-title">{score}</h5>
        <button onClick={() => setScore(score + 1)}>Add one</button>
      </div>
    </div>
  );
}
