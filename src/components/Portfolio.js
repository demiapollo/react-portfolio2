import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: 20,
  },
  media: {
    height: 140,
  },
});

const projects = [
  {
    title: "Bulletin Bored",
    image: project1,
    githubRepo: "https://github.com/Badermah/bulletin-bored",
    deployedSite: "https://badermah.github.io/bulletin-bored/",
  },
  {
    title: "JavaScript Quiz",
    image: project2,
    githubRepo: "https://github.com/demiapollo/js-quiz",
    deployedSite: "https://demiapollo.github.io/js-quiz",
  },
  {
    title: "Weather Dashboard",
    image: project3,
    githubRepo: "https://github.com/demiapollo/weatherDashboard",
    deployedSite: "https://demiapollo.github.io/weatherDashboard/",
  },
  {
    title: "Password Generator",
    image: project4,
    githubRepo: "https://github.com/demiapollo/password_app",
    deployedSite: "https://demiapollo.github.io/password_app/",
  },
  {
    title: "Calendar App",
    image: project5,
    githubRepo: "https://github.com/demiapollo/calendarApp",
    deployedSite: "https://demiapollo.github.io/calendarApp/",
  },
  {
    title: "Rich Lifestyle",
    image: project6,
    githubRepo: "https://github.com/demiapollo/rich-life-style",
    deployedSite: "https://github.com/demiapollo/rich-life-style/tree/main",
  },
];

const ProjectCard = ({ title, image, githubRepo, deployedSite }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Button href={githubRepo} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </Button>
        <Button href={deployedSite} target="_blank" rel="noopener noreferrer">
          Deployed Site
        </Button>
      </CardContent>
    </Card>
  );
};

const ProjectList = () => {
  return (
    <Grid container spacing={2} xs={6} >
      <Grid item xs={8}>
        
      {projects.map((project, index) => (
        
        <ProjectCard key={index} {...project} />
      ))}
        
      </Grid>
    </Grid>
  );
};

const App = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        My Projects
      </Typography>
      <ProjectList />
    </div>
  );
};

export default App;
