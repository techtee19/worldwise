import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // Assuming you have a global CSS file for styles
import "./leafletConfig.js";
import "leaflet/dist/leaflet.css"; // Add this line for Leaflet styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
