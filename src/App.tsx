import "./App.css";
import Logger from "./components/Logger";
import Parent from "./components/Parent";
import { LoggerProvider } from "./contexts/LoggerContext";

function App() {
  return (
    <LoggerProvider>
      <div className="layout container">
        <Parent />
        <Logger />
      </div>
    </LoggerProvider>
  );
}

export default App;
