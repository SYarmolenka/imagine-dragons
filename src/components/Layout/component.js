import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { MuiThemeProvider } from '@material-ui/core';
import { SheetsRegistry } from 'react-jss'

import theme from '../../theme';
import Header from '../Header';

class Layout extends Component {
  state = {
    isOpenMenu: false,
  };

  handleOpenMenu = () => {
    this.setState(({ isOpenMenu }) => ({ isOpenMenu: !isOpenMenu }));
  };

  render() {
    const { children, classes } = this.props;
    const { isOpenMenu } = this.state;

    return (
        <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
          render={data => {
            const sheets = new SheetsRegistry();
            return (
            <MuiThemeProvider theme={theme}>
              <>
                <Helmet
                  title={data.site.siteMetadata.title}
                >
                  <html lang="en" />
                  <style type="text/css">
                    {sheets.toString()}
                  </style>
                </Helmet>
                <Header
                  isOpenMenu={isOpenMenu}
                  handleOpenMenu={this.handleOpenMenu}
                  siteTitle={data.site.siteMetadata.title}
                />
                <div className={classes.root}>
                  {children}
                </div>
              </>
            </MuiThemeProvider>
          )}}
        />
    );
  };
};

export default Layout;
