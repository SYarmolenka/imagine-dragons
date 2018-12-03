import React from 'react';
import { Typography, MenuItem as MuiMenuItem, Grid } from '@material-ui/core';
import { Link } from "gatsby";
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const MenuItem = ({ id, title, image, path, classes }) => (
  <Link
    to={`/${path}/id=${id}/`}
    className={classes.link}
    activeClassName={classes.activeLink}
  >
    <MuiMenuItem
      className={classes.menuItem}
      disableGutters
      disableTouchRipple
    >
      <Grid container alignItems="center" wrap="nowrap">
        <Grid item>
          <div className={classes.imageContainer}>
            <Img fluid={image.fluid} className={classes.image} />
          </div>
        </Grid>
        <Grid item >
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Grid>
      </Grid>
    </MuiMenuItem>
  </Link>
);

MenuItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired,
};

export default MenuItem;