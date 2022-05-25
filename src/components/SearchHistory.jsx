import React from "react";

const SearchHistory = ({ searchHistory, clearHistory }) => {
  return (
    <div className="table-container">
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <td className="is-flex is-align-items-center is-justify-content-space-between">
              Search history
              <button
                className="button is-small is-danger"
                onClick={clearHistory}
              >
                delete history
              </button>
            </td>
          </tr>
        </thead>
        <tbody>
          {searchHistory?.map((search, index) => {
            return (
              <tr key={index}>
                <td key={index}>{search}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchHistory;
