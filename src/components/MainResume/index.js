import React from "react";
import { Grid, Paper, Typography, Divider } from "@material-ui/core";

import Presentation from "../Presentation";
import PersonalInformation from "../PersonalInformation";
import Language from "../Language";
import Skill from "../Skill";
import Experience from "../Experience";
import Education from "../Education";
import Icon from "../Icon";

function MainResume() {
  return (
    <>
      <Paper square elevation={3}>
        <Icon type="share" width={18} heigth={18}></Icon>
        <Presentation></Presentation>
        <Divider></Divider>
        <Grid item container xs={12}>
          <Grid item container xs={12} md={6}>
            <PersonalInformation></PersonalInformation>
          </Grid>
          <Grid item container xs={12} md={6}>
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
