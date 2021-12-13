import React, { useState } from "react";

export const ThemeContext = React.createContext("dark");

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
