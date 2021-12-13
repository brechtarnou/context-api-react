import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Component2ToReadContext = () => {
  const themeContext = useContext(ThemeContext);

  return <div>{themeContext.theme} from component 2</div>;
};

export default Component2ToReadContext;
