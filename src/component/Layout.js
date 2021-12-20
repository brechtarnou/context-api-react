import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "@reach/router";

const ColorWrapper = styled.div`
  color: ${(props) => (props.theme === "light" ? "black" : "white")};
  background-color: ${(props) => props.theme};
`;

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ColorWrapper theme={theme}>
      <nav className={`${theme === "light" ? "dark" : "night"}`}>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/about">About</Link>
      </nav>
      {children}
    </ColorWrapper>
  );
};

export default Layout;
