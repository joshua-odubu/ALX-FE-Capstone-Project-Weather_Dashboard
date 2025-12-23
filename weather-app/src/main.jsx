import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./tailwind.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter
  basename={
    import.meta.env.PROD
      ? "/ALX-FE-Capstone-Project-Weather_Dashboard"
      : "/"
  }
>
    <App />
  </BrowserRouter>
);