import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import { Link } from "react-router-dom";

const MapComponent = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [locationName, setLocationName] = useState("");

  useEffect(() => {
    // Fetch user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy,
        });

        // Example: Reverse Geocoding to get location name based on coordinates
        fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
        )
          .then((response) => response.json())
          .then((data) => {
            setLocationName(data.display_name);
          })
          .catch((error) => {
            console.error("Error fetching location name:", error);
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

  let initialZoom = 3; // Initial zoom level when user's location is not available
  if (userLocation) {
    mapCenter = [userLocation.lat, userLocation.lng];
    initialZoom = 20; // Zoom level when user's location is available
  }

  return (
    <div className="bg-primary">
      <MapContainer
        id="map"
        style={{ height: "100vh" }}
        center={mapCenter}
        zoom={initialZoom}
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
                Your current location. <br />
                {locationName}
                <br /> Lat: {userLocation.lat}, Lng: {userLocation.lng}
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

      {/* 2nd section */}
      <div className="border-2 border-grey rounded-md flex items-center justify-between text-justify px-5 py-3 my-10 mr-6">
        <div>
          <h1 className="text-xl font-semibold text-white pb-1">Unity Bank</h1>
          <p className="text-grey">This location is a bank...</p>
        </div>
        <div className="bg-purple text-white rounded-md text-center shadow-md ml-20 mt-4 p-2 w-48">
          <Link to="/contact" className="hover:text-primary">
            <input type="button" value="Check location" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
