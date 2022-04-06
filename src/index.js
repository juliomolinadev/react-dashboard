import React from "react";
import { createRoot } from "react-dom/client";
import { ReactDashboard } from "./ReactDashboard";
import "./scss/app.scss";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<ReactDashboard />);
