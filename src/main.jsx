import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TodoApp } from "./Contexts/TodoApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoApp>
      <App />
    </TodoApp>
  </StrictMode>
);
