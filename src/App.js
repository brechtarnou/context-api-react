import { ThemeProvider } from "./context/ThemeContext";
import ComponentToReadContext from "./component/ComponentToReadContext";
import Component2ToReadContext from "./component/Component2ToReadContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="App">
          <ComponentToReadContext />
          <Component2ToReadContext />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
