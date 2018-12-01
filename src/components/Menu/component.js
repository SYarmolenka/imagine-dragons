import React from 'react';
import { Drawer, MenuList, Divider, Typography } from '@material-ui/core';
import { StaticQuery, graphql } from 'gatsby';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import MenuItem from './MenuItem';

const Menu = ({ isOpenMenu, classes }) => (
  <Drawer
    className={isOpenMenu ? classes.menuOpen : classes.menuClose}
    variant="permanent"
    anchor="left"
    open={isOpenMenu}
    classes={{
      paper: classNames([classes.paper, isOpenMenu ? classes.menuOpen : classes.menuClose])
    }}
  >
    <StaticQuery 
      query={graphql`{
        allContentfulImagineDragonsAlboms {
          edges {
            node {
              id
              title
              image {
                fluid {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                }
              }
            }
          }
        }
        allContentfulImagineDragonsArtist {
          edges {
            node {
              id
              name
              avatar {
                fluid {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                }
              }
            }
          }
        }
      }`}
      render={
        data => (
          <MenuList>
            <Typography align="center" className={classes.title}>
              Albums
            </Typography>
            <Divider className={classes.divider} />
            {data.allContentfulImagineDragonsAlboms.edges.map(({node}) => (
              <MenuItem key={node.id} {...node} path="album" />
            ))}
            <Typography align="center" className={classes.title}>
              Band
            </Typography>
            <Divider
              classes={{
                root: classes.divider
              }}
            />
            {data.allContentfulImagineDragonsArtist.edges.map(({node}) => (
              <MenuItem
                key={node.id}
                id={node.id}
                title={node.name}
                image={node.avatar}
                path="artist"
              />
            ))}
          </MenuList>
        )
      }
    />
  </Drawer>
);

Menu.protoTypes = {
  isOpenMenu: PropTypes.bool.isRequired,
}

export default Menu;