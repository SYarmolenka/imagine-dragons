import React from 'react';
import YT from 'react-youtube';
import { Grid, CircularProgress, Typography } from '@material-ui/core';

const YouTube = ({ videoId, title, reverse, classes }) => (
  <Grid
    direction={reverse ? 'row-reverse' : 'row'}
    justify="space-between"
    alignItems="center"
    className={classes.container}
    wrap="nowrap"
    container
  >
    <Grid item>
      <div className={classes.videoContainer}>
        <div className={classes.video}>
          <YT
            videoId={videoId}
            opts={{
              height: 390,
              width: 640,
            }}
          />
        </div>
        <CircularProgress
          size={200}
          thickness={0.1}
          className={classes.spinner}
        />
      </div>
    </Grid>
    <Grid 
      ustify="center"
      alignItems="center"
      container
      item
    >
      <Typography variant="h3" className={classes.title} align="center" gutterBottom>
        {title}
      </Typography>
    </Grid>
  </Grid>
);

export default YouTube;