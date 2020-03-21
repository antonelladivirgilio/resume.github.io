import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import Icon from "../Icon";

function Presentation() {
  return (
    <>
      <Grid item container>
        <Typography component="h1" variant="h1" gutterBottom>
          Hello there
        </Typography>
      </Grid>
      <Grid item container>
        <Typography variant="body1" gutterBottom>
          I have five years of hands-on experience efficiently coding websites
          and applications using modern HTML, CSS with preprocessors, and
          JavaScript. As a web developer focused on customer satisfaction I am
          actively seeking out new technologies and stay up-to-date on industry
          trends and advancements.
        </Typography>
      </Grid>
      <Grid item container>
        <Button
          variant="outlined"
          startIcon={
            <Icon type="share" width={18} heigth={18} fill="#000"></Icon>
          }
        >
          Share
        </Button>
      </Grid>
    </>
  );
}

export default Presentation;
