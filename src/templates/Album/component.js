import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';

import Layout from '../../components/Layout';
import CombineTracks from './CombineTracks';

const Album = ({ pageContext, classes }) => (
  <Layout>
    <Grid
      direction="column"
      className={classes.container}
      container
    >
      <Grid
        alignItems="center"
        item
        container
      >
        <Grid item className={classes.imageContainer}>
          <Img fluid={pageContext.image.fluid} className={classes.image} />
        </Grid>
        <Grid item className={classes.title}>
          <Typography variant="h2" align="center" color="inherit" gutterBottom>
            {pageContext.title}
          </Typography>
          <Typography variant="h3" align="center" color="inherit">
            {pageContext.year}
          </Typography>
        </Grid>
      </Grid>
      <Grid item className={classes.description}>
        {pageContext.description.description
          .split('<-$&%->')
          .map((item, index) => (
            <Typography key={index} align="justify" variant="title" color="inherit" paragraph>
              {' '+item}
            </Typography>
          ))
        }
      </Grid>
      <Typography variant="headline" color="inherit" className={classes.songs}>Tracks:</Typography>
      <CombineTracks tracks={pageContext.tracks}/>
    </Grid>
  </Layout>
);

Album.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default Album;




