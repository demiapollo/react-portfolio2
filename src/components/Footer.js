import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Link, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f0f0f0',
    padding: theme.spacing(2),
    marginTop: 'auto',
  },
  icon: {
    marginRight: theme.spacing(1),
    fontSize: 18,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Grid container direction="column" alignItems="center">
        <Typography variant="body2">
          Connect with me on:
        </Typography>
        <Grid container direction="row" justify="center" alignItems="center">
          <Link
            href="https://github.com/demiapollo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className={classes.icon} />
            
          </Link>
          <Link
            href="https://www.linkedin.com/in/apollodemirel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className={classes.icon} />
          </Link>
          <Link
            href="https://www.instagram.com/demi.apollo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className={classes.icon} />
            
          </Link> 
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
