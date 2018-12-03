import React from 'react';
import { Link } from 'gatsby';
import { 
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

import Menu from '../Menu';

const Header = ({ siteTitle, isOpenMenu, handleOpenMenu, classes }) => (
  <StaticQuery
    query={
      graphql`
      {
        allImageSharp (filter: {fixed: {originalName: {in: "spotify-logo.png"}}}) {
          edges {
            node {
              fixed (height: 40) {
                base64
                tracedSVG
                aspectRatio
                width
                height
                src
                srcSet
                srcWebp
                srcSetWebp
                originalName
              } 
            }
          }
        }
      }
      `
    }
    render={
      data => (
        <div>
          <AppBar
            position="fixed"
          >
            <Toolbar className={classes.toolBar}>
              <Grid container justify="space-between" wrap="nowrap">
                <Grid item container alignItems="center" wrap="nowrap">
                  <Grid item>
                    <IconButton
                      aria-label="Menu"
                      onClick={handleOpenMenu}
                      color="inherit"
                      className={classes.menuButton}
                    >
                      <MenuIcon />
                    </IconButton>
                  </Grid>
                  <Grid item >
                    <Typography variant="h4" color="inherit" noWrap>
                      {siteTitle}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  justify="space-between"
                  alignItems="center"
                  className={classes.headerMenu}
                  wrap="nowrap"
                  container
                  item
                  item
                >
                  <Grid item>
                    <Link to="/" className={classes.link} activeClassName={classes.activeLink}>
                      <Typography variant="title" color="inherit" >
                        Home
                      </Typography>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/about" className={classes.link} activeClassName={classes.activeLink}>
                      <Typography variant="title" color="inherit" >
                        About
                      </Typography>
                    </Link>
                  </Grid>
                  <Grid item>
                    <a href="https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q?si=C23TTaSOQ3acH3JWzSR3tg">
                      <Img fixed={data.allImageSharp.edges[0].node.fixed} className={classes.spotifyLogo}/>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <Menu isOpenMenu={isOpenMenu} />
        </div>
      )
    }
  />
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  isOpenMenu: PropTypes.bool.isRequired,
  handleOpenMenu: PropTypes.func.isRequired,
};

export default Header;
