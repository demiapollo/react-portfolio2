import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";

import project1 from "../assets/project1.png";

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
    title: "Project 2",
    image: "project2.jpg",
    githubRepo: "https://github.com/your-username/project2",
    deployedSite: "https://project2.com",
  },
  // Add more project objects here...
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
    <div>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
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
