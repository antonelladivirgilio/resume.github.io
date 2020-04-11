import React from "react";
import { Grid, Typography } from "@material-ui/core";

function PersonalInformation() {
  return (
    <>
      <Grid xs={12} item>
        <Typography variant="h2">Personal information</Typography>
      </Grid>
      <Grid xs={12} item container alignItems="center">
        <Grid xs={12} md={3} item className="text-bold-label">
          <Typography className="text-bold-label" gutterBottom>
            FULL NAME
          </Typography>
        </Grid>
        <Grid xs={12} md={9} item className="text-content">
          <Typography gutterBottom>Antonella Di Virgilio</Typography>
        </Grid>
      </Grid>
      <Grid xs={12} item container alignItems="center">
        <Grid xs={12} md={3} item className="text-bold-label">
          <Typography className="text-bold-label" gutterBottom>
            EMAIL
          </Typography>
        </Grid>
        <Grid xs={12} md={9} item className="text-content">
          <Typography gutterBottom>divirgilioantonella@gmail.com</Typography>
        </Grid>
      </Grid>
      <style>{`
        .text-content {
          font-size: 17px;
        }
        `}</style>
    </>
  );
}

export default PersonalInformation;
