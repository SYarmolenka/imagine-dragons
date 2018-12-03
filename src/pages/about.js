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
        <img src={data.file.childImageSharp.fixed.src}/>
        {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
      </a>
    </div>
  </Layout>
);

export const queryPage = graphql`
  query gitHubLogo {
    file (relativePath: { eq: "github-logo.png" }) {
    childImageSharp {
      fixed(height: 200) {
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
`;

export default withStyles(styles)(AboutPage);
