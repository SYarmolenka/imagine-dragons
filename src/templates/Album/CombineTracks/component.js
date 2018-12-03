import React from 'react';
import {Grid, Typography, Divider} from '@material-ui/core';

const CombineTracks = ({ tracks, classes }) => {
  const half = Math.ceil(tracks.length / 2);
  const firstHalf = tracks.slice(0, half);
  const secondHalf = tracks.slice(half);

  return (
    <Grid item container spacing={8} justify="space-around">
      <Grid item xs={5}>
        {firstHalf.map(({ content, id }, index, arr) => {
          return index<arr.length - 1 ? (
          <div key={id}>
            <Typography color="inherit">
              {`${index + 1} - ${content}`}
            </Typography>
            <Divider className={classes.divider} />
          </div>
          ) : (
            <div key={id}>
              <Typography color="inherit">
                {`${index + 1} - ${content}`}
              </Typography>
            </div>
          )}
        )}
      </Grid>
      <Grid item xs={5}>
        {secondHalf.map(({ content, id }, index, arr) => {
          return index<arr.length - 1 ? (
            <div key={id}>
              <Typography color="inherit">
                {`${half + index + 1} - ${content}`}
              </Typography>
              <Divider className={classes.divider} />
            </div>
          ) : (
            <div key={id}>
              <Typography color="inherit">
                {`${half + index + 1} - ${content}`}
              </Typography>
            </div>
          )}
        )}
      </Grid>
    </Grid>
  )
}

export default CombineTracks;