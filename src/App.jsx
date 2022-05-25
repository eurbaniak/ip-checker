import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import useFetchIP from "./hooks/useFetchIP";
import LocationMap from "./components/LocationMap";
import InformationAboutSearch from "./components/InformationAboutSearch";
import SearchHistory from "./components/SearchHistory";

const App = () => {
  const [query, setQuery] = useState("");
  const { ipInfo, getIpInfo, error, searchHistory, clearHistory } =
    useFetchIP(query);

  useEffect(getIpInfo, []);

  return (
    <div className="columns p-5 m-5">
      <div className="column is-vcentered is-8">
        <LocationMap ipInfo={ipInfo} error={error} />
        <Search setQuery={setQuery} getIpInfo={getIpInfo} error={error} />
      </div>
      <div className="column is-4">
        <InformationAboutSearch ipInfo={ipInfo} error={error} />
        <SearchHistory
          searchHistory={searchHistory}
          clearHistory={clearHistory}
        />
      </div>
    </div>
  );
};

export default App;
