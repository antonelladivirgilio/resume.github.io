import React from "react";
import { Grid, Typography } from "@material-ui/core";

function Experience() {
  return (
    <>
      <Typography variant="h2">Work experience</Typography>

      <Grid xs={10} item className="text-name">
        <ul>
          <li>
            <Typography className="text-bold-label">
              FRONT END DEVELOPER - Cognizant (feb 2019 - now)
            </Typography>
            <Typography gutterBottom>
              GitLab. Github. OpenShift. Camunda. React. Node. CSS. Mongo.
              NGINX. Zeplin. Lunacy
            </Typography>
          </li>
          <li>
            <Typography className="text-bold-label">
              FRONT END DEVELOPER - IT Resources S.A (mar 2017 - feb 2019)
            </Typography>
            <Typography gutterBottom>
              AngularJS. Git. LESS. Team Foundation Server. JavaScript.
              TypeScript. SASS. CSS. Gatsby
            </Typography>
          </li>
          <li>
            <Typography className="text-bold-label">
              FRONT END DEVELOPER - Inmoove (mar 2016 - feb 2017)
            </Typography>
            <Typography gutterBottom>
              AngularJS. Git. SVN. LESS. Framework7. JavaScript. Bootstrap.
              SASS. CSS. PhoneGap. Google Maps. Leaflet. Mapbox
            </Typography>
          </li>
          <li>
            <Typography className="text-bold-label">
              UX DEVELOPER - Technisys (jul 2015 - feb 2016)
            </Typography>
            <Typography gutterBottom>
              JavaScript. CSS. HTML5. SVN. Scrum. JIRA. Accessible web
              components. NVDA. VoiceOver. TalkBack
            </Typography>
          </li>
        </ul>
      </Grid>
    </>
  );
}

export default Experience;
