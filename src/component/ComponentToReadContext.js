import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ComponentToReadContext = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <div>Component 1</div>
      <button onClick={() => themeContext.setTheme("aquarel")}>Click me</button>
    </>
  );
};

export default ComponentToReadContext;
