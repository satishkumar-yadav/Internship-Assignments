import { useState } from "react";
import "./app.css"; // Use basic styles below

const QUOTES = [
  "You inspire us to learn every day!",
  "Thank you for being our guiding light.",
  "Teachers plant the seeds of knowledge that last forever.",
  "Happy Teachers' Day, Rachit Sir! Your dedication matters.",
  "Learning is a journey, thank you for being our guide."
];

function App() {
  const [quote, setQuote] = useState("");
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [show, setShow] = useState(false);

  function showRandomQuote() {
    const idq = Math.floor(Math.random() * QUOTES.length);
    setQuote(QUOTES[idq]);
    setShow(!show);
  }

  function submitNote(e) {
    e.preventDefault();
    //console.log(note.trim().length);
    if (note.trim().length) {
      setNotes([...notes, note]);
      setNote("");
    }
    alert("Write a note First!");
  }

  return (
    <div className="card">

      <h1 className="animated-text">🌟 Happy Teachers' Day, Rachit Sir! 🌟</h1>
      <button onClick={showRandomQuote} style={{ marginBottom: "1em" }}> {show ? "Hide message" : "Show a message"}</button>
      {quote && show && <p className="quote">{quote}</p>}

      <form onSubmit={submitNote} className="gratitude-form">
        <input
          type="text"
          value={note}
          onChange={e => setNote(e.target.value)}
          placeholder="Write a thank you note..."
        />
        <button type="submit">Add Note</button>
      </form>

      {notes.length > 0 && (
        <div>
          <h3>Your Notes:</h3>
          <ul>
            {notes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

export default App;
