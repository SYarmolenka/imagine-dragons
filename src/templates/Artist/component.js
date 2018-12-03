import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { Grid, Typography } from'@material-ui/core';

import Layout from '../../components/Layout';

const Artist = ({ pageContext, classes }) => (
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
          <Typography variant="h4" align="center" color="inherit" gutterBottom>
            {pageContext.name}
          </Typography>
          <Typography variant="h5" align="center" color="inherit">
            {pageContext.position}
          </Typography>
        </Grid>
      </Grid>
      <Grid item className={classes.description}>
        {pageContext.about.about
          .split('<-$&%->')
          .map((item, index) => (
            <Typography key={index} align="justify" variant="title" color="inherit" paragraph>
              {' '+item}
            </Typography>
          ))
        }
      </Grid>
    </Grid>
  </Layout>
);

Artist.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default Artist;