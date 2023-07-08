import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { PDFViewer } from '@react-pdf/renderer';

import path from '../assets/Resume_DEMIREL_TECH.pdf'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(2),
  },
  pdfViewer: {
    width: '100%',
    height: 'calc(100vh - 200px)', // Adjust the height as needed
    marginBottom: theme.spacing(2),
  },
}));

const Resume = () => {
  const classes = useStyles();

  const handleDownload = () => {
    // Logic for downloading the PDF file
    // Replace 'path/to/pdf/file.pdf' with your actual PDF file path
    window.open('src/assets/Resume_DEMIREL_TECH.pdf', '_blank');
  };

  return (
    <div className={classes.root}>
      <PDFViewer className={classes.pdfViewer}>
        <iframe src={path} width="100%" height="100%" title='My Resume' />
      </PDFViewer>
      <Button variant="contained" color="primary" onClick={handleDownload}>
        Download
      </Button>
    </div>
  );
};

export default Resume;
