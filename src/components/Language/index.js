import React from "react";
import { Grid, Typography, LinearProgress } from "@material-ui/core";

function Language() {
  return (
    <>
      <Typography variant="h2">Languages</Typography>
      <Grid xs={12} item>
        <span id="english-language">English</span>
      </Grid>
      <Grid xs={10} item>
        <LinearProgress
          variant="determinate"
          value={70}
          aria-describedby="english-language"
          aria-label="70%"
        />
      </Grid>
      <Grid xs={12} item>
        <span id="spanish-language">Spanish</span>
      </Grid>
      <Grid xs={10} item>
        <LinearProgress
          variant="determinate"
          value={100}
          aria-describedby="spanish-language"
          aria-label="100%"
        />
      </Grid>
      <Grid xs={12} item>
        <span id="japanese-language">Japanese</span>
      </Grid>
      <Grid xs={10} item>
        <LinearProgress
          variant="determinate"
          value={15}
          aria-describedby="japanese-language"
          aria-label="15%"
        />
      </Grid>
    </>
  );
}

export default Language;
