import React from 'react';
import { Grid } from '@material-ui/core';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import YouTube from '../components/YouTube';
import Layout from '../components/Layout';

const IndexPage = ({ data }) => (
  <Layout>
    <Grid container justify="center" style={{marginTop: 80}}>
      <Img
        fluid={data.file.childImageSharp.fluid}
        style={{width: 'calc(100vw - 200px)', marginBottom: '40px'}}
      />
      {data.allContentfulImagineDragonsClip.edges.map(({ node }, index) => {
        const { title, key } = node;

        return index%2 === 0 ? (
          <YouTube key={key} title={title} videoId={key} />
        ) : (
          <YouTube key={key} title={title} videoId={key} reverse />
        )
      })}
    </Grid>
    
  </Layout>
);

export const queryPage = graphql`
  query clipList {
    allContentfulImagineDragonsClip (sort: {fields: [public], order: DESC}) {
      edges {
        node {
          title
          key
        }
      }
    }
    file (relativePath: { eq: "backgroundRoot.jpg" }) {
      childImageSharp {
        fluid (maxHeight: 2160) {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
          presentationWidth
          presentationHeight
        } 
      }
    }
  }
`;

export default IndexPage;
