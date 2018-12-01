import React from 'react';
import { Link } from 'gatsby';
import { 
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';

import Menu from '../Menu';

const Header = ({ siteTitle, isOpenMenu, handleOpenMenu, classes }) => (
  <div className={classes.root}>
      <AppBar
        position="fixed"
      >
        <Toolbar className={classes.toolBar}>
          <IconButton
            aria-label="Menu"
            onClick={handleOpenMenu}
            color="inherit"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" color="inherit" >
            {siteTitle}
          </Typography>
        </Toolbar>
      </AppBar>
      <Menu isOpenMenu={isOpenMenu} />
    </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  isOpenMenu: PropTypes.bool.isRequired,
  handleOpenMenu: PropTypes.func.isRequired,
};

export default Header;
