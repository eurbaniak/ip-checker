import React, { useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMap } from "react-leaflet/hooks";

const LocationMap = ({ ipInfo, error }) => {
  const position = useMemo(() => {
    if (ipInfo && !error) {
      return [ipInfo.lat, ipInfo.lon];
    }
    return [0, 0];
  }, [ipInfo]);

  const ChangeMapView = ({ position }) => {
    const map = useMap();
    map.flyTo(position, 12);
    return null;
  };

  return (
    <div className="column is-10">
      <MapContainer
        style={{ width: "100%", height: 500 }}
        center={position}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ChangeMapView position={position} />
        <Marker position={position}>
          <Popup>
            ip: {ipInfo?.ip} <br />
            city: {ipInfo?.city} <br />
            country: {ipInfo?.country} <br />
            region: {ipInfo?.region} <br />
            zip-code: {ipInfo?.zip} <br />
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;
