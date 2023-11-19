import { useState } from "react";
import "./search.style.css";

const Search = ({ placeholder, onSetQuery = () => {} }) => {
  const [query, setQuery] = useState("");

  function handleSetQuery(e) {
    setQuery(e.target.value);
    onSetQuery(e.target.value);
  }

  return (
    <div className="search">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <input
        type="search"
        placeholder={placeholder}
        className="search__input"
        value={query}
        onChange={handleSetQuery}
      />
    </div>
  );
};

export default Search;
