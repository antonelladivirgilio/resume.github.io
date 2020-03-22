import React from "react";
import { Grid, Paper, Typography, Divider, Hidden } from "@material-ui/core";

import Presentation from "../Presentation";
import PersonalInformation from "../PersonalInformation";
import Language from "../Language";
import Skill from "../Skill";
import Experience from "../Experience";
import Education from "../Education";

function MainResume() {
  return (
    <>
      <Paper square elevation={3}>
        <Presentation></Presentation>
        <Divider></Divider>
        <Grid item container xs={12}>
          <Grid item xs={12} lg={6}>
            <PersonalInformation></PersonalInformation>
          </Grid>
          <Hidden lgUp>
            <Grid item xs={12}>
              <Divider></Divider>
            </Grid>
          </Hidden>
          <Grid item container xs={12} lg={6}>
            <Language></Language>
          </Grid>
        </Grid>
        <Divider></Divider>
        <Grid item container xs={12}>
          <Skill></Skill>
        </Grid>
      </Paper>
      <Paper square elevation={3}>
        <Experience></Experience>
        <Divider></Divider>
        <Education></Education>
      </Paper>
    </>
  );
}

export default MainResume;
