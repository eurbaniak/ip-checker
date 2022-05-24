import React from "react";

const InformationAboutSearch = ({ ipInfo, error }) => {
  if (!ipInfo) return null;
  const queryKeys = Object.keys(ipInfo);

  const filteredKeys = queryKeys.filter((key) => {
    return key !== "status" && key !== "lat" && key !== "lon" && key !== "as";
  });

  return (
    <div className="box has-text-white has-background-dark">
      <h1 className="is-size-3">Location Info</h1>
      {error && (
        <div className="notification is-danger">Something went wrong!</div>
      )}
      {!error &&
        filteredKeys.map((key, index) => {
          return (
            <p className="is-size-5" key={index}>
              {key}: {ipInfo[key] ? ipInfo[key] : "-"}
            </p>
          );
        })}
    </div>
  );
};

export default InformationAboutSearch;
