const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    console.log(value)
    createNodeField({
      node,
      value,
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('src/templates/blogPost.js');

  const res = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              date
              author
              tag
            }
          }
        }
      }
    }
  `)
  res.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: postTemplate,
    });
  });
};
