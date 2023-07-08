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
  //   pdfViewer: {
  //     width: "100%",
  //     height: "calc(100vh - 500px)", // Adjust the height as needed
  //     marginBottom: theme.spacing(2),
  //   },
}));

const Resume = () => {
  const classes = useStyles();

  const handleDownload = () => {
    // Logic for downloading the PDF file
    // Replace 'path/to/pdf/file.pdf' with your actual PDF file path

    const filePath = "../assets/Resume_DEMIREL_TECH.pdf"; // Replace with the path to your local PDF file

    fetch(filePath)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement("a");
        a.href = url;
        a.download = "RESUME_DEMIREL.pdf"; // Replace with the desired file name
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
