import React from "react";
import { Grid, Typography } from "@material-ui/core";

function PersonalInformation() {
  return (
    <>
      <Grid xs={12} item>
        <Typography variant="h2">Personal information</Typography>
      </Grid>
      <Grid xs={12} item container alignItems="center">
        <Grid xs={3} item className="text-bold-label">
          FULL NAME
        </Grid>
        <Grid xs={9} item className="text-content">
          Antonella Di Virgilio
        </Grid>
      </Grid>
      <Grid xs={12} item container alignItems="center">
        <Grid xs={3} item className="text-bold-label">
          EMAIL
        </Grid>
        <Grid xs={9} item className="text-content">
          divirgilioantonella@gmail.com
        </Grid>
      </Grid>
      <style>{`
        .text-content {
          font-size: 17px;
        }
        
        .text-bold-label {
          font-weight: 600;
          font-size: 15px;
        }
        `}</style>
    </>
  );
}

export default PersonalInformation;
