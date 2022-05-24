import React from "react";

const SearchHistory = ({ searchHistory }) => {
  return (
    <div>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <td className="is-size-">Search history</td>
          </tr>
        </thead>
        <tbody>
          {searchHistory &&
            searchHistory.map((search, index) => {
              return (
                <tr key={index}>
                  <td>{search}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchHistory;
