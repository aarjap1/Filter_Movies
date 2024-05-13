import "./App.css";
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
        <Navigation username={"Welcome " + username} toggle={toggleSignIn} />
      ) : (
        <Login toggle={toggleSignIn} />
      )}
    </>
  );
}

export default App;
