import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./components/WelcomeMessage";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <WelcomeMessage />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
