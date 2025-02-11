import { useEffect, useRef } from "react";

function Map() {
  const mapRef = useRef(null); // Create a ref to store the map instance

  useEffect(() => {
    try {
      // Ensure Leaflet is available
      if (window.L) {
        if (!mapRef.current) {
          // Initialize the map only if it hasn't been initialized yet
          const map = window.L.map("map").setView([51.505, -0.09], 13); // Set default center

          window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors",
          }).addTo(map);

          // Store the map instance in the ref
          mapRef.current = map;
        }

        // Try to get the user's current location
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;

              // Set the map's center to the user's current location
              mapRef.current.setView([latitude, longitude], 13);

              // Create a custom red marker icon
              const redIcon = window.L.divIcon({
                className: "leaflet-div-icon",
                html: `<div style="background-color: red; border-radius: 50%; width: 25px; height: 25px; border: 2px solid white;"></div>`,
                iconSize: [25, 25],
                iconAnchor: [12, 12], // The center of the icon
                popupAnchor: [0, -20], // Adjust popup position above the marker
              });

              // Add the red marker at the user's location
              window.L.marker([latitude, longitude], { icon: redIcon })
                .addTo(mapRef.current)
                .bindPopup("You are here"); // Optional popup for the marker
            },
            (error) => {
              console.error("Error getting location:", error);
            }
          );
        } else {
          console.error("Geolocation is not supported by this browser.");
        }
      } else {
        console.error("Leaflet library is not available.");
      }
    } catch (error) {
      console.error("Error initializing the map:", error);
    }
  }, []); // Empty dependency array ensures it runs once after component mounts

  return (
    <div
      id="map"
      style={{
        width: "20vw", // Width is 20% of the viewport width (responsive)
        height: "20vw", // Height is 20% of the viewport width (responsive)
        borderRadius: "50%", // Makes the map circular
        marginTop: "20px",
        overflow: "hidden", // Ensures the map fits within the circular shape
        marginLeft: "auto", // Centers the map horizontally
        marginRight: "auto", // Centers the map horizontally
      }}
    ></div>
  );
}

export default Map;
