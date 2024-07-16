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
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white font-bold py-2 px-4 rounded"
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
