import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import Layout from '../Layout';

const Artist = ({ pageContext, classes }) => (
  <Layout>
    <div className={classes.imageContainer}>
      <Img fluid={pageContext.avatar.fluid} className={classes.image} />
    </div>
  </Layout>
);

Artist.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default Artist;