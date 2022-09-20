import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "@styles/main.scss";

const root = document.getElementById("root");
const newRoot = ReactDOM.createRoot(root);
newRoot.render(
	<StrictMode>
		<App />
	</StrictMode>
);
