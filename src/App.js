import { useContext } from "react";
import Dashboard from "./component/Dashboard";
import Home from "./component/Home";
import About from "./component/About";
import { Router } from "@reach/router";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Dashboard path="/dashboard" />
        <About path="/about" />
      </Router>
    </div>
  );
}

export default App;
