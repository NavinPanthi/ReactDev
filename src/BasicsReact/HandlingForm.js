import { useState } from "react";

export default function Form() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return <h2 class="text-success">That's right.</h2>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  }
  function handleTextAreaChange(e) {
    setAnswer(e.target.value);
  }
  function submitForm(answer) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() !== "lima";
        if (shouldError) {
          reject(new Error("Good guess. Try next time."));
        } else {
          resolve();
        }
      }, 2000);
    });
  }
  return (
    <div>
      <h2>City quiz</h2>
      <p>Which city are you living in?</p>
      <form onSubmit={handleSubmit}>
        <input
          value={answer}
          disabled={status === "submitting"}
          onChange={handleTextAreaChange}
        />
        <button
          type="submit"
          disabled={answer.length === 0 || status === "submitting"}
        >
          submit
        </button>
      </form>
      {error !== null && (
        <p className="text-danger bg-light">{error.message}</p>
      )}
    </div>
  );
}
