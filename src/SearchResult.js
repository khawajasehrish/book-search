import React, { useState } from "react";

function SearchResult({ data }) {
const [table,setTable] = useState(data);
const sortData = () => {
let sortedData = [...data];
sortedData.sort((a, b) => a.title.localeCompare(b.title));
setTable(sortedData);
}
  return (
    <>
      <button className="right"onClick={sortData}>Sort A-Z</button>
      <table id="result">
        <thead>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Author</th>
            <th>Publish Date</th>
          </tr>
        </thead>
        <tbody>
          {table.map((book, bookIndex) => {
            let img = "https://covers.openlibrary.org/b/isbn/" + book.isbn + "-S.jpg"
            return (
              <tr key={bookIndex}>
                <td><img src={img} alt="book cover"/>
                </td>
                <td>{book.title}</td>
                <td>
                  {book.author.map((auth, authIndex) => {
                    return <p key={authIndex}>{auth}</p>;
                  })}
                </td>
                <td>
                  {book.publishYear}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export { SearchResult };
