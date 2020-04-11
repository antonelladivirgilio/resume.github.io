import React from "react";
import { Grid, Typography, LinearProgress } from "@material-ui/core";

function Skill() {
  return (
    <>
      <Grid item container xs={12}>
        <Typography variant="h2">Skills</Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Grid xs={12} item>
          <span id="js">JavaScript</span>
        </Grid>
        <Grid xs={10} item>
          <LinearProgress
            variant="determinate"
            value={75}
            aria-describedby="js"
            aria-label="75%"
          />
        </Grid>
        <Grid xs={12} item>
          <span id="react">React js</span>
        </Grid>
        <Grid xs={10} item>
          <LinearProgress
            variant="determinate"
            value={70}
            aria-describedby="react"
            aria-label="70%"
          />
        </Grid>
        <Grid xs={12} item>
          <span id="angular">Angular js</span>
        </Grid>
        <Grid xs={10} item>
          <LinearProgress
            variant="determinate"
            value={85}
            aria-describedby="angular"
            aria-label="85%"
          />
        </Grid>
        <Grid xs={12} item>
          <span id="git">Git</span>
        </Grid>
        <Grid xs={10} item>
          <LinearProgress
            variant="determinate"
            value={70}
            aria-describedby="git"
            aria-label="70%"
          />
        </Grid>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Grid xs={12} item>
          <span id="css">CSS</span>
        </Grid>
        <Grid xs={10} item>
          <LinearProgress
            variant="determinate"
            value={90}
            aria-describedby="css"
            aria-label="90%"
          />
        </Grid>
        <Grid xs={12} item>
          <span id="less">Less</span>
        </Grid>
        <Grid xs={10} item>
          <LinearProgress
            variant="determinate"
            value={80}
            aria-describedby="less"
            aria-label="80%"
          />
        </Grid>
        <Grid xs={12} item>
          <span id="sass">Sass</span>
        </Grid>
        <Grid xs={10} item>
          <LinearProgress
            variant="determinate"
            value={80}
            aria-describedby="sass"
            aria-label="80%"
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Skill;
