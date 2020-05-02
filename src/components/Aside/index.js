import React from "react";

import { Grid, Avatar, Paper, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "../Icon";

import avatarImage from "../../assets/avatar.JPG";

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
          <div
            role="img"
            aria-label="face"
            className={`${classes.large} avatar`}
          ></div>
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
                width={30}
                heigth={30}
                fill="#BCD915"
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
                width={30}
                heigth={30}
                fill="#BCD915"
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
              className="btn btn-default btn-lg"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download CV
            </a>
          </Button>
        </Grid>
      </Paper>
      <style>{`        
          .avatar {         
            box-shadow: 13px 11px 0px #BCD915;  
            border-radius: 3px;
            background: url(${avatarImage}) 50%/cover no-repeat;         
            margin: 0 0 40px;
          }        
        `}</style>
    </>
  );
}

export default Aside;
