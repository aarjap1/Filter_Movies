import "./App.css";
import Login from "./components/Login";
import Navigation from "./components/Dashboard";
import { useState } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleSignIn = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <Navigation /> : <Login toggle={toggleSignIn} />}</>
  );
}

export default App;
