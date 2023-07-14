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

  const handleDownload = () => {
    
    const filePath = "../assets/Resume_DEMIREL_TECH.pdf";

    fetch(filePath)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement("a");
        a.href = url;
        a.download = "RESUME_DEMIREL.pdf"; 
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error downloading the PDF:", error);
      });
  };

  return (
    <div className={classes.root}>
      <iframe src={path} width="100%" height="100%" title="Resume DEMIREL" />

      <Button variant="contained" color="primary" onClick={handleDownload}>
        Download
      </Button>
    </div>
  );
};

export default Resume;
