import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://www.reddit.com/api/search_reddit_names.json?query=${query}`
      );
      const data = await response.json();
      setResults(data.names);
    };

    if (query) {
      fetchData();
    }
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Reddit"
        value={query}
        onChange={handleInputChange}
      />
      {results.length > 0 && (
        <ul>
          {results.map((result) => (
            <li key={result}>{result}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;

