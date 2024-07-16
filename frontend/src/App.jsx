import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./components/WelcomeMessage";
import WelcomeMessage from "./components/WelcomeMessage";
import UselessButton from "./components/UselessButton";

function App() {
  return (
    <>
      <WelcomeMessage />
      <div className="card flex flex-col items-center">
        <UselessButton />
      </div>
    </>
  );
}

export default App;
