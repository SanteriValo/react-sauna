import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";

const root = createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
