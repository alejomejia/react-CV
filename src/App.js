import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "./views/Layout";
import Landing from "./views/Landing";

import THEME from "./config/theme";
import GlobalCSS from "./config/global-css";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalCSS />
      <Layout>
        <Landing />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
