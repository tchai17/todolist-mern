import "./App.css";
import "./components/WelcomeMessage";
import WelcomeMessage from "./components/WelcomeMessage";
import UselessButton from "./components/UselessButton";
import ToDoList from "./components/ToDoList";
import ConnectionTest from "./components/ConnectionTest";

function App() {
  return (
    <>
      <WelcomeMessage />
      <ToDoList />
      {/* <div className="card flex flex-col items-center">
        <UselessButton />
      </div> */}
    </>
  );
}

export default App;
