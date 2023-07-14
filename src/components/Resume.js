// error with the downloaded pdf.

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import path from "../assets/Resume_DEMIREL_TECH.pdf";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(2),
    height: "100vh",
  },
}));

const Resume = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <iframe src={path} width="100%" height="100%" title="Resume DEMIREL" />
      <a href="./Resume_DEMIREL_TECH.pdf" download>
      <Button variant="contained" color="primary" >
        Download
      </Button>
      </a>
    </div>
  );
};

export default Resume;
