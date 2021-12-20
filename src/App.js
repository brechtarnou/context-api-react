import Dashboard from "./component/Dashboard";
import Home from "./component/Home";
import About from "./component/About";
import { Router } from "@reach/router";

import { database } from "./utils/database";

function App() {
  console.log(database);
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
