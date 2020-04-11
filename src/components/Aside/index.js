import React from "react";

import { Grid, Avatar, Paper, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "../Icon";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
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
          <Typography
            component="p"
            gutterBottom
            lang="it"
            className="text-name"
          >
            Antonella Di Virgilio
          </Typography>
        </Grid>
        <Grid item container justify="center">
          <Typography variant="body1" gutterBottom className="text-profession">
            Developer
          </Typography>
        </Grid>
        <Grid item container justify="center" spacing={2}>
          <Grid item>
            <a
              href="https://github.com/antonelladivirgilio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="go to github profile"
            >
              <Icon
                type="github"
                width={25}
                heigth={25}
                fill="#000"
                viewBox="0 0 568 568"
                alt="github logo"
              ></Icon>
            </a>
          </Grid>
          <Grid item>
            <a
              href="https://www.linkedin.com/in/divirgilioantonella/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="go to linkedin profile"
            >
              <Icon
                type="linkedin"
                width={25}
                heigth={25}
                fill="#000"
                viewBox="0 0 512 512"
                alt="linkedin logo"
              ></Icon>
            </a>
          </Grid>
        </Grid>
        <Grid item container justify="center">
          <Button variant="contained">
            <a
              href="./files/AntonellaDiVirgilio-Resume.pdf"
              class="btn btn-default btn-lg"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download CV
            </a>
          </Button>
        </Grid>
      </Paper>
    </>
  );
}

export default Aside;
