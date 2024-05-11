import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
import Login from "./components/Login";
import Navigation from "./components/Dashboard";
import { useState } from "react";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [username, setUserName] = useState("Guest");

  const toggleSignIn = () => {
    setIsSignedIn((prev) => !prev);
  };

  return (
    <>
      {isSignedIn ? (
        <Navigation username={"Welcome " + username} />
      ) : (
        <Login toggle={toggleSignIn} />
      )}
    </>
  );
}

export default App;
