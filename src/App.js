import React, { useState } from "react";
import { ErrorComponent } from "./ErrorComponent";
import { SearchResult } from "./SearchResult";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [valid, setValid] = useState(true);
  const [data, setData] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getData = async (url, options) => {
    setIsLoading(true); // show spinner
    try {
      const res = await fetch(url, options);
      const json = await res.json();
      sanitizeResponse(json);
      setIsLoading(false); // hide spinner
    } catch (error) {
      console.log(error);
      setError(error);
      // redirect to error page if any
    }
  };

  
  /* async function fetchImage(url) {
    const img = new Image();
    return new Promise((res, rej) => {
      img.onload = () => res(img);
      img.onerror = (e) => rej(e);
      img.src = url;
    });
  }

  async function getCover(isbn) {
    const img = await fetchImage(
      "https://covers.openlibrary.org/b/id/1588361144-S.jpg"
    );
    const w = img.width;
    const h = img.height;
    console.log(w, h);
    return img;
  } */

  const sanitizeResponse = (response) => {
    let record;
    record = response.docs.map((book) => {
      return {
        title: book.title ? book.title : "",
        publishYear: book.first_publish_year ? book.first_publish_year : [],
        author: book.author_name ? book.author_name : [],
        isbn: book.isbn ? book.isbn[0] : [], // there is a list of isbn number returned. I am taking first one. we can change this according to the requirements.
      };
    });
    setData(record);
    setShowResults(true);
  };

  function handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    setInput(value);
    setShowResults(false);
  }

  function handleSearch() {
    if (input.length > 0) {
      setValid(true);
      let book = input.replaceAll(" ", "+");
      let url = "http://openlibrary.org/search.json?title=" + book;
      getData(url, {});
    } else {
      setValid(false);
      setShowResults(false);
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
              aria-invalid={valid || !error ? "false" : "true"}
              aria-describedby={valid || !error ? "" : "err-book"}
            />
            {valid ? null : (
              <ErrorComponent text="Please enter book title" id="err-book" />
            )}
          </div>
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      {showResults ? <SearchResult data={data} /> : null}
    </div>
  );
}

export default App;
