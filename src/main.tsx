import { createRoot } from "react-dom/client";
import "./index.css"
import App from "./App";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <App />
)