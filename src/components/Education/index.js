import React from "react";
import { Grid, Typography } from "@material-ui/core";

function Education() {
  return (
    <>
      <Typography variant="h2">Education</Typography>
      <Grid xs={10} item container className="text-name">
        <ul>
          <li>
            <Typography className="text-bold-label">
              Centro Universitario de idiomas (dec 2018 - now)
            </Typography>
            <Typography gutterBottom>English</Typography>
          </li>
          <li>
            <Typography className="text-bold-label">
              Educación IT (sep 2016)
            </Typography>
            <Typography gutterBottom>AngularJS</Typography>
          </li>
          <li>
            <Typography className="text-bold-label">
              UTN FRBA (aug 2016 - sep 2016)
            </Typography>
            <Typography gutterBottom>Advanced Front End Developer</Typography>
          </li>
        </ul>
      </Grid>
    </>
  );
}

export default Education;
