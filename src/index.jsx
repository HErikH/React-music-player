import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SongsProvider from "./context/SongsContext";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <SongsProvider>
      <App />
    </SongsProvider>
);
