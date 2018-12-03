import React from 'react'
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import withStyles from '../withStyles';

const styles = {
  container: {
    display: 'flex',
    justifyContent: "center",
    paddingTop: 'calc(50vh - 64px - 100px)',
  }
}

const AboutPage = ({ data, classes }) => (
  <Layout>
    <div className={classes.container}>
      <a href="https://github.com/SYarmolenka/imagine-dragons/tree/master">
        <Img fixed={data.allImageSharp.edges[0].node.fixed} />
      </a>
    </div>
  </Layout>
);

export const queryPage = graphql`
  query gitHubLogo {
    allImageSharp (filter: {fixed: {originalName: {in: "github-logo.png"}}}) {
      edges {
        node {
          fixed (height: 200) {
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
`;

export default withStyles(styles)(AboutPage);
