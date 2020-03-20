import React from "react";

import { Grid, Avatar, Paper, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20)
  }
}));

function Aside() {
  const classes = useStyles();
  return (
    <>
      <Paper square role="complementary" elevation={3}>
        <Grid item container justify="center">
          <Avatar
            alt="face image"
            src="/static/images/avatar/1.jpg"
            className={classes.large}
          />
        </Grid>
        <Grid item container justify="center">
          <Typography component="p" gutterBottom lang="it">
            Antonella Di Virgilio
          </Typography>
        </Grid>
        <Grid item container justify="center">
          <Typography variant="body1" gutterBottom>
            Developer
          </Typography>
        </Grid>
        <Grid item container justify="center">
          <Typography variant="body1" gutterBottom>
            redes sociales
          </Typography>
        </Grid>
        <Grid item container justify="center">
          <Button variant="contained">Download CV</Button>
        </Grid>
      </Paper>
    </>
  );
}

export default Aside;
