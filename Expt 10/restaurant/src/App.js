import React, { useState } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  const searchRestaurants = async () => {
    let lat, lon;

    // simple city support
    if (city.toLowerCase() === "mumbai") {
      lat = 19.076;
      lon = 72.8777;
    } else if (city.toLowerCase() === "delhi") {
      lat = 28.7041;
      lon = 77.1025;
    } else {
      alert("Please enter Mumbai or Delhi");
      return;
    }

    try {
      const query = `
        [out:json];
        node["amenity"="restaurant"](${lat - 0.05},${lon - 0.05},${lat + 0.05},${lon + 0.05});
        out;
      `;

      const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

      const res = await axios.get(url);
      setRestaurants(res.data.elements);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>🍽️ Restaurant Finder</h2>

      <input
        type="text"
        placeholder="Enter city (Mumbai/Delhi)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: "10px", width: "200px" }}
      />

      <button
        onClick={searchRestaurants}
        style={{ marginLeft: "10px", padding: "10px" }}
      >
        Search
      </button>

      <div style={{ marginTop: "20px" }}>
        {restaurants.map((r) => (
          <div
            key={r.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px auto",
              padding: "10px",
              width: "60%",
              borderRadius: "8px",
              textAlign: "left",
            }}
          >
            <h3>🍴 {r.tags?.name || "Restaurant Name Not Available"}</h3>
            <p>📍 {city} Area Restaurant</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
