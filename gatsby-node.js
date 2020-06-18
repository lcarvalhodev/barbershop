const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const cutTemplate = path.resolve('src/templates/cutTemplate.js');

  return graphql(`
    {
        allCut {
          edges {
            node {
              id
            }
          }
        }
      }
    `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    result.data.allCut.edges.forEach(cut => {
      createPage({
        path: `/cut/${cut.node.id}`,
        component: cutTemplate,
        context: { cutId: cut.node.id }
      })
    });
  })
}