import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { SheetsRegistry } from 'react-jss';
import PageTransition from 'gatsby-plugin-page-transitions';

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
                  <PageTransition
                    defaultStyle={{
                      transition: 'opacity 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
                      opacity: 0,
                    }}
                    transitionStyles={{
                      entering: { opacity: 1 },
                      entered: { opacity: 1 },
                      exiting: { opacity: 0 },
                    }}
                    transitionTime={500}
                  >
                    {children}
                  </PageTransition>
                </div>
              </>
          )}}
        />
    );
  };
};

export default Layout;
