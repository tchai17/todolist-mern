import "./App.css";
import "./components/WelcomeMessage";
import WelcomeMessage from "./components/WelcomeMessage";
import UselessButton from "./components/UselessButton";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <>
      <WelcomeMessage />
      <div className="card flex flex-col items-center">
        <UselessButton />
        <div>
          <ToDoList />
        </div>
      </div>
    </>
  );
}

export default App;
