function SearchResult({ data }) {
  return (
    <>
      <button className="right">Sort A-Z</button>
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
          {data.docs.map((book, bookIndex) => {
            return (
              <tr key={bookIndex}>
                <td>cover</td>
                <td>{book.title}</td>
                <td>
                  {book.author_name.map((auth, authIndex) => {
                    return <p key={authIndex}>{auth}</p>;
                  })}
                </td>
                <td>
                  {book.first_publish_year}
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
