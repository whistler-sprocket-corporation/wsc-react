import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/App.tsx";
import "./styles/index.scss";

createRoot(document.querySelector("#root") ?? new Element()).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
