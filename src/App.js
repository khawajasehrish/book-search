import React, { useState } from "react";
import { ErrorComponent } from "./ErrorComponent";
import { SearchResult } from "./SearchResult";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [valid, setValid] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const runFetch = async (url, options) => {
    setIsLoading(true);
    try {
      const res = await fetch(url, options);
      const json = await res.json();
      setData(json);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  function handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    setInput(value);
  }
  function handleSearch() {
    input.length > 0 ? setValid(true) : setValid(false);
    if (input.length > 0) {
      let book = input.replaceAll(" ", "+");
      let url = "http://openlibrary.org/search.json?title=" + book;
      runFetch(url, {});
    }
  }
  return (
    <div role="main">
      <div className="App">
        <h1>Book Searching Tool</h1>
        <div>
          <label>Enter book title</label>
          <div className="book-text">
            <input
              id="book-title"
              name="book"
              type="text"
              placeholder="Book name"
              className={valid ? "" : "error-input"}
              value={input}
              required
              onChange={handleInputChange}
              aria-invalid={valid ? "false" : "true"}
              aria-describedby={valid ? "" : "err-book"}
            />
            {valid ? null : (
              <ErrorComponent text="Please enter book title" id="err-book" />
            )}
          </div>
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      {data ? <SearchResult data={data} /> : null}
    </div>
  );
}

export default App;
