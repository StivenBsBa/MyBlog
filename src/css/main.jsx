import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import "./css/animations.css"; // Importa las animaciones
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
