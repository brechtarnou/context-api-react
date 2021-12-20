import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";
import Layout from "./Layout";

const MySelect = styled(Form.Select)`
  width: 300px;
  color: black;
`;

const Home = () => {
  const { setTheme, theme } = useContext(ThemeContext);

  return (
    <Layout>
      <MySelect
        aria-label="Default select example"
        onChange={(e) => setTheme(e.target.value)}
        value={theme}
      >
        <option value="white">Light</option>
        <option value="black">Dark</option>
        <option value="navy">Navy</option>
      </MySelect>
    </Layout>
  );
};

export default Home;
