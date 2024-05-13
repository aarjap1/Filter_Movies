import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./components/Login.jsx";
import Navigation from "./components/Dashboard.jsx";
import Error from "./components/Error.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Navigation />} />
      <Route path="" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1028426619274-mjhob9l103hsas4fjpcif0lsbjg337rq.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
    ;
  </React.StrictMode>
);
