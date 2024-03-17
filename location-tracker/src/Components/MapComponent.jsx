import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";

const MapComponent = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Fetch user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy,
        });
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  }, []);

  let mapCenter = [50.5, 30.5];
  if (userLocation) {
    mapCenter = [userLocation.lat, userLocation.lng];
  }

  return (
    <div className="bg-primary">
      <MapContainer
        id="map"
        style={{ height: "100vh" }}
        center={mapCenter}
        zoom={userLocation ? 13 : 3}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {userLocation && (
          <>
            <Marker position={[userLocation.lat, userLocation.lng]}>
              <Popup>
                Your current location. <br /> Lat: {userLocation.lat}, Lng:{" "}
                {userLocation.lng}
              </Popup>
            </Marker>
            <Circle
              center={[userLocation.lat, userLocation.lng]}
              radius={userLocation.accuracy}
              fillColor="#f03"
              fillOpacity={0.5}
            />
          </>
        )}
      </MapContainer>
    </div>
  );
};

export default MapComponent;


