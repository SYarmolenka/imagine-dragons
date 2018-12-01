import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import Layout from '../Layout';

const Album = ({ pageContext, classes }) => (
  <Layout>
    <div className={classes.imageContainer}>
      <Img fluid={pageContext.image.fluid} className={classes.image} />
    </div>
  </Layout>
);

Album.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default Album;




