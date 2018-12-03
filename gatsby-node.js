const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
      {
        allContentfulImagineDragonsAlboms {
          edges {
            node {
              id
              title
              year
              image {
                fluid (maxWidth: 200, maxHeight: 200) {
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
              description {
                description
              }
              tracks {
                id
                content
              }
            }
          }
        }
        allContentfulImagineDragonsArtist  {
          edges {
            node {
              id
              name
              position
              image {
                fluid (maxWidth: 400) {
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
              about {
                about
              }
            }
          }
        }
      }
      `).then(({ data }) => {
        data.allContentfulImagineDragonsAlboms.edges.map(({ node }) => {
          createPage({
            path: `/album/id=${node.id}/`,
            component: path.resolve(`src/templates/Album/index.js`),
            context: node,
          })
        });
        data.allContentfulImagineDragonsArtist.edges.map(({ node }) => {
          createPage({
            path: `/artist/id=${node.id}/`,
            component: path.resolve(`src/templates/Artist/index.js`),
            context: node,
          })
        });
      })
    )
  })
}
