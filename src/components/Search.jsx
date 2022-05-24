import React from "react";

const Search = ({ setQuery, getIpInfo, error }) => {
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="field has-addons column is-10">
      <div className="control is-expanded">
        <input
          type="text"
          className={`input ${error ? "is-danger" : "is-dark"}`}
          placeholder="Search for an IP (123.456.789.123)"
          onChange={handleChange}
        />
        {error && <p className="help is-danger">{error}</p>}
      </div>
      <div className="control">
        <button
          className={`button ${error ? "is-danger" : "is-dark"}`}
          onClick={getIpInfo}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
