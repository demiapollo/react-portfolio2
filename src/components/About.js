// the About Me title and section are selected by default (?) in the navbar

import React from 'react';
import { Grid, Typography, Paper, Avatar } from '@material-ui/core';
import profilePhoto from '../assets/profile_photo.jpg';

const About = () => {
  return (
    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={6} sm={4} alignItems="center" >
        {/* <img src={profilePhoto} alt="profilePhoto" /> */}

        <Avatar
          alt="Profile Photo"
          src={profilePhoto}
          // sx={{ width: 250, height: 250 }}
          style={{ height: '150px', width: '150px' }}
        />

      </Grid>
      <Grid item xs={12} sm={8}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5" component="h2">
            Apollo Demirel
          </Typography>
          <Typography variant="body1">
          I'm a full-stack developer with a background in marketing.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default About;
