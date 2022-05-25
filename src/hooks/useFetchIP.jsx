import axios from "axios";
import { useState, useCallback, useEffect } from "react";

const useFetchIP = (ip) => {
  const [ipInfo, setIpInfo] = useState(null);
  const [error, setError] = useState(null);
  const [searchHistory, setSearchHistory] = useState(
    sessionStorage.getItem("searchHistory")
      ? JSON.parse(sessionStorage.getItem("searchHistory"))
      : []
  );

  const getIpInfo = useCallback(() => {
    setError(null);
    axios.get(`http://ip-api.com/json/${ip}`).then((res) => {
      if (res.data.status === "fail") {
        setError(res.data.message);
      }
      if (res.data.status === "success") {
        setSearchHistory([...searchHistory, res.data.query]);
      }
      setIpInfo({
        ip: res.data.query,
        city: res.data.city,
        country: res.data.country,
        region: res.data.regionName,
        provider: res.data.org,
        zip: res.data.zip,
        lat: res.data.lat,
        lon: res.data.lon,
        as: res.data.as,
        countryCode: res.data.countryCode,
        timezone: res.data.timezone,
      });
    });
  }, [ip]);

  useEffect(() => {
    sessionStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);

  const clearHistory = useCallback(() => {
    sessionStorage.clear();
    setSearchHistory([]);
  }, []);

  return { ipInfo, getIpInfo, error, searchHistory, clearHistory };
};

export default useFetchIP;
