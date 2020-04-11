import React from "react";
import "./App.css";
import { theme } from "./theme.js";

import { ThemeProvider } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import Aside from "./components/Aside";
import MainResume from "./components/MainResume";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Grid container spacing={6}>
          <Grid item xs={12} md={5} lg={4}>
            <Aside></Aside>
          </Grid>
          <Grid item xs={12} md={7} lg={8} role="main">
            <MainResume></MainResume>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
